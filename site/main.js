/* Katviiz AI · Phase 1b motion. Progressive enhancement: the page reads fully without this file (?shot=nojs). */
(function () {
  var d = document, H = d.documentElement, q = new URLSearchParams(location.search), shot = q.get('shot') || '';
  var still = H.classList.contains('still');
  var K3 = { on: false, state: 'idle', inst: null, pending: null, reason: null }; /* the 3D eye (set up after the open timeline); K3.on = the canvas is live, the DOM open/dive is bypassed */
  var $ = function (s, r) { return (r || d).querySelector(s); }, $$ = function (s, r) { return [].slice.call((r || d).querySelectorAll(s)); };

  /* reveals, once, in reading order */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('[data-rise]').forEach(function (el) { if (shot || still) el.classList.add('in'); else io.observe(el); });
  if (shot) $$('img[loading=lazy]').forEach(function (i) { i.loading = 'eager'; });

  /* the nav: a panel after the hero; the mark leaves while J is on screen (the eye and J never share a screen) */
  var nav = $('#nav'), hero = $('#hero'), build = $('#build'), jarvis = $('#j'), founder = $('#founder');
  /* the nav follows the ground under it: void text on bone chapters (and the positive mark), bone text on void, socket and the films */
  var grounds = $$('main > section'), under = $('.open .under'), holeTopY = Infinity;
  function navGround() {
    var y = 40, g = 'hero';
    for (var i = 0; i < grounds.length; i++) { var r = grounds[i].getBoundingClientRect(); if (r.top <= y && r.bottom > y) { var s = grounds[i];
      if (s === hero) { var st = window.KV && KV.open && KV.open.scrollTrigger; if (st) g = (st.progress > T || holeTopY <= nav.offsetHeight) ? 'bone' : 'hero'; else { var u = under.getBoundingClientRect(); g = (u.top <= y && u.bottom > y) ? 'bone' : 'hero'; } }
      else g = s.classList.contains('bone') ? 'bone' : 'dark'; break; } }
    nav.classList.toggle('on-bone', g === 'bone'); nav.classList.toggle('on-dark', g === 'dark');
  }
  addEventListener('scroll', navGround, { passive: true }); addEventListener('resize', navGround); navGround();
  new IntersectionObserver(function (es) { H.classList.toggle('jview', es[0].isIntersecting); }, { rootMargin: '-56px 0px 0px 0px' }).observe(jarvis);

  /* the mobile menu: closes on a link tap and on Escape, keeps focus inside while open */
  var mnav = $('#mnav');
  if (mnav) {
    var mlinks = $$('a', mnav), msum = $('summary', mnav);
    mnav.addEventListener('toggle', function () { H.classList.toggle('menu-open', mnav.open); if (mnav.open) mlinks[0].focus(); });
    mlinks.forEach(function (a) { a.addEventListener('click', function () { mnav.open = false; }); });
    addEventListener('keydown', function (e) {
      if (!mnav.open) return;
      if (e.key === 'Escape') { mnav.open = false; msum.focus(); }
      if (e.key === 'Tab') { var f = [msum].concat(mlinks), i = f.indexOf(d.activeElement); if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); } else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); } }
    });
  }

  /* the sticky mini action: after chapter 01, not while the founder's own action is on screen */
  var onFounder = false;
  function mini() { var st = window.KV && KV.open && KV.open.scrollTrigger, narrow = innerWidth < 768, thr = st ? st.start + (st.end - st.start) * (narrow ? 1.0 : 0.46) : hero.offsetHeight * 0.4; H.classList.toggle('mini-on', scrollY > thr && !onFounder); }
  var ownAct = {}, ioMini = new IntersectionObserver(function (es) { es.forEach(function (e) { ownAct[e.target.id] = e.isIntersecting; }); onFounder = Object.keys(ownAct).some(function (k) { return ownAct[k]; }); mini(); }, { threshold: 0.15 }); ioMini.observe(founder); ['self-check', 'ask-j'].forEach(function (id) { var el = document.getElementById(id); if (el) ioMini.observe(el); });
  addEventListener('scroll', mini, { passive: true }); mini();

  /* the quote engine mounts only when it is near */
  var ef = $('#engine-frame');
  function mountEngine() {
    if (ef.dataset.done) return; ef.dataset.done = '1';
    var f = d.createElement('iframe'); f.src = ef.dataset.src; f.title = 'Pixel Quote Max, the live quote engine'; f.loading = 'lazy';
    f.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin'); ef.appendChild(f); ef.classList.add('live');
  }
  var loadLive = $('#load-live'); if (loadLive) loadLive.addEventListener('click', function () { mountEngine(); loadLive.hidden = true; });
  if (shot === 'ch:4c') mountEngine();

  if (still || !window.gsap || !window.ScrollTrigger) { H.classList.add('open'); return; }
  gsap.registerPlugin(ScrollTrigger);

  /* weighted wheel scrolling (not for touch, not in render mode) */
  var lenis = null;
  if (!shot && window.Lenis && !matchMedia('(pointer:coarse)').matches) {
    lenis = new Lenis({ autoRaf: false, anchors: true, lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(function (t) { lenis.raf(t * 1000); });
    gsap.ticker.lagSmoothing(0);
  }

  /* ---- 0 + 1 · the open: blades open, the gem lights, the camera dives through it, chapter 01 comes out of the eye ---- */
  var eye = $('#eye'), wrap = $('#eyewrap'), over = $('.open .over'), flash = $('.open .flash');
  var tunnel = $('.tunnel'), rings = $$('.tunnel .ring'), glass = $('.eye .glass');
  var cutHead = $$('.cut-head h2, .cut-head .lede'), cutChap = $('.cut-head .chap'), stoneWrap = $('.cut-stone'), pieces = $$('.stone .piece'), rows = $$('.ledger .row'), cutGlow = $('.stone .cut-glow');
  var gem = $('.gem', eye), gl = $('.gl', eye), ed = $('.ed', eye), line = $('.line'), hook = $('.hook'), cue = $('#cue'), overBack = $('.open .over .hbg'), orbit = $('.orbit', wrap);
  var bl = $$('.bl', eye).map(function (g) { var p = g.dataset.p.split(' '); return { g: g, x: +p[0], y: +p[1], a: +g.dataset.a }; });
  function setEye(t) { /* 0 = shut, 1 = the master */
    var e = 1 - t, s = 1 + 0.1 * e;
    bl.forEach(function (b) { b.g.setAttribute('transform', 'translate(' + b.x + ' ' + b.y + ') rotate(' + (b.a * e).toFixed(2) + ') scale(' + s.toFixed(3) + ') translate(' + (-b.x) + ' ' + (-b.y) + ')'); });
  }
  setEye(0);
  gsap.set([gem, gl, ed], { opacity: 0 });
  var gp = { gs: 0.3, gls: 0.2 }; /* the gem and its glow sit at the SVG origin, so a bare scale() is exact: no origin maths */
  function setGem() { gem.setAttribute('transform', 'scale(' + gp.gs.toFixed(3) + ')'); gl.setAttribute('transform', 'scale(' + gp.gls.toFixed(3) + ')'); }
  setGem();
  gsap.set(cutHead, { opacity: 0, y: 28 });
  gsap.set(cutChap, { opacity: 0 }); cutChap.classList.add('in');
  gsap.set(stoneWrap, { opacity: 0, scale: 0.72, transformOrigin: '50% 50%' });
  gsap.set(rows, { opacity: 0, x: -28 });

  var HEX = [[0, -15.5], [13.42, -7.75], [13.42, 7.75], [0, 15.5], [-13.42, 7.75], [-13.42, -7.75]];
  var T = 0.4, DIVE = 0.58; /* the open takes the first 40% of the held scene = 4 screens, the 3D demo's scrub; the dive starts at 58% of the open */
  function sEnd() { /* the scale at which the gem's hexagon covers the whole viewport */
    var u = wrap.offsetWidth / 120, need = Math.hypot(innerWidth, innerHeight) / 2 + 80;
    return need / (13.42 * u);
  }
  function midPx() { /* the move that puts the gem (the wrap's centre, untransformed) on the stage centre */
    return { x: over.clientWidth / 2 - (wrap.offsetLeft + wrap.offsetWidth / 2), y: over.clientHeight / 2 - (wrap.offsetTop + wrap.offsetHeight / 2) };
  }
  function hole(p) { /* from the dive on, the over layer is cut by the gem's own hexagon, which grows with the eye; not on the 3D path (the canvas dives, .over fades at the end) */
    if (K3.on) { over.style.clipPath = ''; holeTopY = p >= 0.98 * T ? -1 : Infinity; return; } /* the nav turns bone halfway through the hand-off fade */
    if (p < DIVE * T || p > T + 0.02) { over.style.clipPath = ''; holeTopY = p > T ? -1 : Infinity; return; }
    var st = over.getBoundingClientRect(), r = wrap.getBoundingClientRect();
    var cx = r.left + r.width / 2 - st.left, cy = r.top + r.height / 2 - st.top, u = r.width / 120;
    holeTopY = cy - 15.5 * u;
    var pts = HEX.map(function (v) { return (cx + v[0] * u).toFixed(1) + 'px ' + (cy + v[1] * u).toFixed(1) + 'px'; });
    over.style.clipPath = 'polygon(evenodd, 0 0, 100% 0, 100% 100%, 0 100%, 0 0, ' + pts.join(', ') + ', ' + pts[0] + ')';
  }
  /* the stone's pieces: moved by attribute (translate along the piece's outward direction, shrinking about its centroid) */
  var pc = pieces.map(function (g) {
    var poly = g.querySelector('polygon'), pts = poly.getAttribute('points').trim().split(/\s+/).map(function (s) { return s.split(',').map(Number); });
    var cx = pts.reduce(function (a, p) { return a + p[0]; }, 0) / pts.length, cy = pts.reduce(function (a, p) { return a + p[1]; }, 0) / pts.length;
    return { g: g, dx: +g.dataset.dx, dy: +g.dataset.dy, cx: cx, cy: cy, t: 0, line: g.querySelector('.cutline') };
  });
  pc.forEach(function (p) { /* the fold edge: the cut line (inner edge) or, for the table, its top edge */
    var ln = p.line, pts = p.g.querySelector('polygon').getAttribute('points').trim().split(/\s+/).map(function (s) { return s.split(',').map(Number); });
    var a, b; if (ln) { a = [+ln.getAttribute('x1'), +ln.getAttribute('y1')]; b = [+ln.getAttribute('x2'), +ln.getAttribute('y2')]; } else { var srt = pts.slice().sort(function (u, v) { return u[1] - v[1]; }); a = srt[0]; b = srt[1]; }
    p.ex = (a[0] + b[0]) / 2; p.ey = (a[1] + b[1]) / 2; p.ea = Math.atan2(b[1] - a[1], b[0] - a[0]) * 180 / Math.PI;
  });
  function setPiece(p) { /* origami: the piece folds about its inner edge (foreshortened past the edge), then is gone */
    var sy = 1 - 1.15 * p.t, d = 40 * p.t;
    p.g.setAttribute('transform', 'translate(' + (p.dx * d).toFixed(1) + ' ' + (p.dy * d).toFixed(1) + ') translate(' + p.ex.toFixed(1) + ' ' + p.ey.toFixed(1) + ') rotate(' + p.ea.toFixed(2) + ') scale(1 ' + sy.toFixed(3) + ') rotate(' + (-p.ea).toFixed(2) + ') translate(' + (-p.ex).toFixed(1) + ' ' + (-p.ey).toFixed(1) + ')');
    p.g.style.opacity = (p.t < 0.6 ? 1 : 1 - (p.t - 0.6) / 0.4).toFixed(3);
  }
  var rg = rings.map(function (r) { return { r: r, s: 0.3, o: 0 }; });
  function setRing(x) { x.r.setAttribute('transform', 'scale(' + x.s.toFixed(3) + ')'); x.r.setAttribute('opacity', x.o.toFixed(3)); }
  var o = { t: 0 };
  var open = gsap.timeline({ defaults: { ease: 'none' }, onUpdate: function () { K3.drive(open.progress()); }, scrollTrigger: {
    trigger: hero, start: 'top top', end: 'bottom bottom', scrub: 0.35, invalidateOnRefresh: true,
    onUpdate: function (self) { hole(self.progress); navGround(); }, onRefresh: function (self) { hole(self.progress); navGround(); K3.drive(open.progress()); }
  } });
  open.to([line, hook, cue], { opacity: 0, y: -12, duration: 0.06 * T, ease: 'power1.out' }, 0)
    .to(orbit, { opacity: 0, duration: 0.04 * T }, 0)
    .to(o, { t: 1, duration: 0.26 * T, ease: 'power2.inOut', onUpdate: function () { setEye(o.t); } }, 0.04 * T)
    .to(ed, { opacity: 1, duration: 0.06 * T }, 0.24 * T)
    .to(gem, { opacity: 1, duration: 0.12 * T }, 0.26 * T).to(gp, { gs: 1, duration: 0.12 * T, ease: 'power2.out', onUpdate: setGem }, 0.26 * T)
    .to(gl, { opacity: 1, duration: 0.14 * T }, 0.28 * T).to(gp, { gls: 1.3, duration: 0.14 * T, ease: 'power2.out', onUpdate: setGem }, 0.28 * T)
    .to(gp, { gls: 1.55, duration: 0.12 * T, ease: 'sine.inOut', onUpdate: setGem }, 0.42 * T)   /* the held beat: the lit eye, breathing */
    .to(gp, { gls: 2.6, duration: 0.08 * T, ease: 'power1.inOut', onUpdate: setGem }, 0.54 * T)
    .fromTo(flash, { opacity: 0 }, { opacity: 0.85, duration: 0.02 * T, immediateRender: false }, 0.56 * T)
    .to(flash, { opacity: 0, duration: 0.22 * T, ease: 'power2.out' }, 0.6 * T)
    .to(glass, { attr: { opacity: 1 }, duration: 0.06 * T, ease: 'power1.out' }, 0.4 * T)
    .to(glass, { attr: { opacity: 0 }, duration: 0.06 * T }, 0.58 * T)
    .to(tunnel, { opacity: 1, duration: 0.01 * T }, DIVE * T)
    .to(tunnel, { opacity: 0, duration: 0.03 * T }, 0.95 * T)
    .to(wrap, { scale: function () { return sEnd(); }, duration: (0.96 - DIVE) * T, ease: 'expo.inOut' }, DIVE * T)
    /* the dive draws the gem to the stage centre (the 3D camera does the same over the same span); in % of the wrap, so the pointer parallax keeps x/y */
    .fromTo(wrap, { xPercent: 0, yPercent: 0 }, { xPercent: function () { return midPx().x / (wrap.offsetWidth || 1) * 100; }, yPercent: function () { return midPx().y / (wrap.offsetHeight || 1) * 100; }, duration: 0.108 * T, ease: 'none', immediateRender: false }, 0.6 * T)
    .fromTo(tunnel, { x: function () { return -midPx().x; }, y: function () { return -midPx().y; } }, { x: 0, y: 0, duration: 0.108 * T, ease: 'none' }, 0.6 * T)
    .to(overBack, { scale: 2.1, opacity: 0, duration: 0.3 * T, ease: 'power1.in', transformOrigin: '50% 50%' }, 0.62 * T)
    .to(cutChap, { opacity: 1, duration: 0.1 * T, ease: 'power1.out' }, 0.8 * T)
    .to(cutHead, { opacity: 1, y: 0, duration: 0.13 * T, ease: 'expo.out', stagger: 0.03 * T }, 0.82 * T)
    .to(stoneWrap, { opacity: 1, scale: 1, duration: 0.12 * T, ease: 'expo.out' }, 0.9 * T)
    .to(over, { opacity: 0, duration: 0.04 * T }, 0.96 * T); /* the hand-off: on the 3D path this is the fade from the tunnel's end to chapter 01 */
  rg.forEach(function (x, k) { /* the tunnel: four facet rings rush outward from the gem, staggered, while the camera dives */
    var D = (0.96 - DIVE) * T, at = DIVE * T + k * 0.11 * D, dur = 0.58 * D;
    open.fromTo(x, { s: 0.25, o: 0 }, { s: 0.25, o: 0.95, duration: 0.08 * D, ease: 'power1.out', immediateRender: false, onUpdate: function () { setRing(x); } }, at)
        .to(x, { s: 24, duration: dur, ease: 'power3.in', onUpdate: function () { setRing(x); } }, at)
        .to(x, { o: 0, duration: 0.2 * D, ease: 'power1.in', onUpdate: function () { setRing(x); } }, at + dur * 0.8);
  });
  /* the cut: seven beats, one piece each; the cut line draws, the piece leaves toward the ledger, the line of the ledger arrives */
  var CUT0 = 0.44, STEP = 0.077; /* the cut keeps its 5.5 screens after the 4-screen open */
  pc.forEach(function (p, k) {
    var at = CUT0 + k * STEP;
    if (p.line) open.to(p.line, { attr: { 'stroke-dashoffset': 0 }, duration: 0.025, ease: 'power1.inOut' }, at);
    open.to(p, { t: 1, duration: 0.05, ease: 'power2.in', onUpdate: function () { setPiece(p); } }, at + 0.02);
    if (rows[k]) open.to(rows[k], { opacity: 1, x: 0, duration: 0.05, ease: 'power2.out' }, at + 0.045);
  });
  if (cutGlow) open.to(cutGlow, { attr: { opacity: 1 }, duration: 0.05 }, CUT0 + 6 * STEP + 0.04);
  open.add(function () {}, 1); /* pins the timeline's duration to exactly 1, so scene progress p = timeline time (the last cut beat ends at 0.997) */
  function sceneY(p) { var st = open.scrollTrigger; return st.start + (st.end - st.start) * p; }
  function glide(y) { if (lenis) lenis.scrollTo(y, { duration: 1.8 }); else scrollTo({ top: y, behavior: 'smooth' }); }
  cue.addEventListener('click', function () { glide(sceneY(T + 0.02)); });

  /* ---- hero auto-play: a visitor who does nothing for 5 s at the top gets the open played for them: 0 -> the end of the open
     (chapter 01 landed) over 9 s, power2.inOut (a slow open, the dive at speed, a soft landing), so the 3D plays at the demo's pace. Any wheel /
     touch / key / pointer-down cancels at once and the scroll stays where it is; pointer movement only re-arms the 5 s wait. Once per visit
     (sessionStorage), never on reduced motion, a hash, a ?shot, or once the visitor has scrolled. Works on both the 3D and the SVG path. ---- */
  var auto = { state: 'wait', raf: 0, t0: 0, dur: 9000, from: 0, to: 0, timer: 0, lastY: -1 }, AUTO_KEY = 'kv_autoplay';
  function autoOk() { try { return !still && !shot && !location.hash && scrollY < 2 && !sessionStorage.getItem(AUTO_KEY); } catch (e) { return false; } }
  function autoArm() { if (auto.state !== 'wait') return; clearTimeout(auto.timer); if (document.visibilityState !== 'visible') return; auto.timer = setTimeout(autoStart, 5000); }
  function autoCancel() {
    if (auto.state === 'wait') { auto.state = 'off'; clearTimeout(auto.timer); }
    else if (auto.state === 'play') { auto.state = 'done'; if (auto.raf) cancelAnimationFrame(auto.raf); auto.raf = 0; H.classList.remove('autoplay'); }
  }
  function autoEase(x) { return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2; }
  function autoStep(now) {
    auto.raf = 0; if (auto.state !== 'play') return;
    if (auto.lastY >= 0 && Math.abs(scrollY - auto.lastY) > 6) return autoCancel(); /* something else moved the page (scrollbar drag): the visitor wins */
    if (!auto.t0) auto.t0 = performance.now();
    var k = Math.min(1, Math.max(0, (now - auto.t0) / auto.dur)), y = Math.round(auto.from + (auto.to - auto.from) * autoEase(k));
    if (lenis) lenis.scrollTo(y, { immediate: true, force: true }); else scrollTo(0, y);
    auto.lastY = scrollY;
    if (k < 1) auto.raf = requestAnimationFrame(autoStep); else { auto.state = 'done'; H.classList.remove('autoplay'); }
  }
  function autoStart() {
    if (document.visibilityState !== 'visible') return;
    if (auto.state !== 'wait' || !autoOk()) { auto.state = 'off'; return; }
    try { sessionStorage.setItem(AUTO_KEY, '1'); } catch (e) { /* storage off: plays, may repeat */ }
    auto.state = 'play'; auto.from = scrollY; auto.to = sceneY(T); auto.t0 = 0; auto.lastY = -1; H.classList.add('autoplay');
    auto.raf = requestAnimationFrame(autoStep);
  }
  if (autoOk()) {
    ['wheel', 'touchstart', 'keydown', 'pointerdown'].forEach(function (ev) { addEventListener(ev, autoCancel, { passive: true, capture: true }); });
    addEventListener('pointermove', function () { if (auto.state === 'wait') autoArm(); }, { passive: true });
    addEventListener('scroll', function () { if (auto.state === 'wait' && scrollY > 2) autoCancel(); }, { passive: true });
    document.addEventListener('visibilitychange', function () { var vis = document.visibilityState === 'visible'; if (auto.state === 'wait') { if (vis) autoArm(); else clearTimeout(auto.timer); } else if (auto.state === 'play' && !vis) autoCancel(); });
    if (document.readyState === 'complete') autoArm(); else addEventListener('load', autoArm, { once: true });
  } else auto.state = 'off';
  window.KVAuto = { state: function () { return auto.state; }, cancel: autoCancel, start: autoStart, dur: auto.dur };
  $$('a[href="#build"]').forEach(function (a) { a.addEventListener('click', function (e) { e.preventDefault(); glide(sceneY(T + 0.02)); }); });

  /* ---- the hero world: pointer parallax on the three shard layers (never on touch; the eye moves least), the grain tile re-offset at 24 Hz; only while the hero is on screen, never in render mode ---- */
  var hl = $$('.open .over .hl'), grain = $('.grain'), heroOn = false, hraf = 0, hpaused = !!shot, hs = { frames: 0, ms: 0 };
  var fine = !matchMedia('(pointer:coarse)').matches, px = 0, py = 0, tx = 0, ty = 0, lastG = 0, DEPTH = [[7, 4], [15, 9], [28, 17]];
  function heroFrame(t) {
    hraf = 0; if (!heroOn || hpaused) return;
    var a = performance.now();
    if (fine && !K3.on && (Math.abs(tx - px) > 0.002 || Math.abs(ty - py) > 0.002)) {
      px += (tx - px) * 0.07; py += (ty - py) * 0.07;
      for (var i = 0; i < hl.length; i++) hl[i].style.transform = 'translate3d(' + (px * DEPTH[i][0]).toFixed(1) + 'px,' + (py * DEPTH[i][1]).toFixed(1) + 'px,0)';
      gsap.set(wrap, { x: -px * 3, y: -py * 2 });
    }
    if (grain && t - lastG >= 40) { lastG = t; grain.style.transform = 'translate3d(' + (Math.random() * 220 | 0) + 'px,' + (Math.random() * 220 | 0) + 'px,0)'; }
    hs.frames++; hs.ms += performance.now() - a;
    hraf = requestAnimationFrame(heroFrame);
  }
  function heroRun() { if (heroOn && !hpaused && !hraf) hraf = requestAnimationFrame(heroFrame); }
  if (fine) addEventListener('pointermove', function (e) { if (heroOn) { tx = (e.clientX / innerWidth - 0.5) * 2; ty = (e.clientY / innerHeight - 0.5) * 2; if (K3.inst) K3.inst.setPointer(tx, ty); } }, { passive: true });
  new IntersectionObserver(function (es) { heroOn = es[0].isIntersecting; heroRun(); }).observe(hero);
  window.KVHero = { stats: function () { return { frames: hs.frames, avgMs: hs.frames ? +(hs.ms / hs.frames).toFixed(3) : 0, running: !!hraf }; }, pause: function () { hpaused = true; if (hraf) cancelAnimationFrame(hraf); hraf = 0; }, resume: function () { hpaused = false; heroRun(); } };

  /* ---- the 3D eye: Eye3D (eye3d/eye3d.js, ~600 KB, deferred to idle after load). A full-stage canvas behind the chrome, swapped in with a 400 ms
     cross-fade after its first drawn frame; driven by the open timeline's progress (0..1 of the open = the demo's p); the SVG + CSS world stays as the
     fallback (hidden, not removed). Fallbacks: no WebGL2 / software GL / init throw / context lost / reduced motion (also mid-session) / save-data /
     a phone whose first 10 frames average over 12 ms. Hooks: ?shot=eye3d:x forces the 3D path (x = 0..1 of the open, &idle=s mid-sweep, &sw=1 allows
     software GL for SwiftShader renders), ?shot=nogl[:x] forces the fallback. ---- */
  var stage3 = $('#eye3d-stage'), force3 = shot.indexOf('eye3d:') === 0, nogl = shot === 'nogl' || shot.indexOf('nogl:') === 0;
  function k3Fit(w, h) { /* where the SVG eye sits inside the stage (layout box, untransformed): the eye is 100 of the wrap's 120 units */
    return { cx: wrap.offsetLeft + wrap.offsetWidth / 2, cy: wrap.offsetTop + wrap.offsetHeight / 2, w: wrap.offsetWidth * 100 / 120 };
  }
  function k3Done(fade) { /* the 3D decision is made: the shard background may show (faded in on the fallback path, never in render mode) */
    if (!H.classList.contains('k3-wait')) return;
    if (fade && !shot) { H.classList.add('k3-in'); setTimeout(function () { H.classList.remove('k3-in'); }, 600); }
    H.classList.remove('k3-wait');
  }
  function k3Fallback(reason) {
    if (K3.state === 'fallback') return;
    var wasOn = K3.on; K3.state = 'fallback'; K3.on = false; K3.reason = reason; K3.pending = null;
    var i = K3.inst; K3.inst = null; if (i) { try { i.destroy(); } catch (e) { /* already gone */ } }
    H.classList.remove('eye3d-on'); k3Done(true);
    if (K3.canvas && K3.canvas.parentNode) K3.canvas.parentNode.removeChild(K3.canvas); K3.canvas = null;
    if (wasOn) { hole(open.progress()); navGround(); }
    if (K3.onReady) { var f = K3.onReady; K3.onReady = null; f(); }
  }
  K3.drive = function (pr) { /* pr = the open timeline's (scrubbed) progress, 0..1 of the held scene */
    if (K3.inst) K3.inst.setProgress(pr / T);
    if (K3.pending && (pr < DIVE * T || pr >= T)) { var f = K3.pending; K3.pending = null; f(); } /* a swap that waited for the dive to pass */
  };
  function k3Mount() {
    if (K3.state !== 'loading') return;
    if (!window.Eye3D || !Eye3D.supported()) return k3Fallback(window.Eye3D ? 'unsupported' : 'no-script');
    var c = document.createElement('canvas'); c.setAttribute('aria-hidden', 'true'); stage3.appendChild(c); K3.canvas = c;
    var inst = null;
    function swap() { /* the first frame is drawn: cross-fade the canvas in and the SVG world out */
      if (K3.state !== 'loading') return;
      K3.state = 'on'; K3.on = true; K3.tFirst = Math.round(performance.now());
      H.classList.add('eye3d-on'); k3Done(false); hole(open.progress()); navGround();
      if (shot) { inst.setTime(2); if (q.has('idle')) inst.setIdle(+q.get('idle')); } /* render mode: a fixed clock */
      K3.drive(open.progress());
      if (K3.onReady) { var f = K3.onReady; K3.onReady = null; f(); }
    }
    function gate() { /* never swap in the middle of the DOM dive: wait until the scroll leaves that window */
      var pr = open.progress(); if (pr >= DIVE * T && pr < T) K3.pending = swap; else swap();
    }
    try {
      inst = Eye3D.init(c, { rest: 'shut', smoothing: false, grain: false, fit: k3Fit, allowSoftware: q.has('sw'), onFallback: k3Fallback,
        onFirstFrame: function (i) {
          if (K3.state !== 'loading') return;
          if (!fine) { /* phones: the first 10 frames (GPU included) must average under 12 ms, else the SVG path */
            i.bench(10, true).then(function (b) { K3.phoneMs = b.mean; if (K3.state !== 'loading') return; if (b.mean > 12) k3Fallback('slow:' + b.mean + 'ms'); else gate(); });
          } else if (shot) gate();
          else { /* desktop: measure the display's frame interval now (8 rAF gaps, the second-smallest, so a load stall can't inflate it); while one 3D frame
                    costs more than half of it, shrink the canvas (cap 1, then 0.75), re-measure, then swap in */
            var gaps = [], tp = 0, steps = (window.devicePixelRatio || 1) > 1 ? [1, 0.75] : [0.75], tune = function () {
              i.bench(10, true).then(function (b) { K3.benchMs = b.mean; if (K3.state !== 'loading') return;
                if (b.mean > K3.frameMs * 0.5 && steps.length) { i.opts.maxDpr = K3.maxDpr = steps.shift(); i.resize(); tune(); } else gate(); });
            }, tick = function (t) { if (K3.state !== 'loading') return; if (tp) gaps.push(t - tp); tp = t; if (gaps.length < 8) requestAnimationFrame(tick); else { gaps.sort(function (a, b) { return a - b; }); K3.frameMs = gaps[1]; tune(); } };
            requestAnimationFrame(tick);
          }
        } });
    } catch (e) { return k3Fallback('init-throw: ' + (e && e.message)); }
    if (!inst) return; /* onFallback has run */
    K3.inst = inst; K3.drive(open.progress());
  }
  function k3Load() {
    if (K3.state !== 'idle') return; K3.state = 'loading'; K3.tLoad = Math.round(performance.now());
    var s = document.createElement('script'); s.src = 'eye3d/eye3d.js?v=0.3.1'; s.async = true; /* the version busts the cache on a resync: bump it with the component's version */
    s.onload = function () { try { var e = performance.getEntriesByName(new URL(s.src, location.href).href)[0]; if (e) { K3.bytes = e.transferSize || e.encodedBodySize || 0; K3.tLoaded = Math.round(e.responseEnd); } } catch (x) { /* no timing */ } k3Mount(); };
    s.onerror = function () { k3Fallback('script-error'); };
    document.head.appendChild(s);
  }
  var rmq = matchMedia('(prefers-reduced-motion: reduce)');
  if (nogl) { K3.state = 'fallback'; K3.reason = 'shot=nogl'; }
  else if (!stage3 || !wrap) { K3.state = 'fallback'; K3.reason = 'no-stage'; }
  else if (navigator.connection && navigator.connection.saveData && !force3) { K3.state = 'fallback'; K3.reason = 'save-data'; }
  else if (force3) k3Load();
  else { var k3Kick = function () { if ('requestIdleCallback' in window) requestIdleCallback(function () { k3Load(); }, { timeout: 2500 }); else setTimeout(k3Load, 600); }; if (document.readyState === 'complete') k3Kick(); else addEventListener('load', k3Kick, { once: true }); }
  if (K3.state === 'fallback') k3Done(true);
  if (rmq.addEventListener) rmq.addEventListener('change', function (e) { if (e.matches) k3Fallback('reduced-motion'); });
  window.KV3D = K3;

  /* ---- 03 and 04 · the films: pictures cross-fade on the scroll, the stack drifts, a caption follows the beat ---- */
  function film(sel, fadeAt) {
    var sec = $(sel); if (!sec) return null;
    var imgs = $$('.img', sec), stack = $('.stack', sec), n = imgs.length;
    var tl = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: {
      trigger: sec, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: function (self) { var p = self.progress, b = 0; for (var i = 1; i < n; i++) if (p >= fadeAt[i]) b = i; sec.dataset.beat = b; }
    } });
    for (var i = 1; i < n; i++) tl.to(imgs[i], { opacity: 1, duration: 0.07, ease: 'power1.inOut' }, fadeAt[i]);
    tl.fromTo(stack, { scale: 1 }, { scale: 1.07, duration: 1 }, 0);
    return tl;
  }
  var tt = film('#twin', [0, 0.12, 0.26, 0.40, 0.56, 0.70, 0.84]);
  var te = film('#engine', [0, 0.28, 0.54, 0.78]);

  /* ---- 02 · the slides: each beat enters from the right behind a blade wipe, the last leaves left, the copy a beat behind ---- */
  var how = $('#how'), slides = $$('.how .slide'), th = null, ripple = null;
  if (how && slides.length === 3) {
    var h3s = slides.map(function (s) { return $('h3', s); }), ps = slides.map(function (s) { return $('p', s); }), wipes = slides.map(function (s) { return $('.wipe', s); });
    gsap.set(h3s.slice(1), { xPercent: 36, opacity: 0, clipPath: 'inset(0% 100% 0% 0%)' });
    gsap.set(ps.slice(1), { xPercent: 24, opacity: 0 });
    gsap.set(wipes, { x: 0, xPercent: 320 }); /* GSAP owns the wipe's transform: the CSS translateX(320%) would otherwise be read as a fixed px offset and the wedge would park over the copy */
    th = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: {
      trigger: how, start: 'top top', end: 'bottom bottom', scrub: true,
      onUpdate: function (self) { var p = self.progress, k = p < 0.38 ? 0 : p < 0.71 ? 1 : 2; if (how.dataset.slide !== String(k)) { how.dataset.slide = k; if (ripple) ripple.burst(0.5, 0.5, 1); } }
    } });
    [0.33, 0.66].forEach(function (t, i) {
      th.to(h3s[i], { xPercent: -28, opacity: 0, duration: 0.08, ease: 'power2.in' }, t)
        .to(ps[i], { xPercent: -18, opacity: 0, duration: 0.06, ease: 'power2.in' }, t + 0.02)
        .fromTo(wipes[i + 1], { xPercent: 320 }, { xPercent: -120, duration: 0.11, ease: 'power2.inOut', immediateRender: false }, t)
        .to(h3s[i + 1], { xPercent: 0, opacity: 1, clipPath: 'inset(0% 0% 0% 0%)', duration: 0.1, ease: 'power2.out' }, t + 0.025)
        .to(ps[i + 1], { xPercent: 0, opacity: 1, duration: 0.08, ease: 'power2.out' }, t + 0.055);
    });
    if (th.duration() < 1) th.to({}, { duration: 1 - th.duration() }, th.duration());
    /* the ripple ground: WebGL2 under the pointer; static facet field when it cannot run; asleep while 02 is off screen */
    var rcv = $('.ripple', how), gimg = $('.layer.back img', how);
    if (rcv && gimg && window.KVRipple && !shot) {
      ripple = KVRipple.init(rcv, gimg, { onReady: function () { how.classList.add('rippling'); }, onLost: function () { how.classList.remove('rippling'); ripple = null; } });
      if (ripple) new IntersectionObserver(function (es) { ripple && ripple.setVisible(es[0].isIntersecting); }, { rootMargin: '10% 0px' }).observe(how);
    } else if (rcv && gimg && window.KVRipple && shot === 'ripple') {
      ripple = KVRipple.init(rcv, gimg, { onReady: function () { how.classList.add('rippling'); } });
    }
  }
  window.KVRippleCtl = function () { return ripple; };

  /* ---- layering: back fields and foreground slivers move at different speeds (not inside the held scenes) ---- */
  $$('section:not(.scene) .layer').forEach(function (l) {
    var back = l.classList.contains('back');
    gsap.fromTo(l, { yPercent: back ? -5 : 9 }, { yPercent: back ? 5 : -9, ease: 'none', scrollTrigger: { trigger: l.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } });
  });
  $$('.sheen').forEach(function (s) { gsap.fromTo(s, { xPercent: -60 }, { xPercent: 180, ease: 'none', scrollTrigger: { trigger: s.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } }); });
  /* the blade sweep in chapter 02 draws itself as it arrives */
  var arc = $('.how .arc');
  if (arc) {
    var L = arc.getTotalLength(); arc.style.strokeDasharray = L;
    if (shot) arc.style.strokeDashoffset = 0;
    else gsap.fromTo(arc, { strokeDashoffset: L }, { strokeDashoffset: 0, ease: 'none', scrollTrigger: { trigger: '.how', start: 'top 75%', end: 'top 15%', scrub: true } });
  }

  /* render hooks: ?shot=closed | open | story:x | cut:1..7 | twin:x | eng:x | ch:1..ch:6 | ch:4b | ch:4c | how:1..3 | ripple */
  function toProgress(st, p) { scrollTo(0, st.start + (st.end - st.start) * p); ScrollTrigger.update(); }
  /* KV.open = the open/dive timeline; KV.seek(p) drives its progress from outside (0..1 of the held scene), for the 3D eye integration */
  window.KV = { open: open, twin: tt, engine: te, how: th, lenis: lenis, setEye: setEye, toProgress: toProgress, T: T, seek: function (p) { toProgress(open.scrollTrigger, p); } };
  function toTop(sel, off) { var el = $(sel); scrollTo(0, el.getBoundingClientRect().top + scrollY + (off || 0)); ScrollTrigger.update(); }
  if (shot) requestAnimationFrame(function () { requestAnimationFrame(function () {
    ScrollTrigger.refresh();
    if (shot === 'closed') scrollTo(0, 0);
    else if (shot === 'menu') { scrollTo(0, 0); if (mnav) mnav.open = true; }
    else if (shot === 'open') toProgress(open.scrollTrigger, 0.44 * T);
    else if (shot.indexOf('story:') === 0) toProgress(open.scrollTrigger, (+shot.slice(6)) * T);
    else if (shot === 'nogl') scrollTo(0, 0);
    else if (shot.indexOf('nogl:') === 0) toProgress(open.scrollTrigger, (+shot.slice(5)) * T);
    else if (force3) { var x3 = +shot.slice(6) || 0, go3 = function () { toProgress(open.scrollTrigger, x3 * T); mini(); navGround(); }; if (K3.state === 'on' || K3.state === 'fallback') go3(); else K3.onReady = go3; }
    else if (shot.indexOf('scene:') === 0) toProgress(open.scrollTrigger, +shot.slice(6));
    else if (shot.indexOf('cut:') === 0) toProgress(open.scrollTrigger, CUT0 + (+shot.slice(4) - 1) * STEP + 0.075);
    else if (shot.indexOf('twin:') === 0) toProgress(tt.scrollTrigger, +shot.slice(5));
    else if (shot.indexOf('eng:') === 0) toProgress(te.scrollTrigger, +shot.slice(4));
    else if (shot === 'ch:1') toProgress(open.scrollTrigger, 0.8 * T);
    else if (shot === 'ch:2') toProgress(open.scrollTrigger, CUT0 + 3 * STEP + 0.075);
    else if (shot === 'ch:3') toProgress(th.scrollTrigger, 0.16);
    else if (shot.indexOf('how:') === 0) toProgress(th.scrollTrigger, [0.16, 0.5, 0.84][+shot.slice(4) - 1] || 0.16);
    else if (shot === 'ripple') toProgress(th.scrollTrigger, 0.5);
    else if (shot === 'ch:4') toProgress(tt.scrollTrigger, 0.45);
    else if (shot === 'ch:4b') toProgress(te.scrollTrigger, 0.4);
    else if (shot === 'ch:4c') toTop('#engine-live', -40);
    else if (shot === 'ch:5') toTop('#j', 0);
    else if (shot === 'ch:6') toTop('#founder', 0);
    else if (shot.indexOf('sc:') === 0) toTop('#self-check', 0);
    else if (shot.indexOf('aj:') === 0) toTop('#ask-j', 0);
    mini(); navGround();
  }); });
})();
