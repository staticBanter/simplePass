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
import shuffle from "./shuffle.js";
/**
 * @file
 * @module ensureRepeatingCharacters
 */
/**
 * Ensures a string contains repeating characters.
 *
 * @function ensureRepeatingCharacters
 * @param {string} string The string to ensure contains repeating characters.
 * @param {ensureRepeatingCharacterOptions} options An object defining how to repeat the characters in the string.
 * If none of the matching attributes are passed with this object, the string will be returned unmodified.
 * @requires shuffle
 * @returns {string} A string with the desired repeating character requirements.
 */
export default function ensureRepeatingCharacters(string, options) {
    /**
     * Removes repeats of a character found in a string.
     *
     * @function removeRepeats
     * @private
     * @param {Array<any>} string The string to check for repeats.
     * @returns {string} A string containing the original characters not repeated.
     */
    function removeRepeats(string) {
        // The list to contain the unique characters.
        const uniqueSet = [];
        /**
         * Foreach character in the string,
         * if the unique set does not already include that character,
         * add it.
         */
        string.split('').forEach((char) => {
            if (!uniqueSet.includes(char)) {
                uniqueSet.push(char);
            }
        });
        // Return our unique set as a string.
        return uniqueSet.join('');
    }
    /**
     * Split the string into pieces.
     * This makes it easier to ensure the beginning and end characters can be preserved if needed.
     */
    let stringBeginning = string.slice(0, 1);
    let stringMiddle = string.slice(1, string.length - 1);
    let stringEnd = string.slice(string.length - 1, string.length);
    /**
     * Determine if we are:
     *  Custom Repeating Characters
     *  Repeating random characters in the already generated password.
     *  Repeating a single character in the password.
     * * Note: It needs to be checked in this order.
     */
    if (options.customCharacterSet) {
        // ^ Custom Repeating Characters.
        // Initialize our characters list.
        const characters = [];
        // Push all the middle string characters into our list.
        stringMiddle.split('').forEach((char) => {
            characters.push(char);
        });
        /**
         * Check if the attribute is a string else it will be list of sets.
         */
        if (typeof (options.customCharacterSet) === 'string') {
            // Split the repeating characters string up and add each character to our list twice.
            options.customCharacterSet.split('').forEach((char) => {
                characters.push(char);
                characters.push(char);
            });
        }
        else {
            // ^ Custom Repeating Characters should be a list.
            /**
             * Iterate over the list.
             * Foreach set add it's character teh request amount of times.
             */
            options.customCharacterSet.forEach((set) => {
                let i = parseInt(set[1]);
                while (i--) {
                    characters.push(set[0]);
                }
            });
        }
        /**
         * If the beginning or end preservations are not set,
         * push their characters into our list and blank them.
         */
        if (!options.preservations?.beginning) {
            characters.push(stringBeginning);
            stringBeginning = '';
        }
        if (!options.preservations?.end) {
            characters.push(stringEnd);
            stringEnd = '';
        }
        /***/
        // Create our string.
        string = stringBeginning + shuffle(characters).join('') + stringEnd;
    }
    else if (options.repeatingSetCount
        && options.repeatingSetCount > 1) {
        // ^ Repeating random characters in the already generated password.
        // Break up the characters into an array
        let characters = shuffle(string.split(''));
        /**
         * Remove any currently repeating characters,
         * as they will through us off count.
         */
        characters = removeRepeats(characters.join('')).split('');
        stringMiddle = removeRepeats(stringMiddle);
        /***/
        /**
         * Add characters from our list to the middle of the string
         * as many times as we need to repeat character and while a
         * character exists in the list at that position.
         */
        for (let i = 0; (i < options.repeatingSetCount
            && characters[i]); i++) {
            stringMiddle += characters[i];
        }
        // Create our string.
        string = stringBeginning + shuffle(stringMiddle.split('')).join('') + stringEnd;
    }
    else {
        // ^ Repeating a single character in the password.
        // Shuffle the string and add a the first character to the middle.
        stringMiddle += shuffle(string.split(''))[0];
        // Create our string.
        string = stringBeginning + shuffle(stringMiddle.split('')).join('') + stringEnd;
    }
    // Return our string.
    return string;
}
