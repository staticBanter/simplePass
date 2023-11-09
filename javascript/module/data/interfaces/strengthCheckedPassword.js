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
/**
 * An interface describing the 'Strength Checked Password' object.
 *
 * @interface strengthCheckedPassword
 * @property {string} password The strength checked password.
 * @property {number} entropy The bit entropy of the password.
 * @property {possibleCombinations} number The number of possible combinations that can be created from the selected character sets and password length.
 * @property {binaryStringLength} number The length of the password as a binary string.
 * @property {binaryString} string The password represented in binary.
 * @property {averageCharacterByteLength} number The average length of a character in bits.
 * @property {uniqueCharactersPercentage} number The percentage of unique characters in the password.
 */
'use strict';
export {};
