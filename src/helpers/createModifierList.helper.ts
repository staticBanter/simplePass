'use strict';

import I_passwordModifier from "../data/interfaces/passwordModifier.interface.js";
/**
 * @file Contains for the create modifier list function. Exports `createModifierList`
 * @module createModifierList
 */

/**
 * Creates an array of strings from a password modifier object containing the object
 * keys that were found in a predefined list.
 *
 * @function createModifierList
 * @param {I_passwordModifier} modifier - The password modifier object.
 * @param {Array<any>} list - The predefined list to match object keys about.
 * @returns {Array<any>}
 */
export default function createModifierList(modifier:I_passwordModifier,list:Array<any>):Array<string>{

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