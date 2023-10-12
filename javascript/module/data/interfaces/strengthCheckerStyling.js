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
 * An interface describing the 'Strength Checker Styling' object.
 *
 * @interface strengthCheckerStyling
 * @property {HTMLElement} styleTarget The HTML element to style.
 * @property {string} styleType The type of styling to use on the target. Either inline or css.
 * If set to inline simplePass will attempt to insert inline style attributes to the given target;
 * If set to css simplePass will attempt to add a class and data attribute to the given target,
 * you may then use custom css to style this however you like.
 */
'use strict';
export {};
