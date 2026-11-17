/* Katviiz AI · "Where do your hours go?" · progressive enhancement over the section's markup.
   State lives in localStorage under one versioned key; nothing is sent anywhere by itself.
   Shot hooks: ?shot=sc:empty | sc:mid | sc:verdict (state is not saved while a shot runs). */
(function () {
  var KEY = 'kv.selfcheck.v1', BANDS = { 0: '0', 1: '1–2', 3: '3–5', 6: '6–10', 10: '10+' }, ALLOWED = [0, 1, 3, 6, 10];
  var d = document, H = d.documentElement, root = d.getElementById('sc'); if (!root || !H.classList.contains('js')) return; /* the site sets html.js inline; without it the section stays in its JS-off form */
  var still = H.classList.contains('still') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  var shot = (new URLSearchParams(location.search).get('shot') || ''); if (shot.indexOf('sc:') !== 0) shot = '';
  var $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || root).querySelectorAll(s)); };
  var qs = $$('.sc-q'), N = qs.length, steps = $$('#sc-steps li'), stage = $('#sc-stage'), back = $('#sc-back'), line = $('#sc-line');
  var verdict = $('#sc-verdict'), weekEl = $('#sc-week'), monthEl = $('#sc-month'), leaksEl = $('#sc-leaks'), book = $('#sc-book'), wa = $('#sc-wa');
  var rowsEl = $('#sc-rows'), sumEl = $('#sc-sum'), reset = $('#sc-reset');
  var meta = qs.map(function (f) { return { short: f.dataset.short, build: f.dataset.build, item: $('.sc-item', f).firstChild.textContent.trim() }; });
  var a = [], cur = 0, timer = 0;
  for (var i = 0; i < N; i++) a.push(null);

  /* ---- storage: one key, versioned; a corrupt value resets and J says so ---- */
  function load() {
    var raw = null; try { raw = localStorage.getItem(KEY); } catch (e) { return 'empty'; }
    if (raw == null) return 'empty';
    try {
      var s = JSON.parse(raw);
      if (!s || s.v !== 1 || !Array.isArray(s.a) || s.a.length !== N) throw new Error('shape');
      for (var k = 0; k < N; k++) if (s.a[k] !== null && ALLOWED.indexOf(s.a[k]) < 0) throw new Error('value');
      a = s.a.slice(); return 'ok';
    } catch (e) { try { localStorage.removeItem(KEY); } catch (_) { } return 'corrupt'; }
  }
  function save() { if (shot) return; try { localStorage.setItem(KEY, JSON.stringify({ v: 1, a: a, t: Date.now() })); } catch (e) { } }
  function clear() { try { localStorage.removeItem(KEY); } catch (e) { } }

  /* ---- the sums: each answer counted at the low end of its band; a month = 4.3 weeks ---- */
  function answered() { return a.filter(function (v) { return v !== null; }).length; }
  function week() { return a.reduce(function (s, v) { return s + (v || 0); }, 0); }
  function month(w) { return Math.round(w * 4.3); }
  function leaks() { /* the three biggest, ties in question order, zero never leaks */
    return a.map(function (v, k) { return { k: k, v: v || 0 }; }).filter(function (x) { return x.v > 0; })
      .sort(function (p, q) { return q.v - p.v || p.k - q.k; }).slice(0, 3);
  }

  /* ---- J's lines: calm, precise, a little dry; "left" is indexed by questions still open ---- */
  var SAY = {"corrupt": "Your saved answers came back scrambled, so I cleared them. Start from the top.", "empty": "Rough numbers are fine. I count each answer at the low end of its band.", "left": ["", "Last one.", "Two left.", "Past halfway. Three left.", "Keep going. Four left.", "Five left.", "Noted. Six to go."], "zero": "Zero across the board. Either it's all built already, or nobody has counted yet.", "small": "Small leaks, for now. Worth knowing where they are before they grow.", "some": "Real hours. The top leak below is the first place we'd look.", "lots": "That's a lot of hours done by hand each week. Bring this ledger to the call, and we'll start there."};
  function jLine(state) {
    if (state === 'corrupt') return SAY.corrupt;
    if (state === 'empty') return SAY.empty;
    if (state === 'mid') return SAY.left[N - answered()] || '';
    var w = week();
    return w === 0 ? SAY.zero : w < 6 ? SAY.small : w < 20 ? SAY.some : SAY.lots;
  }
  function say(t) {
    if (line.textContent === t) return;
    if (still) { line.textContent = t; return; }
    line.classList.add('swap');
    setTimeout(function () { line.textContent = t; line.classList.remove('swap'); }, 220);
  }

  /* ---- the ledger: one row a question; the bar is the cut, its length the low end of the band (10 = full) ---- */
  var rows = meta.map(function (m, k) {
    var li = d.createElement('li'); li.className = 'sc-row empty';
    li.innerHTML = '<span class="sc-row-l"></span><span class="sc-row-v">—</span><span class="sc-bar" aria-hidden="true"></span>';
    $('.sc-row-l', li).textContent = m.short; rowsEl.appendChild(li); return li;
  });
  function paintLedger() {
    var top = leaks().map(function (x) { return x.k; }), done = answered() === N;
    rows.forEach(function (li, k) {
      var v = a[k], bar = $('.sc-bar', li), val = $('.sc-row-v', li);
      li.classList.toggle('empty', v === null); li.classList.toggle('on', v !== null); li.classList.toggle('now', k === cur && !done);
      li.classList.toggle('top', done && top.indexOf(k) >= 0);
      val.textContent = v === null ? '—' : BANDS[v] + ' h';
      bar.style.setProperty('--w', v === null ? '3%' : v === 0 ? '3%' : (14 + v * 8.6).toFixed(1) + '%');
    });
    var w = week();
    sumEl.innerHTML = '<strong></strong>' + (done ? ' hours a week, at the low end' : ' hours a week so far');
    $('strong', sumEl).textContent = String(w);
  }

  /* ---- the flow: one question a screen; a chip answers and advances; Back goes one up ---- */
  function show(k, dir) {
    var from = qs[cur]; cur = k;
    qs.forEach(function (f, i) { f.classList.toggle('now', i === k); f.classList.remove('leave'); });
    steps.forEach(function (s, i) { s.classList.toggle('done', a[i] !== null && i !== k); s.classList.toggle('now', i === k); });
    back.hidden = k === 0;
    $$('input', qs[k]).forEach(function (r) { r.checked = a[k] !== null && +r.value === a[k]; });
    paintLedger();
  }
  function advance(k) {
    if (k >= N) { finish(); return; }
    if (still) { show(k); return; }
    var f = qs[cur]; f.classList.add('leave');
    setTimeout(function () { show(k); }, 160);
  }
  function finish() {
    root.dataset.state = 'done'; verdict.hidden = false;
    qs.forEach(function (f) { f.classList.remove('now', 'leave'); });
    steps.forEach(function (s) { s.classList.add('done'); s.classList.remove('now'); });
    var w = week(), m = month(w), L = leaks();
    weekEl.textContent = String(w); monthEl.textContent = String(m);
    leaksEl.innerHTML = '';
    if (!L.length) { var li0 = d.createElement('li'); li0.className = 'sc-none'; li0.textContent = 'None named: every answer was 0.'; leaksEl.appendChild(li0); }
    L.forEach(function (x, i) {
      var li = d.createElement('li'); li.style.setProperty('--i', i);
      li.innerHTML = '<span class="sc-leak-q"></span> <span class="sc-leak-h"></span><span class="sc-leak-b"></span>';
      $('.sc-leak-q', li).textContent = meta[x.k].item.charAt(0).toUpperCase() + meta[x.k].item.slice(1) + ':';
      $('.sc-leak-h', li).textContent = BANDS[x.v] + ' hours a week';
      $('.sc-leak-b', li).textContent = meta[x.k].build;
      leaksEl.appendChild(li);
    });
    /* the share links: the ledger goes into the message; the visitor reads it and chooses to send */
    var lines = ['Hi Kathan, I did the hours check on the Katviiz AI site. Hours a week, low end of each band:'];
    meta.forEach(function (mm, k) { lines.push('- ' + mm.short + ': ' + BANDS[a[k]]); });
    lines.push('Total: ' + w + ' h a week, about ' + m + ' h a month.');
    if (L.length) lines.push('Biggest leaks: ' + L.map(function (x) { return meta[x.k].short; }).join(', ') + '.');
    lines.push("I'd like to book an audit call.");
    var text = lines.join('\n');
    wa.href = 'https://wa.me/917435923555?text=' + encodeURIComponent(text);
    book.href = 'mailto:katviz.ai5@gmail.com?subject=' + encodeURIComponent('Audit call') + '&body=' + encodeURIComponent(text);
    paintLedger(); say(jLine('done'));
  }
  function startOver(silent) {
    clearTimeout(timer); a = a.map(function () { return null; }); clear();
    root.dataset.state = 'empty'; verdict.hidden = true;
    $$('input', stage).forEach(function (r) { r.checked = false; });
    show(0); if (!silent) say(jLine('empty'));
  }
  function nextOpen(from) { for (var k = from; k < N; k++) if (a[k] === null) return k; return N; }

  stage.addEventListener('change', function (e) {
    var r = e.target; if (!r || r.type !== 'radio') return;
    var k = qs.indexOf(r.closest('.sc-q')); if (k < 0) return;
    a[k] = +r.value; save(); root.dataset.state = answered() === N ? 'done' : 'mid';
    paintLedger();
    clearTimeout(timer);
    var next = nextOpen(k + 1); if (next === N && answered() < N) next = nextOpen(0);
    if (answered() < N) say(jLine('mid'));
    timer = setTimeout(function () { advance(answered() === N ? N : next); }, still ? 0 : 240); /* the chip is seen lit before the question leaves */
  });
  back.addEventListener('click', function () { clearTimeout(timer); if (cur > 0) advance(cur - 1); });
  reset.addEventListener('click', function () { startOver(false); if (!shot) $('input', qs[0]).focus(); });

  /* ---- boot: restore, or reset a corrupt value, or take the render hook's state ---- */
  var st = load();
  if (shot === 'sc:empty') { a = a.map(function () { return null; }); st = 'empty'; }
  else if (shot === 'sc:mid') { a = [3, 1, 6, null, null, null, null]; st = 'ok'; }
  else if (shot === 'sc:verdict') { a = [3, 1, 6, 0, 10, 3, 1]; st = 'ok'; }
  if (st === 'corrupt') { root.dataset.state = 'empty'; show(0); say(jLine('corrupt')); }
  else if (answered() === N) { show(0); finish(); }
  else { var k0 = nextOpen(0); root.dataset.state = answered() ? 'mid' : 'empty'; show(k0); say(jLine(answered() ? 'mid' : 'empty')); }
  window.KVSelfCheck = { state: function () { return { answers: a.slice(), week: week(), month: month(week()), leaks: leaks() }; }, reset: function () { startOver(false); } };
})();
