/**
* simplePass - A JavaScript password generator.
* Copyright (C) 2023  Jordan Vezina(staticBanter)
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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
export default function createMessage(templateString, replacements, cFig = config) {
    // * Note: Please do not use this function to create it's own error messages, as this could be... problematic.
    // Initialize our character index.
    let index = 0;
    templateString = `${cFig.messages.prefix} ${templateString}`;
    while (templateString.includes(cFig.messages.templateMarker)) {
        // Check if the replacement contains a marker. This will cause infinite looping.
        if (replacements[index] === cFig.messages.templateMarker) {
            throw new Error(`${cFig.messages.prefix}-cM_E.1: A \'Message Replacement\', "${replacements[index]}", contained a \'Message Marker\', "${cFig.messages.templateMarker}".`);
        }
        /**
         * If we have a replacement at that index replace the marker with that one.
         * Else replace it with the last replacement in the list.
         * @ignore
         */
        templateString = templateString.replace(cFig.messages.templateMarker, replacements[index++] ?? replacements[(replacements.length - 1)]);
    }
    // Return the string.
    return templateString;
}
