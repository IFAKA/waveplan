function registerServiceWorker() {
  if (typeof window !== "undefined") {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        registration.addEventListener("updatefound", () => {
          // If updatefound is fired, it means that there's
          // a new service worker being installed.
          const installingWorker = registration.installing;
          console.log(
            "A new service worker is being installed:",
            installingWorker
          );

          // You can listen for changes to the installing service worker's
          // state via installingWorker.onstatechange
        });
        console.log("Service Worker registration successful:", registration);
      });

      navigator.serviceWorker.ready
        .then((registration) => {
          registration.active.postMessage({ hello: "world" });
          return registration.pushManager.getSubscription();
        })
        .then(function (subscription) {
          if (!subscription) {
            return;
          }
          navigator.serviceWorker.controller.postMessage({ hello: "world" });
        });
    }
  }
}

registerServiceWorker();
