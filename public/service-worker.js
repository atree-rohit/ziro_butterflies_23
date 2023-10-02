const CACHE_NAME = 'ZB0.01';
const urlsToCache = [
    '/',
    // Include other important assets
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("installing cache", urlsToCache);
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', (event) => {
  if (event.request.url.startsWith('chrome-extension://')) {
    return; // Bypass caching for extension requests
  }
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response; // If cached, return the cached response
        }

        // If not cached, fetch from the network
        return fetch(event.request)
          .then((networkResponse) => {
            // Cache the fetched response for future use
            return caches.open(CACHE_NAME)
              .then((cache) => {
                cache.put(event.request, networkResponse.clone());
                return networkResponse;
              });
          });
      })
  );
});

self.addEventListener('activate', (event) => {
  // Clear old caches
  console.log("activate");
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log("clear cache", cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});