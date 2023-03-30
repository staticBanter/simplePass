"use strict";

import simplePass from "../../javascript/bundle/simplePass.bundle.js";

(()=>{


    // Create a default password to display on load up.
    const passwordContainer = document.body.querySelector("#passwordContainer")
    const passwordEntropy = document.body.querySelector('#passwordEntropy');
    let displayPassword = document.createElement('P');
    displayPassword.id = 'displayPassword';

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
    passwordContainer.appendChild(displayPassword)
    passwordEntropy.innerText = Math.floor(initialPassword.entropy);

    const passwordForm = document.body.querySelector("#sp_form");


    // When the user submits the form, call simplePass and display the new form.
    passwordForm.addEventListener('submit',function(event){
        event.preventDefault();

        const batchInput = document.body.querySelector("#passwordBatchAmount");

        let password;

        if(batchInput.value){

            let batch = batchInput.value;

            if(parseInt(batch) !== Number(batch)){
                throw new Error("Requested Password Batch Amount Was Not A Valid Number");
            }

            batch = parseInt(batch)

            if(
                batch < 1
                || batch > 256
            ){
                throw new Error("Request Password Batch Amount Was Out Of Bounds.");
            }

            passwordContainer.querySelector('#passwordList')?.remove();
            passwordEntropy?.parentElement?.remove();
            displayPassword?.remove();

            const OL = document.createElement("OL");
            OL.id = "passwordList"


            while(batch--){

                const LI = document.createElement("LI");

                const listedPassword = document.createElement("P");
                listedPassword.classList.add('listedPassword');

                const listedPasswordEntropy = document.createElement("P");

                const password = simplePass(
                    new FormData(this),
                    {
                        styleTarget:listedPassword,
                        styleType:"inline"
                    }
                );

                listedPassword.innerText = password.password;
                listedPasswordEntropy.innerText = `Bits of Entropy : ~${Math.floor(password.entropy)}`

                LI.appendChild(listedPassword);
                LI.appendChild(listedPasswordEntropy);
                OL.appendChild(LI)
            }

            passwordContainer.appendChild(OL);
            passwordContainer.dataset.batchType = 'list'

        }else{

            password = simplePass(
                new FormData(this),
                {
                    styleTarget:displayPassword,
                    styleType:"inline"
                }
            );

            passwordContainer.querySelector('#passwordList')?.remove();

            if(!passwordContainer.querySelector('#displayPassword')){

                let displayEntropy = document.createElement("P");
                displayEntropy.innerText = 'Bits of Entropy: ~';

                passwordContainer.appendChild(displayPassword);
                displayEntropy.appendChild(passwordEntropy);
                passwordContainer.appendChild(displayEntropy);
            }

            displayPassword.innerText = password.password;
            passwordEntropy.innerText = Math.floor(password.entropy);
            passwordEntropy.parentElement.removeAttribute('style');
            passwordContainer.dataset.batchType = 'single'
        }

    });


    /**
     * Event listeners for "Radio Checkboxes".
     * Just loops through all the checkboxes and unchecks and box that does not have the same value as the
     * currently clicked box.
     */
    const radioCheckboxes = passwordForm.querySelectorAll('input[data-radioCheckbox]');

    radioCheckboxes.forEach((input)=>{
        input.addEventListener('click',function(){
            radioCheckboxes.forEach((input)=>{
                if(input.value !== this.value){
                    if(input.checked){
                        input.checked=false;
                    }
                }
            });
        });
    });

    // Copy the password to clipboard when copy button is clicked
    document.body.querySelector("#copyPasswordButton").addEventListener('click',function(event){
        event.preventDefault();

        switch(passwordContainer.dataset.batchType){
            default:
            case 'single':

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

            break;
            case 'list':

                let copyString = '';

                passwordContainer.querySelectorAll("LI").forEach((element)=>{
                    copyString += `${element.firstChild.innerText}\n`;
                });

                navigator.clipboard.writeText(copyString).then(()=>{
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

            break;
        }

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

    });



    document.body.querySelectorAll('.sp_preConfig').forEach((element)=>{
        element.addEventListener('click',function(){

        });
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
        navigator.serviceWorker.register(process.env.serviceWorkerURL);
    }

})();