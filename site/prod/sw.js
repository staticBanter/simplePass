const appShellFiles = [
    // Base
    "/simplePass/",
    "./index.html",
    "./offline.html",
    "./main.css",
    "./main.js",
    "./sw.js",
    "./manifest.json",
    // Storage
    "./storage/icons/simplePass-Logo-1080.png",
    "./storage/icons/simplePass-Logo-512.png",
    "./storage/icons/simplePass-Logo-1080.svg",
    // Doc Fonts
    "./docs/fonts/OpenSans-BoldItalic-webfont.eot",
    "./docs/fonts/OpenSans-Bold-webfont.eot",
    "./docs/fonts/OpenSans-Italic-webfont.eot",
    "./docs/fonts/OpenSans-LightItalic-webfont.eot",
    "./docs/fonts/OpenSans-Light-webfont.eot",
    "./docs/fonts/OpenSans-Regular-webfont.eot",
    "./docs/fonts/OpenSans-BoldItalic-webfont.svg",
    "./docs/fonts/OpenSans-Bold-webfont.svg",
    "./docs/fonts/OpenSans-Italic-webfont.svg",
    "./docs/fonts/OpenSans-LightItalic-webfont.svg",
    "./docs/fonts/OpenSans-Light-webfont.svg",
    "./docs/fonts/OpenSans-Regular-webfont.svg",
    "./docs/fonts/OpenSans-BoldItalic-webfont.woff",
    "./docs/fonts/OpenSans-Bold-webfont.woff",
    "./docs/fonts/OpenSans-Italic-webfont.woff",
    "./docs/fonts/OpenSans-LightItalic-webfont.woff",
    "./docs/fonts/OpenSans-Light-webfont.woff",
    "./docs/fonts/OpenSans-Regular-webfont.woff",
    // Doc Scripts
    "./docs/scripts/prettify/Apache-License-2.0.txt",
    "./docs/scripts/prettify/lang-css.js",
    "./docs/scripts/prettify/prettify.js",
    "./docs/scripts/linenumber.js",
    // Doc Styles
    "./docs/styles/jsdoc-default.css",
    "./docs/styles/prettify-jsdoc.css",
    "./docs/styles/prettify-tomorrow.css",
    // Docs
    "./docs/characterCodeConstraintsAttributes.html",
    "./docs/characterSetObject.html",
    "./docs/characterStrengthCheckConstraints.html",
    "./docs/charCodeGenerationFlag.html",
    "./docs/charCodeOptions.html",
    "./docs/charCodeRequest.html",
    "./docs/configHTMLForm.html",
    "./docs/data_enums_errors.enum.js.html",
    "./docs/data_interfaces_characterCodeConstraintsAttributes.interface.js.html",
    "./docs/data_interfaces_characterSetObject.interface.js.html",
    "./docs/data_interfaces_characterStrengthCheckConstraints.interface.js.html",
    "./docs/data_interfaces_charCodeGenerationFlag.interface.js.html",
    "./docs/data_interfaces_charCodeRequest.interface.js.html",
    "./docs/data_interfaces_configHTMLForm.interface.js.html",
    "./docs/data_interfaces_ensureRepeatingCharacterOptions.interface.js.html",
    "./docs/data_interfaces_passwordModifier.interface.js.html",
    "./docs/data_interfaces_strengthCheckedPassword.interface.js.html",
    "./docs/data_interfaces_strengthCheckerConstraints.interface.js.html",
    "./docs/data_interfaces_strengthCheckerStyling.interface.js.html",
    "./docs/data_interfaces_strengthScoreAttributes.interface.js.html",
    "./docs/data_lists_allowedModifiers.list.js.html",
    "./docs/data_lists_requiredAttributes.list.js.html",
    "./docs/data_lists_usableAttributes.list.js.html",
    "./docs/data_lists_useableAttributes.list.js.html",
    "./docs/data_lists_whitespaceAttributes.list.js.html",
    "./docs/data_objects_characterCodeConstraints.object.js.html",
    "./docs/data_objects_passwordPreConfigs.object.js.html",
    "./docs/data_objects_strengthScores.object.js.html",
    "./docs/ensureRepeatingCharacterOptions.html",
    "./docs/functions_calculateMaxPossibleCharacters.function.js.html",
    "./docs/functions_characterStrengthCheck.function.js.html",
    "./docs/functions_cleanModifier.function.js.html",
    "./docs/functions_createMessage.function.js.html",
    "./docs/functions_createModifierList.function.js.html",
    "./docs/functions_ensureRepeatingCharacters.function.js.html",
    "./docs/functions_generateCharCode.function.js.html",
    "./docs/functions_range.function.js.html",
    "./docs/functions_shuffle.function.js.html",
    "./docs/functions_strengthChecker.function.js.html",
    "./docs/functions_validateModifier.function.js.html",
    "./docs/index.html",
    "./docs/module-allowedModifiers.html",
    "./docs/module-calculateMaxPossibleCharacters.html",
    "./docs/module-characterCodeConstraints.html",
    "./docs/module-characterStrengthCheck.html",
    "./docs/module-cleanModifier.html",
    "./docs/module-config.html",
    "./docs/module-createMessage.html",
    "./docs/module-createModifierList.html",
    "./docs/module-ensureRepeatingCharacters.html",
    "./docs/module-errors.html",
    "./docs/module-generateCharCode.html",
    "./docs/module-passwordPreConfigs.html",
    "./docs/module-range.html",
    "./docs/module-requiredAttributes.html",
    "./docs/module-shuffle.html",
    "./docs/module-simplePass.html",
    "./docs/module-strengthChecker.html",
    "./docs/module-strengthScores.html",
    "./docs/module-useableAttributes.html",
    "./docs/module-validateModifier.html",
    "./docs/module-whitespaceAttributes.html",
    "./docs/passwordModifier.html",
    "./docs/repeatingCharacterOptionsPreservations.html",
    "./docs/simplePass.config.js.html",
    "./docs/simplePass.js.html",
    "./docs/strengthCheckedPassword.html",
    "./docs/strengthCheckerConstraints.html",
    "./docs/strengthCheckerStyling.html",
    "./docs/strengthScoreAttributes.html",
    "./docs/tutorial-CODE_OF_CONDUCT.html",
    "./docs/tutorial-CONTRIBUTING.html",
    "./docs/tutorial-DEVELOPMENT.html",
    "./docs/tutorial-EXAMPLES.html",
    "./docs/tutorial-SECURITY.html",

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
