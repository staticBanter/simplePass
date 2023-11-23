/*!
 *
 * simplePass - A JavaScript password generator.
 * Copyright (C) 2023  Jordan Vezina(staticBanter)
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */
"use strict";const appShellFiles="./EXAMPLES-AND-INTEGRATION.html ./index.html ./main.css ./main.js ./manifest.json ./offline.html ./robots.txt ./sw.js ./docs/CODE_OF_CONDUCT.html ./docs/CONTRIBUTING.html ./docs/DEVELOPMENT.html ./docs/SECURITY.html ./docs/charCodeGenerationFlag.html ./docs/charCodeOptions.html ./docs/charCodeRequest.html ./docs/characterCodeConstraintsAttributes.html ./docs/characterSetObject.html ./docs/data_interfaces_charCodeGenerationFlag.js.html ./docs/data_interfaces_charCodeRequest.js.html ./docs/data_interfaces_characterCodeConstraintsAttributes.js.html ./docs/data_interfaces_characterSetObject.js.html ./docs/data_interfaces_ensureRepeatingCharacterOptions.js.html ./docs/data_interfaces_messageBoxObject.js.html ./docs/data_interfaces_messageObject.js.html ./docs/data_interfaces_messageTypes.js.html ./docs/data_interfaces_passwordModifier.js.html ./docs/data_interfaces_strengthCheckTargets.js.html ./docs/data_interfaces_strengthCheckedPassword.js.html ./docs/data_interfaces_strengthCheckerConstraints.js.html ./docs/data_lists_allowedModifiers.js.html ./docs/data_lists_whitespaceAttributes.js.html ./docs/data_objects_characterCodeConstraints.js.html ./docs/data_objects_errors.js.html ./docs/data_objects_passwordPreConfigs.js.html ./docs/ensureRepeatingCharacterOptions.html ./docs/functions_calculateMaxPossibleCharacters.js.html ./docs/functions_cleanModifier.js.html ./docs/functions_createMessage.js.html ./docs/functions_createMessageBox.js.html ./docs/functions_ensureRepeatingCharacters.js.html ./docs/functions_generateCharCode.js.html ./docs/functions_initializer.js.html ./docs/functions_matchCharacterSetConstraint.js.html ./docs/functions_messageHandler.js.html ./docs/functions_range.js.html ./docs/functions_shuffle.js.html ./docs/functions_strengthChecker.js.html ./docs/functions_uniqueCharacterFilter.js.html ./docs/functions_validateModifier.js.html ./docs/index.html ./docs/messageBoxObject.html ./docs/messageObject.html ./docs/messageTypes.html ./docs/module-allowedModifiers.html ./docs/module-calculateMaxPossibleCharacters.html ./docs/module-characterCodeConstraints.html ./docs/module-cleanModifier.html ./docs/module-config-Messages.html ./docs/module-config-PasswordConstraints.html ./docs/module-config-SimplePassConfig.html ./docs/module-config-configHTMLElement.html ./docs/module-config.html ./docs/module-createMessage.html ./docs/module-ensureRepeatingCharacters.html ./docs/module-errors.html ./docs/module-generateCharCode.html ./docs/module-initializer.html ./docs/module-matchCharacterSetConstraint.html ./docs/module-messageHandler.html ./docs/module-passwordPreConfigs.html ./docs/module-range.html ./docs/module-shuffle.html ./docs/module-simplePass.html ./docs/module-strengthChecker.html ./docs/module-uniqueCharacterFilter.html ./docs/module-validateModifier.html ./docs/module-whitespaceAttributes.html ./docs/passwordModifier.html ./docs/repeatingCharacterOptionsPreservations.html ./docs/simplePass.config.js.html ./docs/simplePass.js.html ./docs/strengthCheckCompression.html ./docs/strengthCheckTargets.html ./docs/strengthCheckedPassword.html ./docs/strengthCheckerConstraints.html ./docs/fonts/OpenSans-Bold-webfont.eot ./docs/fonts/OpenSans-Bold-webfont.svg ./docs/fonts/OpenSans-Bold-webfont.woff ./docs/fonts/OpenSans-BoldItalic-webfont.eot ./docs/fonts/OpenSans-BoldItalic-webfont.svg ./docs/fonts/OpenSans-BoldItalic-webfont.woff ./docs/fonts/OpenSans-Italic-webfont.eot ./docs/fonts/OpenSans-Italic-webfont.svg ./docs/fonts/OpenSans-Italic-webfont.woff ./docs/fonts/OpenSans-Light-webfont.eot ./docs/fonts/OpenSans-Light-webfont.svg ./docs/fonts/OpenSans-Light-webfont.woff ./docs/fonts/OpenSans-LightItalic-webfont.eot ./docs/fonts/OpenSans-LightItalic-webfont.svg ./docs/fonts/OpenSans-LightItalic-webfont.woff ./docs/fonts/OpenSans-Regular-webfont.eot ./docs/fonts/OpenSans-Regular-webfont.svg ./docs/fonts/OpenSans-Regular-webfont.woff ./docs/scripts/linenumber.js ./docs/styles/jsdoc-default.css ./docs/styles/prettify-jsdoc.css ./docs/styles/prettify-tomorrow.css ./storage/icons/simplePass-Logo-1080.png ./storage/icons/simplePass-Logo-1080.svg ./storage/icons/simplePass-Logo-512.png ./storage/screen_shots/simplePass-narrow.jpg ./storage/screen_shots/simplePass-wide.jpg ./docs/scripts/prettify/Apache-License-2.0.txt ./docs/scripts/prettify/lang-css.js ./docs/scripts/prettify/prettify.js /simplePass/".split(" "),OFFLINE_VERSION=1,CACHE_NAME="simplePass_PWA_Cache_v1",OFFLINE_URL="./offline.html";self.addEventListener("install",(s=>{s.waitUntil((async()=>{const s=await caches.open(CACHE_NAME);await s.addAll(appShellFiles)})()),self.skipWaiting()})),self.addEventListener("activate",(s=>{s.waitUntil((async()=>{"navigationPreload"in self.registration&&await self.registration.navigationPreload.enable()})()),s.waitUntil((async()=>{await caches.open(CACHE_NAME).then((s=>{s.keys().then((e=>{e.forEach((e=>{appShellFiles.includes(`.${new URL(e.url).pathname.replace("site/prod/","")}`)||s.delete(e)}))}))})).catch((s=>{console.error(s)}))})()),self.clients.claim()})),self.addEventListener("fetch",(s=>{"navigate"===s.request.mode?s.respondWith((async()=>{try{const e=await s.preloadResponse;if(e)return e;return await fetch(s.request)}catch(e){console.error("Fetch failed; returning offline page instead.",e);const t=new URL(s.request.url).pathname,o=await caches.open(CACHE_NAME);return await o.match(t)}})()):s.respondWith((async()=>{try{const e=await s.preloadResponse;if(e)return e;return await fetch(s.request)}catch(e){console.error("Fetch failed; returning offline page instead.",e);const t=new URL(s.request.url).pathname,o=await caches.open(CACHE_NAME);return await o.match(t)}})())}));