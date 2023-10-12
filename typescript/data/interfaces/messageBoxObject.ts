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
 * @interface messageBoxObject
 * @property {string} [title] The title of the message.
 * @property {string | Array<string>} message A message or list of messages to be displayed.
 * @property {string} [type] The type of message to create.
 * @property {string} [level] The level of the message.
 */

'use strict';

export default interface messageBoxObject {
    title?: string
    message: string | Array<string>,
    type?: string,
    level?:string
};
