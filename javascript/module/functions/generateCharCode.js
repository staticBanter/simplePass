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
import errors from "../data/objects/errors.js";
import characterCodeConstraints from "../data/objects/characterCodeConstraints.js";
import matchCharacterSetConstraint from "../functions/matchCharacterSetConstraint.js";
/**
 * @file
 * @module generateCharCode
 */
/**
 * Generates a random integer of a requested type.
 *
 * @function generateCharCode
 * @param {charCodeRequest} charCodeRequest An object contain the properties that describes the type of character code being requested
 * and restrictions being place on it.
 * @param {charCodeGenerationFlag} [flags] A flag object used to give more information about what stage of password generation we are at.
 * @requires characterCodeConstraints
 * @requires characterCodeConstraintsAttributes
 * @throws {errors.nonGenerableCharacterType} Will throw an error if the requested character code type
 * is not found within the character code constraints object.
 * @returns {number} An integer representing a UTF-16 character code unit. The integer will be within range of the defined character code request constraints.
 */
export default function generateCharCode(charCodeRequest, flags, cryptoModule = self.crypto) {
    // Generate our random number.
    let charCode = cryptoModule.getRandomValues(new Uint8Array(1))[0];
    /**
     * If the 'excluded characters' attribute is set,
     * If the 'excluded characters' contains the newly generated string,
     * regenerate a new string.
     */
    if (charCodeRequest.charCodeOptions?.excludeCharacters) {
        if (charCodeRequest.charCodeOptions.excludeCharacters.includes(String.fromCharCode(charCode))) {
            return generateCharCode(charCodeRequest, flags, cryptoModule);
        }
    }
    /**
     * Check for flags.
     */
    if (flags) {
        /**
         * Do things at the beginning of the password.
         */
        if (flags?.beginning) {
            /**
             * If a white-space is optional at the beginning of the password,
             * and the charCode is 32,
             * return the charCode.
             * Else regenerate.
             */
            if (charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('whitespaceBeginning')
                && charCode === 32) {
                charCodeRequest.charType = 'whitespace';
            }
        }
        /**
         * Do things at the end of the password.
         */
        if (flags?.end) {
            /**
             * If a whitespace is optional at the end of the password,
             * and the charCode is 32,
             * return the charCode.
             * Else regenerate.
             */
            if (charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('whitespaceEnd')
                && charCode === 32) {
                charCodeRequest.charType = 'whitespace';
            }
        }
    }
    /**
     * If the requested character type is within our character code constraints,
     * preform further checks to determine if it's the correct character code we
     * want.
     * Else throw an error, we can not check for the requested character type.
     */
    const constraint = characterCodeConstraints[charCodeRequest.charType];
    if (!constraint) {
        throw {
            errorKey: errors.nonGenerableCharacterType,
            replacements: [
                'gCC',
                '1',
                charCodeRequest.charType
            ]
        };
    }
    const result = matchCharacterSetConstraint(charCode, constraint);
    if (!result) {
        return generateCharCode(charCodeRequest, flags, cryptoModule);
    }
    return result;
}
