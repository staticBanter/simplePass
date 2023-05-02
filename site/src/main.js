"use strict";

import simplePass from "../../javascript/bundle/simplePass.bundle.js";

(()=>{

    simplePass.init();

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