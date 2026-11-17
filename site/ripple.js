/* Katviiz AI · ripple ground. Raw WebGL2 height-field: a wave-equation pass over two ping-pong targets at quarter resolution,
   then a refraction pass that bends the ground texture by the height gradient and adds a faint bone-tinted specular.
   KVRipple.init(canvas, groundImg, opts) -> { burst(x, y, strength), setVisible(bool), resize(), destroy(), stats() } or null.
   No glow, no cyan: the ripple is read through the ground's own tones. Off under reduced motion; static ground when WebGL is missing or lost. */
(function () {
  'use strict';
  var VS = '#version 300 es\nprecision highp float;\nin vec2 p; out vec2 v;\nvoid main(){ v = p * 0.5 + 0.5; gl_Position = vec4(p, 0.0, 1.0); }';
  var SIM = '#version 300 es\nprecision highp float;\n' +
    'uniform sampler2D uH; uniform vec2 uTexel; uniform float uAspect; uniform float uDamp; uniform float uK; uniform vec4 uDrops[4]; uniform int uN;\n' +
    'in vec2 v; out vec4 o;\nvoid main(){\n' +
    '  vec2 c = texture(uH, v).rg; float h = c.r, hp = c.g;\n' +
    '  float n = texture(uH, v + vec2(0.0, uTexel.y)).r, s = texture(uH, v - vec2(0.0, uTexel.y)).r, e = texture(uH, v + vec2(uTexel.x, 0.0)).r, w = texture(uH, v - vec2(uTexel.x, 0.0)).r;\n' +
    '  float hn = (2.0 * h - hp + uK * ((n + s + e + w) * 0.25 - h)) * uDamp;\n' +
    '  for (int i = 0; i < 4; i++) { if (i >= uN) break; vec2 d = (v - uDrops[i].xy) * vec2(uAspect, 1.0); float r2 = dot(d, d) / (uDrops[i].z * uDrops[i].z); hn += uDrops[i].w * exp(-r2) * (1.0 - 0.5 * r2); }\n' +
    '  float edge = smoothstep(0.0, 0.04, v.x) * smoothstep(0.0, 0.04, 1.0 - v.x) * smoothstep(0.0, 0.04, v.y) * smoothstep(0.0, 0.04, 1.0 - v.y);\n' +
    '  o = vec4(clamp(hn * edge, -4.0, 4.0), h, 0.0, 1.0); }';
  var DRAW = '#version 300 es\nprecision highp float;\n' +
    'uniform sampler2D uH; uniform sampler2D uG; uniform vec2 uTexel; uniform vec3 uVoid; uniform vec3 uSpec; uniform float uRefract; uniform float uSpecStr; uniform vec2 uCover; uniform vec2 uShift; uniform vec3 uLight;\n' +
    'in vec2 v; out vec4 o;\nvoid main(){\n' +
    '  float dx = texture(uH, v + vec2(uTexel.x, 0.0)).r - texture(uH, v - vec2(uTexel.x, 0.0)).r;\n' +
    '  float dy = texture(uH, v + vec2(0.0, uTexel.y)).r - texture(uH, v - vec2(0.0, uTexel.y)).r;\n' +
    '  vec2 g = vec2(dx, dy);\n' +
    '  vec2 uv = (v - 0.5) * uCover + 0.5 + uShift + g * uRefract;\n' +
    '  vec4 c = texture(uG, vec2(uv.x, 1.0 - uv.y));\n' +
    '  vec3 ground = uVoid * (1.0 - c.a) + c.rgb;\n' +
    '  vec3 n = normalize(vec3(-g * 50.0, 1.0)); vec3 hv = normalize(uLight + vec3(0.0, 0.0, 1.0));\n' +
    '  float sp = pow(max(dot(n, hv), 0.0), 40.0) - pow(max(hv.z, 0.0), 40.0);\n' +
    '  o = vec4(ground + uSpec * max(sp, 0.0) * uSpecStr, 1.0); }';
  function compile(gl, type, src) { var s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) { throw new Error(gl.getShaderInfoLog(s)); } return s; }
  function program(gl, fs) { var p = gl.createProgram(); gl.attachShader(p, compile(gl, gl.VERTEX_SHADER, VS)); gl.attachShader(p, compile(gl, gl.FRAGMENT_SHADER, fs)); gl.bindAttribLocation(p, 0, 'p'); gl.linkProgram(p); if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p)); return p; }
  function init(canvas, img, opts) {
    opts = opts || {};
    if (!canvas || !img) return null;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
    var gl = canvas.getContext('webgl2', { alpha: false, antialias: false, depth: false, stencil: false, preserveDrawingBuffer: false, powerPreference: 'low-power' });
    if (!gl) return null;
    var half = !!(gl.getExtension('EXT_color_buffer_float') || gl.getExtension('EXT_color_buffer_half_float'));
    if (!half) return null; /* the wave needs signed heights: no float colour buffer, no ripple, the static ground stays */
    var SIMDIV = opts.simDiv || 4, OUTDIV = opts.outDiv || 2, FPS_MS = 1000 / (opts.fps || 60) - 1.5;
    var VOID = opts.ground || [14 / 255, 23 / 255, 20 / 255], SPEC = opts.spec || [0.72, 0.76, 0.66], REFRACT = opts.refract || 0.05, SPECSTR = opts.specStrength || 0.38;
    var pSim, pDraw, quad, texA, texB, fbA, fbB, texG, simW = 0, simH = 0, dead = false, visible = true, running = false, raf = 0, lastT = 0, lastInput = 0;
    var drops = [], st = { frames: 0, stepMs: 0, frameMs: 0, maxStepMs: 0 }, uS = {}, uD = {}, shift = [0, 0], simT = 0;
    try { pSim = program(gl, SIM); pDraw = program(gl, DRAW); } catch (e) { return null; }
    quad = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, quad); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    ['uH', 'uTexel', 'uAspect', 'uDamp', 'uK', 'uDrops', 'uN'].forEach(function (n) { uS[n] = gl.getUniformLocation(pSim, n); });
    ['uH', 'uG', 'uTexel', 'uVoid', 'uSpec', 'uRefract', 'uSpecStr', 'uCover', 'uShift', 'uLight'].forEach(function (n) { uD[n] = gl.getUniformLocation(pDraw, n); });
    function tex(w, h) {
      var t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      var fb = gl.createFramebuffer(); gl.bindFramebuffer(gl.FRAMEBUFFER, fb); gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, t, 0);
      if (gl.checkFramebufferStatus(gl.FRAMEBUFFER) !== gl.FRAMEBUFFER_COMPLETE) { dead = true; return { t: t, fb: fb }; }
      gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
      return { t: t, fb: fb };
    }
    function ground() {
      texG = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, texG);
      gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true); gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      try { gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img); } catch (e) { return false; }
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.MIRRORED_REPEAT); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.MIRRORED_REPEAT);
      return true;
    }
    function resize() {
      var r = canvas.getBoundingClientRect(), w = Math.max(2, Math.round(r.width)), h = Math.max(2, Math.round(r.height));
      canvas.width = Math.ceil(w / OUTDIV); canvas.height = Math.ceil(h / OUTDIV);
      var sw = Math.ceil(w / SIMDIV), sh = Math.ceil(h / SIMDIV);
      if (sw !== simW || sh !== simH) { simW = sw; simH = sh; if (texA) { gl.deleteTexture(texA.t); gl.deleteTexture(texB.t); gl.deleteFramebuffer(texA.fb); gl.deleteFramebuffer(texB.fb); } texA = tex(sw, sh); texB = tex(sw, sh); }
      draw();
    }
    function step() {
      gl.useProgram(pSim); gl.viewport(0, 0, simW, simH);
      gl.bindFramebuffer(gl.FRAMEBUFFER, texB.fb); gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texA.t);
      gl.uniform1i(uS.uH, 0); gl.uniform2f(uS.uTexel, 1 / simW, 1 / simH); gl.uniform1f(uS.uAspect, simW / simH); gl.uniform1f(uS.uDamp, 0.986); gl.uniform1f(uS.uK, 1.2);
      var n = Math.min(4, drops.length), arr = new Float32Array(16);
      for (var i = 0; i < n; i++) { var d = drops.shift(); arr[i * 4] = d[0]; arr[i * 4 + 1] = d[1]; arr[i * 4 + 2] = d[2]; arr[i * 4 + 3] = d[3]; }
      gl.uniform4fv(uS.uDrops, arr); gl.uniform1i(uS.uN, n);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      var tmp = texA; texA = texB; texB = tmp;
    }
    function draw() {
      if (!texG) return;
      gl.useProgram(pDraw); gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, canvas.width, canvas.height);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, texA.t); gl.uniform1i(uD.uH, 0);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, texG); gl.uniform1i(uD.uG, 1);
      gl.uniform2f(uD.uTexel, 1 / simW, 1 / simH); gl.uniform3fv(uD.uVoid, VOID); gl.uniform3fv(uD.uSpec, SPEC);
      gl.uniform1f(uD.uRefract, REFRACT); gl.uniform1f(uD.uSpecStr, SPECSTR);
      var ca = canvas.width / canvas.height, ta = (img.naturalWidth || 1600) / (img.naturalHeight || 1000), cx = 1, cy = 1;
      if (ca > ta) cy = ta / ca; else cx = ca / ta;
      gl.uniform2f(uD.uCover, cx * 1.06, cy * 1.06);
      shift[0] = Math.sin(simT * 0.05) * 0.012; shift[1] = Math.cos(simT * 0.037) * 0.01; /* the drift clock only runs while the ripple runs, so a wake after idle does not jump */
      gl.uniform2f(uD.uShift, shift[0], shift[1]); gl.uniform3f(uD.uLight, -0.45, 0.6, 1.0);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }
    function frame(t) {
      raf = 0; if (dead || !visible || !running) return;
      if (t - lastT < FPS_MS) { raf = requestAnimationFrame(frame); return; }
      var dt = lastT ? t - lastT : 16; lastT = t; simT += dt / 1000;
      var a = performance.now(); step(); draw(); var ms = performance.now() - a;
      st.frames++; st.stepMs += ms; st.frameMs += dt; if (ms > st.maxStepMs) st.maxStepMs = ms;
      if (t - lastInput > 2800 && !drops.length) { running = false; return; }
      raf = requestAnimationFrame(frame);
    }
    function wake() { lastInput = performance.now(); if (!running && visible && !dead) { running = true; lastT = 0; if (!raf) raf = requestAnimationFrame(frame); } }
    function drop(x, y, radius, strength) { if (drops.length < 12) drops.push([x, 1 - y, radius, strength]); wake(); }
    var target = opts.target || canvas.parentElement || canvas, lx = -1, ly = -1, lt = 0;
    function uvOf(cx, cy) { var r = canvas.getBoundingClientRect(); return [(cx - r.left) / r.width, (cy - r.top) / r.height]; }
    function onMove(e) {
      var pt = e.touches ? e.touches[0] : e; if (!pt) return;
      var uv = uvOf(pt.clientX, pt.clientY); if (uv[0] < 0 || uv[0] > 1 || uv[1] < 0 || uv[1] > 1) return;
      var now = performance.now(), sp = 0;
      if (lx >= 0 && now - lt < 120) sp = Math.hypot(pt.clientX - lx, pt.clientY - ly) / Math.max(8, now - lt) * 16;
      lx = pt.clientX; ly = pt.clientY; lt = now;
      var touch = !!e.touches || e.pointerType === 'touch';
      var s = Math.min(touch ? 0.22 : 0.45, 0.06 + sp * 0.012);
      drop(uv[0], uv[1], touch ? 0.012 : 0.009, s);
    }
    target.addEventListener('pointermove', function (e) { if (e.pointerType !== 'touch') onMove(e); }, { passive: true });
    target.addEventListener('touchmove', onMove, { passive: true });
    target.addEventListener('pointerleave', function () { lx = -1; });
    var ro = new ResizeObserver(function () { if (!dead) resize(); }); ro.observe(canvas);
    canvas.addEventListener('webglcontextlost', function (e) { e.preventDefault(); dead = true; if (raf) cancelAnimationFrame(raf); raf = 0; if (opts.onLost) opts.onLost(); }, false);
    function start() { if (!ground()) return; resize(); if (dead) { if (opts.onLost) opts.onLost(); return; } if (opts.onReady) opts.onReady(); }
    if (img.complete && img.naturalWidth) start(); else img.addEventListener('load', start, { once: true });
    return {
      burst: function (x, y, s) { if (dead) return; drop(x == null ? 0.5 : x, y == null ? 0.5 : y, 0.06, (s == null ? 1 : s) * 0.7); },
      setVisible: function (b) { visible = !!b; if (visible && (drops.length || performance.now() - lastInput < 2800)) wake(); else if (!visible && raf) { cancelAnimationFrame(raf); raf = 0; running = false; } },
      resize: resize,
      destroy: function () { dead = true; if (raf) cancelAnimationFrame(raf); ro.disconnect(); var ext = gl.getExtension('WEBGL_lose_context'); if (ext) ext.loseContext(); },
      stats: function () { return { frames: st.frames, avgStepMs: st.frames ? +(st.stepMs / st.frames).toFixed(2) : 0, maxStepMs: +st.maxStepMs.toFixed(2), avgFrameMs: st.frames ? +(st.frameMs / st.frames).toFixed(1) : 0, fps: st.frames ? +(1000 / (st.frameMs / st.frames)).toFixed(1) : 0, halfFloat: half, sim: [simW, simH], out: [canvas.width, canvas.height], running: running }; },
      alive: function () { return !dead; }
    };
  }
  window.KVRipple = { init: init };
})();
