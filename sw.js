self.addEventListener("install", (e) => {
  console.log("Service Worker Installed");
});

self.addEventListener("fetch", (e) => {
  // For now, just let requests pass through
});