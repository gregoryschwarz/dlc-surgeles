// Service worker — DLC Surgelés
const CACHE = 'dlc-surgeles-v5';
const FICHIERS = [
  './DLC_Surgeles.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-512-maskable.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(FICHIERS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((noms) =>
      Promise.all(noms.filter((n) => n !== CACHE).map((n) => caches.delete(n)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((reponse) =>
      reponse || fetch(e.request).catch(() => caches.match('./DLC_Surgeles.html'))
    )
  );
});
