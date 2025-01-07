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
          installingWorker.onstatechange = () => {
            console.log(
              "Service worker state changed to:",
              installingWorker.state
            );

            // Check if the service worker is installed
            if (installingWorker.state === "installed") {
              if (navigator.serviceWorker.controller) {
                console.log(
                  "New content is available, and the service worker is installed."
                );
              } else {
                console.log("Content is cached for offline use.");
              }
            }
          };
        });
        console.log("Service Worker registration successful:", registration);
      });

      navigator.serviceWorker.ready
        .then((registration) => {
          console.log("Service Worker is ready:", registration);
        })
        .catch((error) => {
          console.error("Service Worker is not ready:", error);
        });
    }
  }
}

registerServiceWorker();
