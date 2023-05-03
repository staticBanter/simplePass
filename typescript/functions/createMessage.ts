'use strict';

import config from "../simplePass.config.js";

/**
 * @file
 * @module createMessage
 */

/**
 * Creates a message using a template strings.
 *
 * @function createMessage
 * @param {string} templateString The template message string.
 * @param {Array<string>} replacements The template string replacements.
 * @param {string} [marker] The template marker to replace in the string.
 * @throws  Will throw an error a message replacement contains a template marker.
 * @requires config
 * @returns {string} The message with the template markers replaced.
 */
export default function createMessage(templateString:string,replacements:Array<string>,cFig:typeof config = config):string{
    // * Note: Please do not use this function to create it's own error messages, as this could be... problematic.

    // Initialize our character index.
    let index: number = 0;

    templateString = `${cFig.messages.prefix} ${templateString}`;

    while(templateString.includes(cFig.messages.templateMarker)){

        // Check if the replacement contains a marker. This will cause infinite looping.
        if(replacements[index]===cFig.messages.templateMarker){
            throw new Error(`${cFig.messages.prefix}-cM_E.1: A \'Message Replacement\', "${replacements[index]}", contained a \'Message Marker\', "${cFig.messages.templateMarker}".`,)
        }

        /**
         * If we have a replacement at that index replace the marker with that one.
         * Else replace it with the last replacement in the list.
         * @ignore
         */
        templateString = templateString.replace(cFig.messages.templateMarker,replacements[index++]??replacements[(replacements.length-1)])
    }

    // Return the string.
    return templateString;
}