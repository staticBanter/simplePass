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
import characterCodeConstraints from "../data/objects/characterCodeConstraints.js";
import whitespaceAttributes from "../data/lists/whitespaceAttributes.js";
import useableAttributes from "../data/lists/useableAttributes.js";
/**
 * @file
 * @module calculateMaxPossibleCharacters
 */
/**
 * Calculates the maximum amount of possible characters that can be used within a given character-set.
 *
 * @function calculateMaxPossibleCharacters
 * @param {characterSetObject} characterSetObject An [object]{@link module:characterSetObject} describing the usable characters and character-sets.
 * @requires characterCodeConstraints
 * @implements {characterCodeConstraintsAttributes}
 * @requires whitespaceAttributes
 * @requires useableAttributes
 * @returns {number} The number of usable characters minus any exclusions.
 */
export default function calculateMaxPossibleCharacters(characterSetObject) {
    let maxPossibleCharacters = 0;
    let whiteSpaceFlag = false;
    characterSetObject.characterSets.forEach((set) => {
        if (useableAttributes.includes(set)) {
            if (whitespaceAttributes.includes(set)) {
                // Only count whitespace once.
                if (!whiteSpaceFlag) {
                    set = 'whitespace';
                    whiteSpaceFlag = true;
                }
                else {
                    set = '';
                }
            }
            const constraint = characterCodeConstraints[set];
            if (constraint) {
                if (constraint.range) {
                    constraint.range.forEach((range) => {
                        if (range[0]
                            && range[1]) {
                            maxPossibleCharacters += (range[1] - range[0]);
                        }
                        else if (range[0]) {
                            maxPossibleCharacters++;
                        }
                    });
                }
                else if (constraint.min
                    && constraint.max) {
                    maxPossibleCharacters += (constraint.max - constraint.min);
                }
            }
        }
    });
    if (characterSetObject.excludeCharacters
        && characterSetObject.excludeCharacters.length > 0) {
        maxPossibleCharacters -= characterSetObject.excludeCharacters.length;
    }
    return maxPossibleCharacters;
}
