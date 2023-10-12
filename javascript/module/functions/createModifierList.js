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
export default function createModifierList(modifier, list) {
    // Initialize Array
    const modifiers = [];
    // Filter Keys
    Object.keys(modifier).forEach((key) => {
        if (list.includes(key)) {
            modifiers.push(key);
        }
    });
    // Return Array.
    return modifiers;
}
