"use strict";

import simplePass from "../simplePass/src/simplePass.js";

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

    function toggleAttributes(){

        if(
            !this.dataset.target
            || !this.dataset.toggle
        ){
            throw new Error(`Toggle Element (${this}) was missing the proper data attributes`)
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

})();