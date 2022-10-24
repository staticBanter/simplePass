"use strict";

import simplePass from "../simplePass/simplePass.js";

(()=>{

    // Create a default password to display on load up.
    const displayPassword = document.body.querySelector("#displayPassword");
    displayPassword.innerText = simplePass();

    // Hide the whitespace options until a user decides to modify them.
    const whitespaceFieldSet = document.body.querySelector('#whitespaceOptions');
    whitespaceFieldSet.setAttribute('hidden','hidden');

    // Disable the whitespace options until a user decides to use them.
    const whitespaceOptions = whitespaceFieldSet.querySelectorAll('input');
    whitespaceOptions.forEach((option)=>{option.setAttribute('disabled','disabled');});

    /**
     * If the 'allow whitespace' option is set then unhide the whitespace options and enable them,
     * Else hide the options and disable them.
     */
    document.body.querySelector("input[name='allow_whitespace']").addEventListener('input',function(){

        if(this.checked){
            whitespaceFieldSet.removeAttribute('hidden');
            whitespaceOptions.forEach((option)=>{option.removeAttribute('disabled');});
        }else{
            whitespaceFieldSet.setAttribute('hidden','hidden');
            whitespaceOptions.forEach((option)=>{option.setAttribute('disabled','disabled');});
        }
    });

    // When the user submits the form, call simplePass and display the new form.
    document.body.querySelector("#passwordForm").addEventListener('submit',function(event){
        event.preventDefault();
        displayPassword.innerText = simplePass(new FormData(this));
    });

})();