/*let staticCacheData = 'static-cache-v1';
let dynamicCacheData = 'dynamic-cache-v1';

const assetsUrls = [
  '/static/js/main.chunk.js',
  '/static/js/2.chunk.js',
  '/static/js/bundle.js',
  '/index.html',
  '/',
  '/menu',
  '/home.svg',
  '/food.svg',
  '/cart.svg',
  '/profile.svg',
  'static/js/2.chunk.js.map'
];

self.addEventListener("install", async event => {
  const cache = await caches.open(staticCacheData);
  await cache.addAll(assetsUrls);
});

self.addEventListener('activate', async event => {
  const cacheNames = await caches.keys()
  await Promise.all(
    cacheNames
      .filter(name => name !== staticCacheData)
      .filter(name => name !== dynamicCacheData)
      .map(name => caches.delete(name))
  )
});

self.addEventListener('fetch', event => {
  const {request} = event;

  const url = new URL(request.url);
  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
})


async function cacheFirst(request) {
  const cached = await caches.match(request);
  return cached ?? await fetch(request);
}

async function networkFirst(request) {
  const cache = await caches.open(dynamicCacheData);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (e) {
    const cached = await cache.match(request);
    return cached ?? await caches.match('/offline.html');
  }
}*/
