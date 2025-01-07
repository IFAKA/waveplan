const addResourcesToCache = async (resources) => {
  const cache = await caches.open("v1");
  await cache.addAll(resources);
};

const enableNavigationPreload = async () => {
  if (self.registration.navigationPreload) {
    await self.registration.navigationPreload.enable();
  }
};

self.addEventListener("install", (event) => {
  event.waitUntil(addResourcesToCache(["/"]));
  console.log("Service Worker installed");
});

self.addEventListener("activate", (event) => {
  clients.claim();
  event.waitUntil(enableNavigationPreload());
  console.log("Service Worker activated");
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      console.log("Service Worker fetch event", event.request.url);
      return response || fetch(event.request);
    })
  );
});
