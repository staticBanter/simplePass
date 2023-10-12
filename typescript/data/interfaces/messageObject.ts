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
 * An interface describing the 'Message Object' object.
 *
 * @interface messageObject
 * @property {string} messageKey This can either be the string containing the message or,
 * when used with the `templateMessages` property, an object attribute string index found in an object containing various error messages.
 * @property {string} [title] A title for the message.
 * @property {object} [templateMessages] An object signaling to use a template string message object (such as the [`errors`]{@link errors} object).
 */

'use strict';

export default interface messageObject {
    messageKey: string,
    title?: string,
    templateMessages?: {
        replacements: Array<string>,
        templates: { [index: string]: string; },
    };
}
