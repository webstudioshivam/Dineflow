/* DineFlow launch splash: 3D extruded "DineFlow" lettering.
   Shows once per session (every launch of the installed app). Add ?splash=1 to any page to preview. */
(function () {
  try {
    var force = location.search.indexOf('splash=1') > -1;
    if (!force) {
      if (sessionStorage.getItem('df_splash')) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    }
    sessionStorage.setItem('df_splash', '1');
  } catch (e) { return; }

  var css = '' +
  '#dfsplash{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;background:#121110;' +
    'background-image:radial-gradient(560px 360px at 50% 46%,rgba(255,122,26,.20),transparent 70%);transition:opacity .5s ease;overflow:hidden}' +
  '#dfsplash.out{opacity:0;pointer-events:none}' +
  '#dfsplash .stage{perspective:900px;padding:30px}' +
  '#dfsplash .word{display:flex;transform-style:preserve-3d;font:800 clamp(56px,17vw,128px)/1 "Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;letter-spacing:-.04em}' +
  '#dfsplash.go .word{animation:dfrock 2.5s cubic-bezier(.45,.05,.2,1) both}' +
  '@keyframes dfrock{0%{transform:rotateY(-36deg) rotateX(12deg)}50%{transform:rotateY(20deg) rotateX(-6deg)}100%{transform:rotateY(-11deg) rotateX(7deg)}}' +
  '#dfsplash .l{position:relative;display:inline-block;transform-style:preserve-3d;opacity:0}' +
  '#dfsplash.go .l{animation:dfflip .95s cubic-bezier(.2,.9,.3,1.12) both;animation-delay:calc(var(--i)*75ms)}' +
  '@keyframes dfflip{0%{opacity:0;transform:rotateX(-115deg) translateY(70px) translateZ(-320px)}25%{opacity:1}100%{opacity:1;transform:none}}' +
  '#dfsplash .l b{font:inherit;display:block}' +
  '#dfsplash .l i{font:inherit;font-style:normal;position:absolute;left:0;top:0;transform:translateZ(var(--z));color:var(--c)}' +
  '#dfsplash .tag{margin-top:26px;color:#a59c90;font:500 clamp(14px,3.6vw,18px) "Instrument Sans",ui-sans-serif,system-ui,sans-serif;letter-spacing:.02em;opacity:0}' +
  '#dfsplash.go .tag{animation:dftag .7s ease 1.25s both}' +
  '#dfsplash .bar{margin-top:22px;width:64px;height:3px;border-radius:3px;background:#ff7a1a;transform:scaleX(0);transform-origin:left}' +
  '#dfsplash.go .bar{animation:dfbar 1.1s cubic-bezier(.3,.7,.2,1) 1.1s both}' +
  '@keyframes dftag{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}' +
  '@keyframes dfbar{to{transform:scaleX(1)}}';

  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  if (!document.querySelector('link[href*="Bricolage"]')) {
    var lk = document.createElement('link'); lk.rel = 'stylesheet';
    lk.href = 'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,800&family=Instrument+Sans:wght@500&display=swap';
    document.head.appendChild(lk);
  }

  var box = document.createElement('div'); box.id = 'dfsplash'; box.setAttribute('role', 'presentation');
  var stage = document.createElement('div'); stage.className = 'stage';
  var word = document.createElement('div'); word.className = 'word'; word.setAttribute('aria-label', 'DineFlow');
  var text = 'DineFlow', DEPTH = 16, STEP = 2.6;
  function mix(a, b, t) { return [0, 1, 2].map(function (k) { return Math.round(a[k] + (b[k] - a[k]) * t); }); }
  for (var n = 0; n < text.length; n++) {
    var flow = n >= 4, front = flow ? [255, 122, 26] : [244, 239, 232], back = flow ? [92, 36, 4] : [74, 68, 60];
    var l = document.createElement('span'); l.className = 'l'; l.style.setProperty('--i', n);
    for (var d = DEPTH; d >= 1; d--) {                       // extrusion layers, darkest furthest back
      var layer = document.createElement('i'); layer.textContent = text[n]; layer.setAttribute('aria-hidden', 'true');
      layer.style.setProperty('--z', (-d * STEP) + 'px');
      layer.style.setProperty('--c', 'rgb(' + mix(front, back, d / DEPTH).join(',') + ')');
      l.appendChild(layer);
    }
    var f = document.createElement('b'); f.textContent = text[n]; f.style.color = 'rgb(' + front.join(',') + ')'; l.appendChild(f);
    word.appendChild(l);
  }
  stage.appendChild(word);
  var tag = document.createElement('div'); tag.className = 'tag'; tag.textContent = 'One platform. Every restaurant.';
  var bar = document.createElement('div'); bar.className = 'bar';
  box.appendChild(stage); box.appendChild(tag); box.appendChild(bar);
  document.documentElement.appendChild(box);

  var done = false;
  function close() { if (done) return; done = true; box.classList.add('out'); setTimeout(function () { box.remove(); st.remove(); }, 600); }
  box.addEventListener('click', close);
  var started = false;
  function go() { if (started) return; started = true; box.classList.add('go'); setTimeout(close, 3000); }
  var wait = (document.fonts && document.fonts.load) ? Promise.race([document.fonts.load('800 64px "Bricolage Grotesque"'), new Promise(function (r) { setTimeout(r, 900); })]) : Promise.resolve();
  wait.then(go, go);
  setTimeout(go, 1200);
})();
