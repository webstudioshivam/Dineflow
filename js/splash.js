/* CaffCrew launch splash: 3D logo coin + extruded wordmark. Once per session; ?splash=1 forces it; tap to skip. */
(function () {
  try {
    if (location.search.indexOf('splash=1') < 0) {
      if (sessionStorage.getItem('df_splash')) return;
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    }
    sessionStorage.setItem('df_splash', '1');
  } catch (e) { return; }
  var css = '#dfsplash{position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;flex-direction:column;background:#121110 radial-gradient(520px 380px at 50% 40%,rgba(255,122,26,.22),transparent 70%);transition:opacity .5s;overflow:hidden}' +
  '#dfsplash.out{opacity:0;pointer-events:none}' +
  '#dfsplash .dfc{perspective:900px;margin-bottom:34px}' +
  '#dfsplash .coin{opacity:0}#dfsplash.go .coin{animation:dfcoin 1.6s cubic-bezier(.2,.8,.2,1) both,dfidle 3.4s ease-in-out 1.6s infinite alternate}' +
  '@keyframes dfcoin{0%{opacity:0;transform:translateZ(-600px) rotateX(24deg) rotateY(-720deg) scale(.5)}35%{opacity:1}100%{opacity:1;transform:rotateX(-6deg) rotateY(-16deg)}}' +
  '@keyframes dfidle{from{transform:rotateX(-6deg) rotateY(-16deg)}to{transform:rotateX(4deg) rotateY(16deg)}}' +
  '#dfsplash .dfst{perspective:900px}' +
  '#dfsplash .dfw{display:flex;transform-style:preserve-3d;font:800 clamp(44px,13vw,92px)/1 "Bricolage Grotesque",ui-sans-serif,system-ui,sans-serif;letter-spacing:-.04em;transform:rotateY(-10deg) rotateX(6deg)}' +
  '#dfsplash .dfl{position:relative;display:inline-block;transform-style:preserve-3d;opacity:0}' +
  '#dfsplash.go .dfl{animation:dfflip .9s cubic-bezier(.2,.9,.3,1.12) both;animation-delay:calc(1s + var(--i)*70ms)}' +
  '@keyframes dfflip{0%{opacity:0;transform:rotateX(-110deg) translateY(60px) translateZ(-280px)}30%{opacity:1}100%{opacity:1;transform:none}}' +
  '#dfsplash .dfl b{font:inherit;display:block}' +
  '#dfsplash .dfl i{font:inherit;font-style:normal;position:absolute;left:0;top:0;transform:translateZ(var(--z));color:var(--c)}' +
  '#dfsplash .dftg{margin-top:20px;color:#a59c90;font:500 clamp(14px,3.6vw,17px) "Instrument Sans",ui-sans-serif,system-ui,sans-serif;opacity:0}' +
  '#dfsplash.go .dftg{animation:dftag .7s ease 1.9s both}@keyframes dftag{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:none}}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
  var box = document.createElement('div'); box.id = 'dfsplash'; box.setAttribute('role', 'presentation');
  var cw = document.createElement('div'); cw.className = 'dfc';
  var size = Math.max(110, Math.min(190, Math.round(Math.min(innerWidth, innerHeight) * .32)));
  if (window.DFCoin) cw.appendChild(DFCoin.build(size));
  var stage = document.createElement('div'); stage.className = 'dfst';
  var word = document.createElement('div'); word.className = 'dfw'; word.setAttribute('aria-label', 'CaffCrew');
  var text = 'CaffCrew', DEPTH = 10, STEP = 2.2;
  function mix(a, b, t) { return [0, 1, 2].map(function (k) { return Math.round(a[k] + (b[k] - a[k]) * t); }); }
  for (var n = 0; n < text.length; n++) {
    var flow = n >= 4, front = flow ? [255, 122, 26] : [244, 239, 232], back = flow ? [92, 36, 4] : [74, 68, 60];
    var l = document.createElement('span'); l.className = 'dfl'; l.style.setProperty('--i', n);
    for (var d = DEPTH; d >= 1; d--) {
      var ly = document.createElement('i'); ly.textContent = text[n]; ly.setAttribute('aria-hidden', 'true');
      ly.style.setProperty('--z', (-d * STEP) + 'px'); ly.style.setProperty('--c', 'rgb(' + mix(front, back, d / DEPTH).join(',') + ')'); l.appendChild(ly);
    }
    var f = document.createElement('b'); f.textContent = text[n]; f.style.color = 'rgb(' + front.join(',') + ')'; l.appendChild(f); word.appendChild(l);
  }
  stage.appendChild(word);
  var tag = document.createElement('div'); tag.className = 'dftg'; tag.textContent = 'Your restaurant. Your crew. One system.';
  box.appendChild(cw); box.appendChild(stage); box.appendChild(tag); document.documentElement.appendChild(box);
  var done = false, started = false;
  function close() { if (done) return; done = true; box.classList.add('out'); setTimeout(function () { box.remove(); st.remove(); }, 600); }
  box.addEventListener('click', close);
  function go() { if (started) return; started = true; box.classList.add('go'); setTimeout(close, 3400); }
  var wait = (document.fonts && document.fonts.load) ? Promise.race([document.fonts.load('800 64px "Bricolage Grotesque"'), new Promise(function (r) { setTimeout(r, 900); })]) : Promise.resolve();
  wait.then(go, go); setTimeout(go, 1200);
})();
