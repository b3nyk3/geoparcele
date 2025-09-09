
const CACHE = 'geoparcele-v9';
self.addEventListener('install', e => {
  e.waitUntil((async()=>{ const c=await caches.open(CACHE); await c.addAll(['index.html','manifest.json']); })());
});
self.addEventListener('activate', e => {
  e.waitUntil((async()=>{ const keys=await caches.keys(); await Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))); })());
});
self.addEventListener('fetch', e => { e.respondWith((async()=>{ const r=await caches.match(e.request); return r || fetch(e.request); })()); });
