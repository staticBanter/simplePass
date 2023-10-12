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
 * An interface describing the 'Character Code Constraints Attribute' object.
 *
 * @interface characterCodeConstraintsAttributes
 * @property {number} [min] The minimum character code of a character-set.
 * @property {number} [max] The maximum character code of a character-set.
 * @property {Array<Array<number>>} [range] A range of minimum and maximums or single character codes of a character-set.
 */

'use strict';

export default interface characterCodeConstraintsAttributes {
    min:number,
    max?:number,
    range?:Array<Array<number>>,
}
