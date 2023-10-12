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
 * @module range
 */
/**
 * Returns a list of numbers within a given start and end point.
 * @function range
 * @example <caption>Example usage of the 'range' function</caption>
 * // returns [1,2,3,4,5,6,7,8,9,10]
 * console.log(range(1,10));
 * @param {number} start The number to start the list with
 * @param {number} end The number to end the list with
 * @param {number} [increment = 1] The amount added to the start to increase the list
 * @param {boolean} [singles = false] If true, will return a list containing arrays of individual numbers.
 * @example <caption>Example usage of the 'range' function with custom increment</caption>
 * // returns [1,3,5,7,9,10]
 * console.log(range(1,10,2));
 * @param {Array<number>} [exclude] A list of numbers that should not be in the range
 * @example <caption>Example usage of the 'range' function with excluded numbers</caption>
 * // returns [1,3,4,5,6,9,10]
 * console.log(range(1,10,1,[2,7,8]))
 * @returns {Array<number>} A list of numbers within the start and end values
 */
export default function range(start, end, increment = 1, exclude, singles = false) {
    const range = [];
    end = (end + 1); // Final number inclusion
    while (start < end) {
        if (!exclude?.includes(start)) {
            if (singles) {
                range.push([start]);
            }
            else {
                range.push(start);
            }
        }
        // If we are over the end, set the final number to our end.
        (start + increment) > end ?
            start = end :
            start += increment;
    }
    return range;
}
