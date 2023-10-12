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
 * Interface that defines an object that contains the optional properties that might be
 * included with a character code request object.
 *
 * @interface charCodeOptions
 * @property {Array<string>} [whitespaceOptions] A list containing the requested
 * white-space options
 * @property {string} [excludeCharacters] A string containing the characters to be
 * excluded from the password.
 */

/**
 * Interface that defines the 'Character Code Request' object that is used by the [Generate Character Code Function]{@link generateCharCode}.
 *
 * @interface charCodeRequest
 * @implements {charCodeOptions}
 * @property {string} charType The requested character code type.
 * @property {charCodeOptions} [charCodeOptions] An object defining a set of options
 * to include with the character code request.
 */

'use strict';

interface charCodeOptions {
    whitespaceOptions?:Array<string>,
    excludeCharacters?:string
}

export default interface charCodeRequest {
    charType:string,
    charCodeOptions?:charCodeOptions,
}
