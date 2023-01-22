const appShellFiles = [
    "/",
    "/simplePass/index.html",
    "/simplePass/offline.html",
    "/simplePass/main.css",
    "/simplePass/main.js",
    "/simplePass/simplePass/browser/simplePass.js",
    "/simplePass/sw.js",
    "/simplePass/manifest.json",
    "/simplePass/storage/icons/simplePass-Logo-1080.png",
    "/simplePass/storage/icons/simplePass-Logo-512.png",
    "/simplePass/storage/icons/simplePass-Logo-1080.svg",
    "/simplePass/docs/config.simplePass.js.html",
    "/simplePass/docs/data_enums_errors.enum.js.html",
    "/simplePass/docs/data_interfaces_charCodeGenerationFlag.interface.js.html",
    "/simplePass/docs/data_interfaces_charCodeRequest.interface.js.html",
    "/simplePass/docs/data_interfaces_ensureRepeatingCharacterOptions.interface.js.html",
    "/simplePass/docs/data_interfaces_passwordModifier.interface.js.html",
    "/simplePass/docs/data_lists_allowedModifiers.list.js.html",
    "/simplePass/docs/data_lists_requiredAttributes.list.js.html",
    "/simplePass/docs/data_lists_usableAttributes.list.js.html",
    "/simplePass/docs/data_lists_whitespaceAttributes.list.js.html",
    "/simplePass/docs/data_objects_characterCodeConstraints.object.js.html",
    "/simplePass/docs/helpers_cleanModifier.helper.js.html",
    "/simplePass/docs/helpers_createMessage.helper.js.html",
    "/simplePass/docs/helpers_createModifierList.helper.js.html",
    "/simplePass/docs/helpers_ensureRepeatingCharacters.helper.js.html",
    "/simplePass/docs/helpers_generateCharCode.helper.js.html",
    "/simplePass/docs/helpers_shuffle.helper.js.html",
    "/simplePass/docs/helpers_validateModifier.helper.js.html",
    "/simplePass/docs/I_charCodeGenerationFlag.html",
    "/simplePass/docs/I_charCodeOptions.html",
    "/simplePass/docs/I_charCodeRequest.html",
    "/simplePass/docs/I_ensureRepeatingCharacterOptions.html",
    "/simplePass/docs/index.html",
    "/simplePass/docs/I_passwordModifier.html",
    "/simplePass/docs/I_repeatingCharacterOptionsPreservations.html",
    "/simplePass/docs/module-characterCodeConstraints.html",
    "/simplePass/docs/module-characterCodeConstraints-I_charCodeConstraintsAttributes.html",
    "/simplePass/docs/module-cleanModifier.html",
    "/simplePass/docs/module-config.html",
    "/simplePass/docs/module-createMessage.html",
    "/simplePass/docs/module-createModifierList.html",
    "/simplePass/docs/module-E_errors.html",
    "/simplePass/docs/module-ensureRepeatingCharacters.html",
    "/simplePass/docs/module-generateCharCode.html",
    "/simplePass/docs/module-L_allowedModifiers.html",
    "/simplePass/docs/module-L_requiredAttributes.html",
    "/simplePass/docs/module-L_useableAttributes.html",
    "/simplePass/docs/module-L_whitespaceAttributes.html",
    "/simplePass/docs/module-shuffle.html",
    "/simplePass/docs/module-simplePass.html",
    "/simplePass/docs/module-validateModifier.html",
    "/simplePass/docs/simplePass.js.html",
    "/simplePass/docs/tutorial-CODE_OF_CONDUCT.html",
    "/simplePass/docs/tutorial-CONTRIBUTING.html",
    "/simplePass/docs/tutorial-development.html",
    "/simplePass/docs/tutorial-installation-and-examples.html",
    "/simplePass/docs/tutorial-SECURITY.html",
    "/simplePass/docs/fonts/OpenSans-BoldItalic-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-Bold-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-Italic-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-LightItalic-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-Light-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-Regular-webfont.eot",
    "/simplePass/docs/fonts/OpenSans-BoldItalic-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-Bold-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-Italic-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-LightItalic-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-Light-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-Regular-webfont.svg",
    "/simplePass/docs/fonts/OpenSans-BoldItalic-webfont.woff",
    "/simplePass/docs/fonts/OpenSans-Bold-webfont.woff",
    "/simplePass/docs/fonts/OpenSans-Italic-webfont.woff",
    "/simplePass/docs/fonts/OpenSans-LightItalic-webfont.woff",
    "/simplePass/docs/fonts/OpenSans-Light-webfont.woff",
    "/simplePass/docs/fonts/OpenSans-Regular-webfont.woff",
    "/simplePass/docs/scripts/prettify/Apache-License-2.0.txt",
    "/simplePass/docs/scripts/prettify/lang-css.js",
    "/simplePass/docs/scripts/prettify/prettify.js",
    "/simplePass/docs/scripts/linenumber.js",
    "/simplePass/docs/styles/jsdoc-default.css",
    "/simplePass/docs/styles/prettify-jsdoc.css",
    "/simplePass/docs/styles/prettify-tomorrow.css"
];

/*
Copyright 2015, 2019, 2020, 2021 Google LLC. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/

// Incrementing OFFLINE_VERSION will kick off the install event and force
// previously cached resources to be updated from the network.
// This variable is intentionally declared and unused.
// Add a comment for your linter if you want:
// eslint-disable-next-line no-unused-vars
const OFFLINE_VERSION = 1;
const CACHE_NAME = "simplePass_PWA_Cache_v1";
// Customize this with a different URL if needed.
const OFFLINE_URL = "./offline.html";

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      // Setting {cache: 'reload'} in the new request ensures that the
      // response isn't fulfilled from the HTTP cache; i.e., it will be
      // from the network.
      await cache.addAll(appShellFiles);
    })()
  );
  // Force the waiting service worker to become the active service worker.
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      // Enable navigation preload if it's supported.
      // See https://developers.google.com/web/updates/2017/02/navigation-preload
      if ("navigationPreload" in self.registration) {
        await self.registration.navigationPreload.enable();
      }
    })()
  );

  // Tell the active service worker to take control of the page immediately.
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  // Only call event.respondWith() if this is a navigation request
  // for an HTML page.
  if (event.request.mode === "navigate") {
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's
          // supported.
          const preloadResponse = await event.preloadResponse;

          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is
          // likely due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          console.error("Fetch failed; returning offline page instead.", error);

          const failedUrlPathname = new URL(event.request.url).pathname;

          const cache = await caches.open(CACHE_NAME);

          const cachedResponse = await cache.match(failedUrlPathname);
          return cachedResponse;
        }
      })()
    );
  }else{
    event.respondWith(
      (async () => {
        try {
          // First, try to use the navigation preload response if it's
          // supported.
          const preloadResponse = await event.preloadResponse;

          if (preloadResponse) {
            return preloadResponse;
          }

          // Always try the network first.
          const networkResponse = await fetch(event.request);
          return networkResponse;
        } catch (error) {
          // catch is only triggered if an exception is thrown, which is
          // likely due to a network error.
          // If fetch() returns a valid HTTP response with a response code in
          // the 4xx or 5xx range, the catch() will NOT be called.
          console.error("Fetch failed; returning offline page instead.", error);

          const failedUrlPathname = new URL(event.request.url).pathname;

          const cache = await caches.open(CACHE_NAME);

          const cachedResponse = await cache.match(failedUrlPathname);
          return cachedResponse;
        }
      })()
    );
  }

  // If our if() condition is false, then this fetch handler won't
  // intercept the request. If there are any other fetch handlers
  // registered, they will get a chance to call event.respondWith().
  // If no fetch handlers call event.respondWith(), the request
  // will be handled by the browser as if there were no service
  // worker involvement.
});