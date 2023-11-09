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

"use strict";

import simplePass from "../../javascript/bundle/simplePass.bundle.js";
import * as ElementToggle from "./element-toggle.js";

(() => {

    if(window.location.pathname === process.env.examplesAndIntegrationURL) {

        // Get an element to display our password
        const displayPassword = document.body.querySelector(".simplePass_passwordTarget_6");
        // Get an element to display our entropy score.
        const passwordEntropy = document.body.querySelector('.simplePass_entropyTarget_3');

        // Create our password
        const initialPassword = simplePass(
            {
                length: 22,
                lowercase: true,
                uppercase: true,
                numbers: true,
                punctuation: true
            }
        );

        // Set our 'display element' text to the password.
        displayPassword.innerText = initialPassword.password;
        // Set the 'password entropy' elements inner text to our passwords entropy.
        passwordEntropy.innerText = Math.round(initialPassword.entropy);

        // You should also note that simplePass has styled the targeted element according to the passwords score.

        // Standard Initialization.
        simplePass.init();

        /**
         * Because we have many password targets
         * each one needs their own initializer
         * or else things start to get... messy.
         */
        simplePass.init({
            elements: {
                passwordTarget: ".simplePass_passwordTarget_1",
                actions: {
                    copy: ".simplePass_copier_1",
                    generate: '.simplePass_generator_1'
                }
            }
        });

        simplePass.init({
            elements: {
                passwordTarget: ".simplePass_passwordTarget_2",
                actions: {
                    copy: ".simplePass_copier_2",
                    generate: '.simplePass_generator_2',
                    form: "#simplePass_form"
                }
            }
        });

        simplePass.init({
            elements: {
                passwordTarget: ".simplePass_passwordTarget_3",
                passwordContainer: ".simplePass_passwordContainer",
                actions: {
                    copy: ".simplePass_copier_3",
                    generate: '.simplePass_generator_3',
                    form: "#simplePass_form_1"
                },
            }
        });

        simplePass.init({
            elements: {
                passwordTarget: ".simplePass_passwordTarget_4",
                passwordContainer: ".simplePass_passwordContainer_1",
                actions: {
                    copy: ".simplePass_copier_4",
                    generate: '.simplePass_generator_4',
                    form: "#simplePass_form_2"
                },
            },
            strengthCheck: {
                entropyTarget: ".simplePass_entropyTarget",
                possibleCombinationsTarget: ".simplePass_possibleCombinationsTarget",
                binaryStringTarget: ".simplePass_binaryStringTarget",
                binaryStringLengthTarget: ".simplePass_binaryStringLengthTarget",
                averageCharacterByteLengthTarget: ".simplePass_averageCharacterByteLengthTarget",
                uniqueCharacterPercentageTarget: ".simplePass_uniqueCharactersPercentageTarget",
            },
        });

        simplePass.init({
            elements: {
                passwordTarget: ".simplePass_passwordTarget_5",
                actions: {
                    copy: ".simplePass_copier_5",
                    generate: '.simplePass_generator_5',
                    form: "#simplePass_form_3"
                },
                passwordContainer: ".simplePass_passwordContainer_2",
            },
            messages: {
                messageBoard: '.simplePass_messageBoard'
            },
            strengthCheck: {
                entropyTarget: ".simplePass_entropyTarget_2"
            },
        });

    } else {
        simplePass.init();
    }

    ElementToggle;

    /**
     * PWA Service Worker Registration.
     * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
     */
    if("serviceWorker" in navigator) {
        navigator.serviceWorker.register(process.env.serviceWorkerURL);
    }

})();
