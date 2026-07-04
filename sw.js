const CACHE_NAME = 'prompto-engine-v2';

// We add a minimal install event to ensure the SW is registered
self.addEventListener('install', event => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(clients.claim());
});

// A simple fetch listener is required by most browsers to trigger the PWA install prompt
self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request).catch(() => {
      // Return a basic fallback if offline
      return new Response('You are offline.');
    })
  );
});
