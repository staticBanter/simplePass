"use strict";

import simplePass from "../simplePass/simplePass.js";

(()=>{

    // Create a default password to display on load up.
    const displayPassword = document.body.querySelector("#displayPassword");
    displayPassword.innerText = simplePass();

    // When the user submits the form, call simplePass and display the new form.
    document.body.querySelector("#passwordForm").addEventListener('submit',function(event){
        event.preventDefault();
        displayPassword.innerText = simplePass(new FormData(this));
    });

})();