"use strict";

import simplePass from "../javascript/bundle/simplePass.bundle.js";

(()=>{

    // const sp = new simplePass;
    // sp.formSetup();

    // Create a default password to display on load up.
    const displayPassword = document.body.querySelector("#displayPassword");
    const passwordEntropy = document.body.querySelector('#passwordEntropy');

    const initialPassword = simplePass(
        {
            length:22,
            lowercase:true,
            uppercase:true,
            numbers:true,
            punctuation:true
        },
        {
            styleTarget:displayPassword,
            styleType:"inline"
        }
    );

    displayPassword.innerText = initialPassword.password;
    passwordEntropy.innerText = Math.round(initialPassword.entropy);


    // When the user submits the form, call simplePass and display the new form.
    document.body.querySelector("#sp_form").addEventListener('submit',function(event){
        event.preventDefault();
        const password = simplePass(
            new FormData(this),
            {
                styleTarget:displayPassword,
                styleType:"inline"
            }
        );
        displayPassword.innerText = password.password;
        passwordEntropy.innerText = Math.round(password.entropy);
    });

    // Copy the password to clipboard when copy button is clicked
    document.body.querySelector("#copyPassword").addEventListener('click',function(event){
        event.preventDefault();

        navigator.clipboard.writeText(displayPassword.innerText).then(()=>{
            this.style.backgroundColor = `green`;
            this.innerText = 'Copied!';
            setTimeout(()=>{
                this.toggleAttribute('style');
                this.innerText = 'Copy';
            },5000);
        })
        .catch((error)=>{
            console.error(error.message);
        });

    });

    function toggleAttributes(){

        if(
            !this.dataset.target
            || !this.dataset.toggle
        ){
            throw new Error(`Toggle Element (${this}) was missing the proper data attributes`);
        }

        this.dataset.target.split(' ').forEach((target)=>{

            document.querySelectorAll(target).forEach((element)=>{

                element.hasAttribute(this.dataset.toggle)?
                element.removeAttribute(this.dataset.toggle):
                element.setAttribute(this.dataset.toggle,this.dataset.toggle);

            });

        });

    }

    // Event listener for toggles.
    document.body.querySelectorAll('.toggle').forEach((toggle)=>{

        toggle.addEventListener('click',toggleAttributes);

        toggleAttributes.apply(toggle);

    })

    /**
     * PWA A2HS Functionality.
     * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen
     * https://web.dev/customize-install/
     */
    let deferredPrompt;
    const addBtn = document.querySelector(".add-button");
    addBtn.style.display = "none";

    window.addEventListener("beforeinstallprompt", (e) => {
        // Prevent Chrome 67 and earlier from automatically showing the prompt
        e.preventDefault();
        // Stash the event so it can be triggered later.
        deferredPrompt = e;
        // Update UI to notify the user they can add to home screen
        addBtn.style.display = "block";
      
        addBtn.addEventListener("click", (e) => {
          // hide our user interface that shows our A2HS button
          addBtn.style.display = "none";
          // Show the prompt
          deferredPrompt.prompt();
          // Wait for the user to respond to the prompt
          deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === "accepted") {
              console.log("User accepted the A2HS prompt");
            } else {
              console.log("User dismissed the A2HS prompt");
            }
            deferredPrompt = null;
          });
        });
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
        navigator.serviceWorker.register("/simplePass/sw.js");
    }
        
})();