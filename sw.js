// CaffCrew service worker v2: pages/assets network-first (live data stays fresh), shell cached for offline.
const CACHE = 'caffcrew-v2';
const SHELL = ['./', 'index.html', 'login.html', 'offline.html', 'manifest.json', 'favicon.ico',
  'css/auth.css', 'css/entry.css', 'css/brand.css', 'js/config.js', 'js/admin.js', 'js/splash.js', 'js/coin.js', 'js/pwa.js',
  'icons/logo-96.png', 'icons/logo-256.png', 'icons/icon-192.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => Promise.all(SHELL.map(u => c.add(u).catch(() => {})))).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== CACHE).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request, url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== location.origin) return;
  e.respondWith(
    fetch(req).then(res => { if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req).then(r => r || (req.mode === 'navigate' ? caches.match('offline.html') : Response.error())))
  );
});
