'use strict';
/**
 * @file Main file for simplePass. Exports the simplePass function
 * @module simplePass
 */

import I_passwordModifier from "./interfaces/passwordModifier.interface.js";
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import conformPassword from "./helpers/conformPassword.helper.js";
import L_allowedModifiers from "./lists/allowedModifiers.list.js";

/**
 * Returns a *password* string.
 *
 * @function simplePass
 * @type {Function}
 * @param {I_passwordModifier} modifier The available password modifications. See README.md for more information about modifiers.
 * @returns {string} The generated password.
 * @global
 * @requires module:generateCharCode
 * @requires module:conformPassword
 * @requires module:E_errors
 * @requires module:I_passwordModifier
 * @throws Throws an error if the modifier is not properly formatted.
 * @throws Throws an error if modifier length not properly formatted.
 * @throws Throws an error if there is an invalid number of modifiers selected.
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

    /**
     * If the number of allowed attributes set is larger than the modifier limit,
     * throw an error.
     */
    if(
        (
            /**
             * Go through each modifier argument entries,
             * When filtered we get an array containing the modifier attribute and its value (ie: [lowercase, on] or [uppercase, false]);
             * We filter if that modifier attribute is an allowed on the list(Prevents arbitrary attributes from being counted as set) and if its value set is truthy.
             * Finally get the length of the newly returned filtered array.
             *
             * This is done to allow a user to send a FormData Object to simplePass and not have to worry to much about creating a proper object.
             * simplePass will simply ignore any unfamiliar attributes and carry on creating a proper password.
             *
             * Finally because we (currently) only need this value for just this check there is no real need to assign a whole new variable to store the output.
             */
            Object.entries(modifier).filter((attVal)=>{
                return (L_allowedModifiers.includes(attVal[0]) && attVal[1])
            }).length
        ) >
        modifier.length
    ){ throw new Error(E_errors.invalidNumberOfSelectedModifiers); }

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