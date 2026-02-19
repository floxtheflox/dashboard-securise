const CACHE_NAME = 'deca-matrix-v1';
const ASSETS = [
  './index.html',
  './data.json',
  './manifest.json'
];

// Installation du Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

// Interception des requêtes (Sert le cache si dispo, sinon va chercher sur le réseau)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});