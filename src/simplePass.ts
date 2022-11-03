'use strict';
/**
 * @file Main file for simplePass. Exports the simplePass function
 * @module simplePass
 */

import I_passwordModifier from "./data/interfaces/passwordModifier.interface.js";
import E_errors from "./data/enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import cleanModifier from "./helpers/cleanModifier.helper.js";
import L_requiredAttributes from "./data/lists/requiredAttributes.list.js";
import I_charCodeRequest from "./data/interfaces/charCodeRequest.interface.js";
import L_whitespaceAttributes from "./data/lists/whitespaceAttributes.list.js";
import L_useableAttributes from "./data/lists/usableAttributes,list.js";
import shuffle from "./helpers/shuffle.helper.js";
import createModifierList from "./helpers/createModifierList.helper.js";

/**
 * Returns a *password* string.
 *
 * @function simplePass
 * @type {Function}
 * @param {I_passwordModifier | FormData} modifier The available password modifications. See README.md for more information about modifiers.
 * @returns {string} The generated password.
 * @global
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
    const c_modifier:I_passwordModifier = cleanModifier(modifier);

    /**
     * Check if the modifier contains at least one of these attributes.
     * The following attributes are not checked here
     * because they must be paired with another
     * and will be check elsewhere when needed:
     * * length
     * * any whitespace character attribute.
     * * excludeCharacters
     */
    if(!Object.keys(c_modifier).some(attribute=>L_requiredAttributes.includes(attribute))){
        throw new Error(E_errors.invalidModifier);
    }

    if(
        !c_modifier.length
        || c_modifier.length < 3
        || c_modifier.length > 256
    ){
        throw new Error(E_errors.invalidLength);
    }else if(typeof(c_modifier.length) === 'string'){
        c_modifier.length = Number.parseInt(c_modifier.length);
    }else if(typeof(c_modifier.length) !== 'number'){
        throw new Error(E_errors.invalidLength);
    }

    // Subtract one from the password length limit because we manually append a character at the end.
    const passwordLengthLimit:number = (c_modifier.length - 1);

    /**
     * If the number of allowed attributes set is larger than the modifier limit,
     * throw an error.
     */
    if(
        createModifierList(c_modifier,L_useableAttributes).length
        > c_modifier.length
    ){ throw new Error(E_errors.invalidNumberOfSelectedModifiers); }

    if(
        c_modifier.excludeCharacters
    ){
        if(
            !c_modifier.excludeCharacters.length
            && c_modifier.excludeCharacters.length <= 0
        ){
            throw new Error(E_errors.excludeCharactersZeroLength);
        }
        if(new RegExp('/[\s]/g').test(c_modifier.excludeCharacters)){
            throw new Error(E_errors.excludeCharactersIncludesWhitespace);
        }
    }

    let requiredModifierList:Array<string> = createModifierList(c_modifier,L_requiredAttributes);
    let whitespaceModifierList:Array<string> = createModifierList(c_modifier,L_whitespaceAttributes);

    if(whitespaceModifierList.includes('w_between')){
        requiredModifierList.push('whitespace');
    }

    const charCodeRequest:I_charCodeRequest = {
        charType:'',
        charCodeOptions:{
            whitespaceOptions:whitespaceModifierList,
            excludeCharacters:c_modifier.excludeCharacters
        }
    }

    /**
     * A list containing one item is essentially a string.
     * So if our list only contains one item it's not a *real* list.
     */
    const realList:boolean = (requiredModifierList.length > 1);

    requiredModifierList = shuffle(requiredModifierList);

    let password:string  = '';

    if(!c_modifier.memorable){


        /**
         * If the password requires a whitespace at the beginning, append a whitespace.
         * Else set the first character and add it to the password.
         */
        if(whitespaceModifierList.includes('w_beginning_required')){
            password += ' '
        }else{

            /**
             * If we are not dealing with a *real* list do not pop a character off here.
             */
            if(realList){
                // Because popping can be undefined we need to check the character...
                const currentType:string|undefined = requiredModifierList.pop();

                if(currentType){
                    charCodeRequest.charType = currentType;
                }

            }else{
                charCodeRequest.charType = requiredModifierList[0];
            }

            password += String.fromCharCode(generateCharCode(charCodeRequest,{beginning:true}));
        }

        /**
         * If the we are dealing with a *real* list we will need to pop the characters off 
         * of it and add it to the password. Also we will need to check if the list has reached
         * the end and we will need to replenish it.
         * Else if we are not dealing with a *real* list, we can just reference the first item
         * in the list without having to modify it.
         */
        if(realList){

            while(
                password.length < passwordLengthLimit
                && password.length < 256
            ){

                /**
                 * If we have reached the end of the list,
                 * replenish and reshuffle it.
                 */
                if(requiredModifierList.length === 0){ requiredModifierList = shuffle(createModifierList(c_modifier,L_requiredAttributes)); }

                const currentType:string|undefined = requiredModifierList.pop();

                if(currentType){
                    charCodeRequest.charType = currentType;
                }

                password += String.fromCharCode(generateCharCode(charCodeRequest));
            }

            /**
             * If the password requires a whitespace at the end, append a whitespace.
             * Else set the last character and add it to the password.
             */
            if(whitespaceModifierList.includes('w_end_required')){
                password += ' ';
            }else{

                /**
                 * Just incase we used all the modifiers up while looping
                 * we need to preform one more check
                 */
                if(requiredModifierList.length === 0){ requiredModifierList = shuffle(createModifierList(c_modifier,L_requiredAttributes)); }

                const currentType:string|undefined = requiredModifierList.pop();

                if(currentType){
                    charCodeRequest.charType = currentType;
                }

                password += String.fromCharCode(generateCharCode(charCodeRequest,{end:true}));
            }

        }else{

            charCodeRequest.charType = requiredModifierList[0];

            while(
                password.length < passwordLengthLimit
                && password.length < 256
            ){
                password += String.fromCharCode(generateCharCode(charCodeRequest));
            }

            if(whitespaceModifierList.includes('w_end_required')){
                password += ' ';
            }else{
                password += String.fromCharCode(generateCharCode(charCodeRequest,{end:true}));
            }
        }

    }else{
        // TODO
        return;
    }

    return password;

}