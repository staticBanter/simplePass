'use strict';

import config from "../config.simplePass.js";
/**
 * @file Contains the code for the `createMessage` function. Exports `createMessage`.
 * @module createMessage
 */

/**
 * Creates messages using template strings.
 *
 * @function createMessage
 * @param {string} templateString - The template message string.
 * @param {Array<string>} replacements - The message string replacements
 * @param {string} [marker] - The marker to replace with the message string replacements.
 * @throws - Will throw an error a message replacement contains a template marker.
 * @requires module:config
 * @returns {string}
 */
export default function createMessage(templateString:string,replacements:Array<string>,marker:string=config.templateMessageMarker):string{
    // * Note: Please do not use this function to create it's own error messages, as this could be... problematic.

    // Initialize our character index.
    let index:number = 0;

    while(templateString.includes(marker)){

        // Check if the replacement contains a marker. This will cause infinite looping.
        if(replacements[index]===marker){
            throw new Error(`${config.errorMessagePrefix}-cM_E.1: A \'Message Replacement\', "${replacements[index]}", contained a \'Message Marker\', "${marker}".`,)
        }

        /**
         * If we have a replacement at that index replace the marker with that one.
         * Else replace it with the last replacement in the list.
         * @ignore
         */
        templateString = templateString.replace(marker,replacements[index++]??replacements[(replacements.length-1)])
    }

    // Return the string.
    return templateString;
}