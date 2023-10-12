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
 * Interface for an object that represents the 'Character Code Generation Flag' object.
 *
 * @interface charCodeGenerationFlag
 * @property {boolean} [beginning] - Flag that it's the beginning of the password.
 * @property {boolean} [end] - Flag that it's the end of the password.
 */

'use strict';

export default interface charCodeGenerationFlag{
    beginning?:boolean,
    end?:boolean,
}
