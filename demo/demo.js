"use strict";

import simplePass from "../simplePass/browser/simplePass.js";

(()=>{

    // Create a default password to display on load up.
    const displayPassword = document.body.querySelector("#displayPassword");
    displayPassword.innerText = simplePass();

    // When the user submits the form, call simplePass and display the new form.
    document.body.querySelector("#passwordForm").addEventListener('submit',function(event){
        event.preventDefault();
        displayPassword.innerText = simplePass(new FormData(this));
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
        })
    });

    // Event listener for toggles.
    document.body.querySelectorAll('.toggle').forEach((toggle)=>{

        document.body.querySelectorAll(toggle.dataset.target).forEach((target)=>{
            if(!target.hasAttribute(toggle.dataset.attribute)){
                target.toggleAttribute(toggle.dataset.toggle);
            }
        })

        toggle.addEventListener('click',function(){
            document.body.querySelectorAll(toggle.dataset.target).forEach((target)=>{
                !target.hasAttribute(toggle.dataset.attribute)?
                target.toggleAttribute(toggle.dataset.toggle):
                target.toggleAttribute(toggle.dataset.toggle);
            })
        });

    })

})();