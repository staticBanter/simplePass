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
import cleanModifier from "./helpers/cleanModifier.helper.js";

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
    modifier:I_passwordModifier|FormData = {
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
     * Clean out any unneeded attributes that might be attached to the object,
     * and convert FormData objects into something we can use.
     */
    modifier = cleanModifier(modifier);

    /**
     * The following attributes are not checked here
     * because they must be paired with another:
     * * any whitespace character attribute.
     * * excludeCharacters
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

    // Subtract one from the length because we manually append a character at the end.
    const limit:number = (modifier.length - 1);

    /**
     * If the number of allowed attributes set is larger than the modifier limit,
     * throw an error.
     */
    if(
        Object.entries(modifier).length
        > modifier.length
    ){ throw new Error(E_errors.invalidNumberOfSelectedModifiers); }

    if(
        modifier.excludeCharacters
    ){
        if(
            !modifier.excludeCharacters.length
            && modifier.excludeCharacters.length <= 0
        ){
            throw new Error(E_errors.excludeCharactersZeroLength);
        }
        if(new RegExp('/[\s]/g').test(modifier.excludeCharacters)){
            throw new Error(E_errors.excludeCharactersIncludesWhitespace);
        }
    }

    let password:string  = '';

    if(!modifier.memorable){

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