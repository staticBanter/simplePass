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
"use strict";const appShellFiles=["/simplePass/","./index.html","./EXAMPLES-AND-INTEGRATION.html","./main.css","./main.js","./manifest.json","./offline.html","./robots.txt","./sw.js","./docs/characterCodeConstraintsAttributes.html","./docs/characterSetObject.html","./docs/characterStrengthCheckConstraints.html","./docs/charCodeGenerationFlag.html","./docs/charCodeOptions.html","./docs/charCodeRequest.html","./docs/configHTMLElement.html","./docs/data_interfaces_characterCodeConstraintsAttributes.js.html","./docs/data_interfaces_characterSetObject.js.html","./docs/data_interfaces_characterStrengthCheckConstraints.js.html","./docs/data_interfaces_charCodeGenerationFlag.js.html","./docs/data_interfaces_charCodeRequest.js.html","./docs/data_interfaces_configHTMLElements.js.html","./docs/data_interfaces_ensureRepeatingCharacterOptions.js.html","./docs/data_interfaces_messageBoxObject.js.html","./docs/data_interfaces_messageObject.js.html","./docs/data_interfaces_messageTypes.js.html","./docs/data_interfaces_passwordModifier.js.html","./docs/data_interfaces_strengthCheckedPassword.js.html","./docs/data_interfaces_strengthCheckerConstraints.js.html","./docs/data_interfaces_strengthCheckerStyling.js.html","./docs/data_interfaces_strengthScoreAttributes.js.html","./docs/data_lists_allowedModifiers.js.html","./docs/data_lists_useableAttributes.js.html","./docs/data_lists_whitespaceAttributes.js.html","./docs/data_objects_characterCodeConstraints.js.html","./docs/data_objects_errors.js.html","./docs/data_objects_passwordPreConfigs.js.html","./docs/data_objects_strengthScores.js.html","./docs/ensureRepeatingCharacterOptions.html","./docs/functions_calculateMaxPossibleCharacters.js.html","./docs/functions_characterStrengthCheck.js.html","./docs/functions_cleanModifier.js.html","./docs/functions_createMessageBox.js.html","./docs/functions_createMessage.js.html","./docs/functions_createModifierList.js.html","./docs/functions_ensureRepeatingCharacters.js.html","./docs/functions_generateCharCode.js.html","./docs/functions_initializer.js.html","./docs/functions_messageHandler.js.html","./docs/functions_range.js.html","./docs/functions_shuffle.js.html","./docs/functions_strengthChecker.js.html","./docs/functions_validateModifier.js.html","./docs/index.html","./docs/messageBoxObject.html","./docs/messageObject.html","./docs/messageTypes.html","./docs/module-allowedModifiers.html","./docs/module-calculateMaxPossibleCharacters.html","./docs/module-characterCodeConstraints.html","./docs/module-characterStrengthCheck.html","./docs/module-cleanModifier.html","./docs/module-config.html","./docs/module-createMessage.html","./docs/module-createModifierList.html","./docs/module-ensureRepeatingCharacters.html","./docs/module-errors.html","./docs/module-generateCharCode.html","./docs/module-initializer.html","./docs/module-messageHandler.html","./docs/module-passwordPreConfigs.html","./docs/module-range.html","./docs/module-requiredAttributes.html","./docs/module-shuffle.html","./docs/module-simplePass.html","./docs/module-strengthChecker.html","./docs/module-strengthScores.html","./docs/module-useableAttributes.html","./docs/module-validateModifier.html","./docs/module-whitespaceAttributes.html","./docs/passwordModifier.html","./docs/repeatingCharacterOptionsPreservations.html","./docs/simplePass.config.js.html","./docs/simplePass.js.html","./docs/strengthCheckedPassword.html","./docs/strengthCheckerConstraints.html","./docs/strengthCheckerStyling.html","./docs/strengthScoreAttributes.html","./docs/CODE_OF_CONDUCT.html","./docs/CONTRIBUTING.html","./docs/DEVELOPMENT.html","./docs/SECURITY.html","./docs/fonts/OpenSans-BoldItalic-webfont.eot","./docs/fonts/OpenSans-BoldItalic-webfont.svg","./docs/fonts/OpenSans-BoldItalic-webfont.woff","./docs/fonts/OpenSans-Bold-webfont.eot","./docs/fonts/OpenSans-Bold-webfont.svg","./docs/fonts/OpenSans-Bold-webfont.woff","./docs/fonts/OpenSans-Italic-webfont.eot","./docs/fonts/OpenSans-Italic-webfont.svg","./docs/fonts/OpenSans-Italic-webfont.woff","./docs/fonts/OpenSans-LightItalic-webfont.eot","./docs/fonts/OpenSans-LightItalic-webfont.svg","./docs/fonts/OpenSans-LightItalic-webfont.woff","./docs/fonts/OpenSans-Light-webfont.eot","./docs/fonts/OpenSans-Light-webfont.svg","./docs/fonts/OpenSans-Light-webfont.woff","./docs/fonts/OpenSans-Regular-webfont.eot","./docs/fonts/OpenSans-Regular-webfont.svg","./docs/fonts/OpenSans-Regular-webfont.woff","./docs/scripts/linenumber.js","./docs/scripts/prettify/Apache-License-2.0.txt","./docs/scripts/prettify/lang-css.js","./docs/scripts/prettify/prettify.js","./docs/styles/jsdoc-default.css","./docs/styles/prettify-jsdoc.css","./docs/styles/prettify-tomorrow.css","./storage/icons/simplePass-Logo-1080.png","./storage/icons/simplePass-Logo-1080.svg","./storage/icons/simplePass-Logo-512.png  "],OFFLINE_VERSION=1,CACHE_NAME="simplePass_PWA_Cache_v1",OFFLINE_URL="./offline.html";self.addEventListener("install",(s=>{s.waitUntil((async()=>{const s=await caches.open(CACHE_NAME);await s.addAll(appShellFiles)})()),self.skipWaiting()})),self.addEventListener("activate",(s=>{s.waitUntil((async()=>{"navigationPreload"in self.registration&&await self.registration.navigationPreload.enable()})()),s.waitUntil((async()=>{await caches.open(CACHE_NAME).then((s=>{s.keys().then((t=>{t.forEach((t=>{appShellFiles.includes(`.${new URL(t.url).pathname.replace("site/prod/","")}`)||s.delete(t)}))}))})).catch((s=>{console.error(s)}))})()),self.clients.claim()})),self.addEventListener("fetch",(s=>{"navigate"===s.request.mode?s.respondWith((async()=>{try{const t=await s.preloadResponse;if(t)return t;return await fetch(s.request)}catch(t){console.error("Fetch failed; returning offline page instead.",t);const e=new URL(s.request.url).pathname,o=await caches.open(CACHE_NAME);return await o.match(e)}})()):s.respondWith((async()=>{try{const t=await s.preloadResponse;if(t)return t;return await fetch(s.request)}catch(t){console.error("Fetch failed; returning offline page instead.",t);const e=new URL(s.request.url).pathname,o=await caches.open(CACHE_NAME);return await o.match(e)}})())}));