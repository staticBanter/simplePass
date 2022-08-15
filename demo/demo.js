"use strict";

import simplePass from "../simplePass/simplePass.js";

(()=>{

    const displayPassword = document.body.querySelector("#displayPassword");

    displayPassword.innerText = simplePass();


    document.body.querySelector("#passwordForm").addEventListener('submit',function(event){
        event.preventDefault();
        displayPassword.innerText = simplePass(Object.fromEntries(new FormData(this).entries()));
    })

})();