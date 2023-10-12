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
 * Interface object that represents the 'Ensure Repeating Characters Option' object used by the [Ensure Repeating Characters Function]{@link module:ensureRepeatingCharacters}.
 *
 * @interface ensureRepeatingCharacterOptions
 * @property {number} [repeatingSetCount] A number defining the amount of pre-generated characters to repeat.
 * @property {string|Array<Array<string>>} [customCharacterSet] A string input containing characters that should be repeated in the password.
 * This attribute can be formatted in three ways:
 *  1. A standard string input (abc); where each character will be repeated 2 times.
 *  2. A (standalone) custom repeating set (a:4); requesting "a" to be repeated 4 times.
 *  3. A custom repeating set (a b:1 c:3 \::4 3f:10);
 *      * requesting "a" to be repeated 2 times,
 *      * repeats of "1" are converted to 2, so "b" gets repeated 2 times,
 *      * requesting "c" to be repeated 3 times,
 *      * literal characters such as ":" (colon) and "\" (forward-slash) can be prefixed with a "\" (forward-slash),
 *      * only the first character in a repeating set will be used, so "3" will be repeated 10 times.
 * @property {repeatingCharacterOptionsPreservations} [preservations] An object that defines if the beginning and end characters of the
 * returned password should be preserved. If not set the positions of these characters will be lost.
 */
/**
 * Interface object that represents the 'Ensure Repeating Characters Options Preservations' object.
 *
 * @interface repeatingCharacterOptionsPreservations
 * @property {boolean} [beginning] - The first character in the string must retain it's position.
 * @property {boolean} [end] - The last character in the string must retain it's position.
 *
 */
'use strict';
