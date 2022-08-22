'use strict';
/**
 * @file Main file for simplePass. Exports the simplePass function
 */

import I_passwordModifier from "./interfaces/passwordModifier.interface.js";
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import conformPassword from "./helpers/conformPassword.helper.js";

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
    }
){

    if(
        !modifier
        || typeof modifier !== 'object'
    ){
        throw new Error(E_errors.invalidModifier)
    }

    /**
     * * Note: Whitespace options are not check,
     * because they must always be paired with one
     * of these options.
     */
    if(
        !modifier.lowercase
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
        || modifier.length < 3
        || modifier.length > 256
    ){
        throw new Error(E_errors.invalidLength);
    }else if(typeof(modifier.length) === 'string'){
        modifier.length = Number.parseInt(modifier.length);
    }else if(typeof(modifier.length) !== 'number'){
        throw new Error(E_errors.invalidLength);
    }

    let password:string  = '';

    if(!modifier.memorable){

        const limit:number = (modifier.length - 1);

        password += String.fromCharCode(generateCharCode(modifier,{beginning:true}));

        while(
            password.length < limit
            && password.length < 256
        ){
            password += String.fromCharCode(generateCharCode(modifier));
        }

        password += String.fromCharCode(generateCharCode(modifier,{end:true}));

    }else{
        // TODO
        return;
    }

    return conformPassword(password,modifier);

}