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
 * An interface used to describe the constraints the password was created under. User by the ['Character Strength Check']{@link characterStrengthCheck} function.
 *
 * @interface characterStrengthCheckConstraints
 * @property {number} min_passwordLength The minimum required password length.
 * @property {number} max_passwordLength The maximum allowed password length.
 */

'use strict';

export default interface characterStrengthCheckConstraints{
    min_passwordLength:number,
    max_passwordLength:number
}
