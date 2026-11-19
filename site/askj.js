/* Katviiz AI · Ask J · scripted and honest: J answers from the JSON embedded in the section (same-origin askj-data.json as a fallback).
   No model, no key, no request to anyone. A question J has no answer for becomes a prefilled WhatsApp / mailto that the visitor reads and sends.
   Shot hooks: ?shot=aj:idle | aj:match | aj:miss | aj:all | aj:v2 (any ?shot shows answers whole, as reduced motion does). */
(function () {
  var d = document, H = d.documentElement, root = d.getElementById('aj'); if (!root || !H.classList.contains('js')) return; /* the site sets html.js inline; without it the section stays in its JS-off form */
  var q0 = '';
  var still = H.classList.contains('still') || matchMedia('(prefers-reduced-motion: reduce)').matches;
  var whole = still || !!q0; /* reduced motion or a render: no typing */
  var shot = q0.indexOf('aj:') === 0 ? q0 : '';
  var $ = function (s, r) { return (r || root).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || root).querySelectorAll(s)); };
  var form = $('#aj-form'), input = $('#aj-in'), chips = $('#aj-chips'), more = $('#aj-more'), out = $('#aj-out');
  var you = $('#aj-you'), ans = $('#aj-ans'), linkP = $('#aj-link'), next = $('#aj-next'), hand = $('#aj-hand'), note = $('#aj-hand-note'), sr = $('#aj-sr'), waBtn = $('#aj-wa'), mailBtn = $('#aj-mail');
  var DATA = null, BY = {}, turns = {}, token = 0, swapT = 0, MAX = 500;
  ans.setAttribute('aria-hidden', 'true'); /* the typed line is visual only; screen readers get the whole answer once, from #aj-sr */

  function boot(data) {
    DATA = data; BY = {};
    data.items.forEach(function (it) { BY[it.id] = it; });
    /* the stones: every curated question is a chip; the featured ones show first, the rest behind "All N questions" */
    chips.textContent = '';
    var feat = data.featured || [];
    data.items.forEach(function (it) {
      var li = d.createElement('li'); if (feat.indexOf(it.id) < 0) li.className = 'more';
      var b = d.createElement('button'); b.type = 'button'; b.className = 'aj-chip'; b.dataset.id = it.id; b.textContent = it.q;
      li.appendChild(b); chips.appendChild(li);
    });
    more.hidden = feat.length >= data.items.length;
    $('.aj-more-n', more).textContent = String(data.items.length);
    ans.textContent = data.idle; ans.classList.add('idle'); sr.textContent = data.idle;
    if (shot === 'aj:match' && BY.own) ask(BY.own.q, BY.own);
    else if (shot === 'aj:miss') ask('Do you make coffee?');
    else if (shot === 'aj:v2' && BY.cost) { ask(BY.cost.q, BY.cost); ask(BY.cost.q, BY.cost); }
    else if (shot === 'aj:all') chips.classList.add('all');
  }

  /* ---- matching: keywords, stems, prefixes and near-spellings against each entry's keys and its own question ---- */
  var STOP = { the: 1, a: 1, an: 1, is: 1, are: 1, do: 1, does: 1, did: 1, your: 1, we: 1, our: 1, i: 1, my: 1, it: 1, of: 1, to: 1, and: 1, or: 1, can: 1, with: 1, for: 1, in: 1, on: 1, me: 1, this: 1, that: 1, be: 1, will: 1, there: 1, any: 1, about: 1, us: 1, have: 1, has: 1, if: 1, at: 1, by: 1, from: 1, please: 1, tell: 1, know: 1, want: 1, would: 1, like: 1, should: 1, could: 1, get: 1, go: 1, one: 1, some: 1, you: 1 };
  function tokens(s) { return String(s).toLowerCase().replace(/[’']/g, '').replace(/[^a-z0-9\s-]/g, ' ').split(/[\s-]+/).filter(function (t) { return t && !STOP[t]; }); }
  function stem(t) { return t.replace(/(ations?|ing|ies|ed|es|s)$/, function (m) { return m === 'ies' ? 'y' : ''; }); }
  function lev(a, b) { /* small Levenshtein, enough for one or two slips */
    if (a === b) return 0; if (Math.abs(a.length - b.length) > 2) return 3;
    var prev = [], cur = [], i, j; for (j = 0; j <= b.length; j++) prev[j] = j;
    for (i = 1; i <= a.length; i++) { cur[0] = i; for (j = 1; j <= b.length; j++) cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)); prev = cur.slice(); }
    return prev[b.length];
  }
  function near(q, k) { /* q = a query token, k = a key token */
    if (q === k) return 1; var sq = stem(q), sk = stem(k); if (sq === sk) return 1;
    if (q.length >= 4 && (k.indexOf(q) === 0 || q.indexOf(k) === 0) && Math.min(q.length, k.length) >= 4) return .8;
    if (q.length >= 5 && lev(sq, sk) <= (q.length >= 8 ? 2 : 1)) return .8;
    return 0;
  }
  function match(text) {
    var qt = tokens(text); if (!qt.length) return null;
    var norm = qt.join(' '), best = null;
    DATA.items.forEach(function (it) {
      var keyT = [], own = tokens(it.q); it.keys.forEach(function (k) { tokens(k).forEach(function (t) { keyT.push(t); }); });
      var s = 0;
      if (own.join(' ') === norm) s += 10;
      qt.forEach(function (t) {
        var kb = 0, ob = 0;
        keyT.forEach(function (k) { kb = Math.max(kb, near(t, k)); });
        own.forEach(function (k) { ob = Math.max(ob, near(t, k)); });
        s += kb * 2 + ob - (kb || ob ? 0 : 0.5); /* a word J has nothing for counts against the match: "make coffee" must not land on "build" */
      });
      if (!best || s > best.s) best = { it: it, s: s };
    });
    if (!best || best.s < 2) return null;
    return best.it;
  }

  /* ---- J's line: the next variant in a fixed order, from the first on every page load ---- */
  function pick(it) { var list = [].concat(it.a), n = turns[it.id] || 0; turns[it.id] = n + 1; return list[n % list.length]; }
  function safeHref(h) { return (/^#[a-z0-9][a-z0-9-]*$/i.test(h) || h === 'privacy.html') ? h : ''; }

  /* ---- typing: phrase by phrase, a little uneven, like someone talking; a new question stops the old one ---- */
  var BREAK = /^(and|or|but|so|to|for|with|that|which|before|after|against|from|into|on|in|of|when|if|because|while|like|until)$/i;
  function phrases(text) {
    var w = text.split(' '), outp = [], cur = [];
    for (var i = 0; i < w.length; i++) {
      if (cur.length >= 2 && BREAK.test(w[i])) { outp.push(cur.join(' ')); cur = []; }
      cur.push(w[i]);
      if (/[.,:;!?]$/.test(w[i]) || cur.length >= 6) { outp.push(cur.join(' ')); cur = []; }
    }
    if (cur.length) outp.push(cur.join(' '));
    return outp;
  }
  function typeOut(text, my, done) {
    ans.textContent = '';
    if (whole) { ans.textContent = text; done(); return; }
    var ps = phrases(text), i = 0, caret = d.createElement('i'); caret.className = 'cursor'; caret.setAttribute('aria-hidden', 'true');
    ans.appendChild(caret);
    (function step() {
      if (my !== token) return;
      var p = ps[i], s = d.createElement('span'); s.className = 'ph'; s.textContent = (i ? ' ' : '') + p;
      ans.insertBefore(s, caret); i++;
      if (i >= ps.length) { caret.remove(); done(); return; }
      var tail = p.charAt(p.length - 1), ms = (70 + 22 * p.split(' ').length) * (0.8 + Math.random() * 0.4) + (/[.!?]/.test(tail) ? 150 : /[,:;]/.test(tail) ? 60 : 0);
      setTimeout(step, ms);
    })();
  }
  function showNext(it) {
    next.textContent = '';
    (it.next || []).forEach(function (id, k) {
      var t = BY[id]; if (!t || id === it.id) return;
      var b = d.createElement('button'); b.type = 'button'; b.className = 'aj-fu'; b.dataset.id = id; b.textContent = t.q; b.style.setProperty('--i', k);
      next.appendChild(b);
    });
    next.hidden = !next.firstChild;
  }
  function ask(text, it) {
    text = String(text || '').trim().slice(0, MAX); if (!text || !DATA) return;
    it = it || match(text);
    var my = ++token; clearTimeout(swapT);
    var paint = function () {
      if (my !== token) return;
      var line = it ? pick(it) : DATA.miss; /* picked when shown, so a cancelled question does not use up a variant */
      you.hidden = false; $('.aj-you-t', you).textContent = text;
      ans.classList.remove('idle'); linkP.hidden = true; hand.hidden = true; note.hidden = true; next.hidden = true; next.textContent = '';
      sr.textContent = 'J: ' + line;
      if (it) {
        var h = it.link && safeHref(it.link.href);
        if (h) { var a = $('a', linkP); a.setAttribute('href', h); $('.aj-link-t', a).textContent = it.link.text; linkP.hidden = false; }
        $$('.aj-chip').forEach(function (b) { if (b.dataset.id === it.id) b.classList.add('asked'); });
        typeOut(line, my, function () { showNext(it); });
      } else {
        var msg = 'Hi Kathan, J on the Katviiz AI site could not answer this one:\n"' + text + '"';
        waBtn.href = 'https://wa.me/917435923555?text=' + encodeURIComponent(msg);
        mailBtn.href = 'mailto:katviz.ai5@gmail.com?subject=' + encodeURIComponent('A question J could not answer') + '&body=' + encodeURIComponent(msg);
        hand.hidden = false; note.hidden = false;
        typeOut(line, my, function () { });
      }
    };
    if (whole) { paint(); return; }
    out.classList.add('swap');
    swapT = setTimeout(function () { paint(); out.classList.remove('swap'); }, 240); /* the one pause J takes: under 300 ms, no fake thinking */
  }

  form.addEventListener('submit', function (e) { e.preventDefault(); ask(input.value); });
  chips.addEventListener('click', function (e) { var b = e.target.closest('.aj-chip'); if (!b) return; input.value = b.textContent; ask(b.textContent, BY[b.dataset.id]); });
  next.addEventListener('click', function (e) { var b = e.target.closest('.aj-fu'); if (!b) return; input.value = b.textContent; ask(b.textContent, BY[b.dataset.id]); });
  more.addEventListener('click', function () { var all = chips.classList.toggle('all'); more.setAttribute('aria-expanded', all ? 'true' : 'false'); });

  window.KVAskJ = { ask: function (t) { ask(t); }, match: function (t) { var it = DATA && match(t); return it ? it.id : null; } };

  /* ---- data: the embedded copy first (no request at all), else the JSON beside the script ---- */
  var inline = d.getElementById('askj-data'), ok = false;
  if (inline) { try { boot(JSON.parse(inline.textContent)); ok = true; } catch (e) { } }
  if (!ok) fetch('askj-data.json').then(function (r) { return r.json(); }).then(boot).catch(function () { ans.textContent = 'J is not available right now. The answers he gives are also on this page.'; sr.textContent = ans.textContent; });
})();
