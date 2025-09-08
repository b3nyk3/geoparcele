
const CACHE = 'geoparcele-v1';
self.addEventListener('install', (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(['/', '/index.html', '/manifest.json']);
  })());
});
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const cached = await caches.match(e.request);
    return cached || fetch(e.request);
  })());
});
