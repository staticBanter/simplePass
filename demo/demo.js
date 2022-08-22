"use strict";

import simplePass from "../simplePass/simplePass.js";

(()=>{

    const displayPassword = document.body.querySelector("#displayPassword");

    displayPassword.innerText = simplePass();

    const whitespaceFieldSet = document.body.querySelector('#whitespaceOptions');
    whitespaceFieldSet.setAttribute('hidden','hidden');

    const whitespaceOptions = whitespaceFieldSet.querySelectorAll('input');
    whitespaceOptions.forEach((option)=>{option.setAttribute('disabled','disabled');});

    document.body.querySelector("input[name='allow_whitespace']").addEventListener('input',function(){

        if(this.checked){
            whitespaceFieldSet.removeAttribute('hidden');
            whitespaceOptions.forEach((option)=>{option.removeAttribute('disabled');});

        }else{
            whitespaceFieldSet.setAttribute('hidden','hidden');
            whitespaceOptions.forEach((option)=>{option.setAttribute('disabled','disabled');});
        }
    });

    document.body.querySelector("#passwordForm").addEventListener('submit',function(event){
        event.preventDefault();
        displayPassword.innerText = simplePass(Object.fromEntries(new FormData(this).entries()));
    });

})();