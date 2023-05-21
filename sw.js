let cacheData = 'appV1';

this.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheData)
      .then(cache => {
        cache.addAll([
          '/static/js/main.chunk.js',
          '/static/js/2.chunk.js',
          '/static/js/bundle.js',
          '/index.html',
          '/',
          '/home.svg',
          '/food.svg',
          '/cart.svg',
          '/profile.svg'
        ]);
      })
  )
});
