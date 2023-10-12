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

(()=>{

    if(window.location.pathname === '/EXAMPLES-AND-INTEGRATION.html'){

        // Get an element to display our password
        const displayPassword = document.body.querySelector(".simplePass_passwordTarget_6");
        // Get an element to display our entropy score.
        const passwordEntropy = document.body.querySelector('.simplePass_entropyTarget_3');

        // Create our password
        const initialPassword = simplePass(
            {
                length:22,
                lowercase:true,
                uppercase:true,
                numbers:true,
                punctuation:true
            },
            {
                // We are going to style the 'display password' element using inline styling.
                styleTarget:displayPassword,
                styleType:"inline"
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
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_1",
                strengthCheckerStyling:{
                    styleType:"inline",
                },
                actionElements:{
                    copy:".simplePass_copier_1",
                    generate:'.simplePass_generator_1'
                }
            }
        });

        simplePass.init({
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_2",
                strengthCheckerStyling:{
                    styleType:"inline",
                },
                actionElements:{
                    copy:".simplePass_copier_2",
                    generate:'.simplePass_generator_2',
                    form:"#simplePass_form"
                }
            }
        });

        simplePass.init({
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_3",
                strengthCheckerStyling:{
                    styleType:"inline",
                },
                actionElements:{
                    copy:".simplePass_copier_3",
                    generate:'.simplePass_generator_3',
                    form:"#simplePass_form_1"
                },
                passwordContainer:".simplePass_passwordContainer"
            }
        });

        simplePass.init({
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_4",
                entropyTarget:".simplePass_entropyTarget",
                strengthCheckerStyling:{
                    styleType:"inline",
                },
                actionElements:{
                    copy:".simplePass_copier_4",
                    generate:'.simplePass_generator_4',
                    form:"#simplePass_form_2"
                },
                passwordContainer:".simplePass_passwordContainer_1",
            }
        });

        simplePass.init({
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_5",
                entropyTarget:".simplePass_entropyTarget_2",
                strengthCheckerStyling:{
                    styleType:"inline",
                },
                messages:{
                    messageBoard:'.simplePass_messageBoard'
                },
                actionElements:{
                    copy:".simplePass_copier_5",
                    generate:'.simplePass_generator_5',
                    form:"#simplePass_form_3"
                },
                passwordContainer:".simplePass_passwordContainer_2",
            }
        });

        simplePass.init({
            htmlElements:{
                passwordTarget:".simplePass_passwordTarget_6",
                entropyTarget:".simplePass_entropyTarget_3",
            }
        });


    }else{
        simplePass.init();
    }

    /**
     * PWA A2HS Functionality.
     * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen
     * https://web.dev/customize-install/
     */
    let deferredPrompt;
    // const addBtn = document.querySelector(".add-button");
    // addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        // addBtn.style.display = "block";

        // addBtn.addEventListener("click", (e) => {
        //   // hide our user interface that shows our A2HS button
        //   addBtn.style.display = "none";
        //   // Show the prompt
        //   deferredPrompt.prompt();
        //   // Wait for the user to respond to the prompt
        //   deferredPrompt.userChoice.then((choiceResult) => {
        //     if (choiceResult.outcome === "accepted") {
        //       console.log("User accepted the A2HS prompt");
        //     } else {
        //       console.log("User dismissed the A2HS prompt");
        //     }
        //     deferredPrompt = null;
        //   });
        // });
    });

    window.addEventListener('appinstalled', () => {
        // hide our user interface that shows our A2HS buttons
        addBtn.style.display = "none";
        // Clear the deferredPrompt so it can be garbage collected
        deferredPrompt = null;
    });

    /**
     * PWA Service Worker Registration.
     * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Offline_Service_workers
     */
    if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register(process.env.serviceWorkerURL);
    }

})();
