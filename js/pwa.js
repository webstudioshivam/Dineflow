/* CaffCrew: service worker + "Install app" button (Android/desktop prompt, iOS hint). */
(function () {
  if ('serviceWorker' in navigator) addEventListener('load', function () { navigator.serviceWorker.register('sw.js').catch(function () {}); });
  if (matchMedia('(display-mode: standalone)').matches || navigator.standalone) return;
  var dp = null, ua = navigator.userAgent, ios = /iphone|ipad|ipod/i.test(ua) && !/crios|fxios/i.test(ua), btn;
  function toast(m) {
    var t = document.createElement('div'); t.className = 'dftoast'; t.textContent = m; document.body.appendChild(t);
    setTimeout(function () { t.remove(); }, 5200);
  }
  function mount() {
    var host = document.querySelector('.top') || document.querySelector('nav .nl'); if (!host || btn) return;
    btn = document.createElement('button'); btn.type = 'button'; btn.hidden = true; btn.className = 'dfinstall'; btn.textContent = 'Install app';
    var out = host.querySelector('#out'); out ? host.insertBefore(btn, out) : host.appendChild(btn);
    btn.onclick = function () {
      if (dp) { dp.prompt(); dp.userChoice.then(function () { dp = null; btn.hidden = true; }); }
      else if (ios) toast('Tap Share, then "Add to Home Screen" to install CaffCrew.');
    };
    if (ios) btn.hidden = false;
  }
  addEventListener('beforeinstallprompt', function (e) { e.preventDefault(); dp = e; mount(); if (btn) btn.hidden = false; });
  addEventListener('appinstalled', function () { if (btn) btn.hidden = true; });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', mount); else mount();
})();
