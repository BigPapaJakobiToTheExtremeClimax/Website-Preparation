const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/Website-Preparation/simple-pwa/index.html',
  '/Website-Preparation/simple-pwa/manifest.json',
  '/Website-Preparation/simple-pwa/app.js',
  '/Website-Preparation/simple-pwa/service-worker.js',
  '/Website-Preparation/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
