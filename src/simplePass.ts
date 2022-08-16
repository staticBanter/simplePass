'use strict';
/**
 * @file Main file for simplePass. Exports the simplePass function
 */

import I_passwordModifier from "./interfaces/passwordModifier.interface.js";
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";

/**
 * simplePass main function.
 * This function will return a *password* string.
 *
 * @function simplePass
 * @type {Function}
 * @param {I_passwordModifier} modifier The avaliale password modifications. See README.md for more information about modifiers.
 * @returns {string} The generated password.
 *
 */
export default function simplePass(
    modifier:I_passwordModifier = {
        length:8,
        lowercase:true,
        uppercase:false,
        numbers:false,
        punctuation:false,
        special:false,
        memorable:false
    }
){

    if(
        !modifier
        || typeof modifier !== 'object'
    ){
        throw new Error(E_errors.invalidModifier)
    }

    if(
        !modifier.length
        && !modifier.lowercase
        && !modifier.uppercase
        && !modifier.numbers
        && !modifier.punctuation
        && !modifier.special
        && !modifier.memorable
    ){
        throw new Error(E_errors.invalidModifier);
    }

    if(
        !modifier.length
        || modifier.length < 1
    ){
        throw new Error(E_errors.invalidLength + ' | 1');
    }else if(typeof(modifier.length) === 'string'){
        modifier.length = Number.parseInt(modifier.length);
    }else if(typeof(modifier.length) !== 'number'){
        throw new Error(E_errors.invalidLength + ' | 2');
    }

    let password:string  = '';

    if(!modifier.memorable){

        while(password.length < modifier.length){ password += String.fromCharCode(generateCharCode(modifier)); }

    }else{
        // TODO
        return;
    }

    return password;

}
