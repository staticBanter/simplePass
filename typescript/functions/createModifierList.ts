'use strict';

import passwordModifier from "../data/interfaces/passwordModifier.js";

/**
 * @file
 * @module createModifierList
 */

/**
 * Creates an array of strings from a [password modifier object]{@link passwordModifier} containing the object
 * keys that were found in a predefined list.
 *
 * @function createModifierList
 * @param {passwordModifier} modifier The password modifier object.
 * @param {Array<any>} list The predefined list to match object keys about.
 * @returns {Array<any>} The list of modifiers attributes that matched the original list.
 */
export default function createModifierList(modifier:passwordModifier,list:Array<any>):Array<string>{

    // Initialize Array
    const modifiers:Array<string> = [];

    // Filter Keys
    Object.keys(modifier).forEach((key:string)=>{
        if(list.includes(key)){
            modifiers.push(key);
        }
    })

    // Return Array.
    return modifiers;

}