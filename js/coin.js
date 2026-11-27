/* CaffCrew 3D logo coin (pure CSS 3D, no libraries) + pointer tilt for [data-tilt]. */
(function () {
  function build(s) {
    s = s || 120; var t = Math.max(8, Math.round(s * 0.1)), n = Math.round(t / 1.3);
    var c = document.createElement('div'); c.className = 'coin';
    c.style.setProperty('--s', s + 'px'); c.style.setProperty('--t', t + 'px');
    for (var i = 0; i <= n; i++) {
      var e = document.createElement('i'); e.className = 'e';
      e.style.transform = 'translateZ(' + (-t / 2 + t * i / n).toFixed(2) + 'px)';
      e.style.background = 'hsl(24,72%,' + (24 + (i % 2) * 9) + '%)'; c.appendChild(e);
    }
    ['f', 'b'].forEach(function (k) {
      var d = document.createElement('i'); d.className = k; d.style.backgroundImage = 'url(icons/logo-256.png)'; c.appendChild(d);
    });
    return c;
  }
  window.DFCoin = { build: build };
  function init() {
    document.querySelectorAll('[data-coin]').forEach(function (h) { if (!h.firstChild) h.appendChild(build(+h.getAttribute('data-coin'))); });
    if (!matchMedia('(hover:hover)').matches || matchMedia('(prefers-reduced-motion:reduce)').matches) return;
    document.querySelectorAll('[data-tilt]').forEach(function (el) {
      el.addEventListener('pointermove', function (e) {
        var r = el.getBoundingClientRect();
        el.style.setProperty('--ry', (((e.clientX - r.left) / r.width - .5) * 8).toFixed(2) + 'deg');
        el.style.setProperty('--rx', ((.5 - (e.clientY - r.top) / r.height) * 8).toFixed(2) + 'deg');
      });
      el.addEventListener('pointerleave', function () { el.style.setProperty('--rx', '0deg'); el.style.setProperty('--ry', '0deg'); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
