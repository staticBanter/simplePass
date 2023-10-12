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
 * An interface describing the 'HTML Element' object for the [config object]{@link config}.
 *
 * @interface configHTMLElement
 * @property {string} forms An ID for the form to be initialized. Must contain the '*#*' (hashtag).
 * @property {string} passwordBox An ID for the '*passwordBox*' This box contains all of the other password elements.
 * @property {string} passwordContainer An ID for the passwordContainer. This container is used to position the password (or list of passwords), properly inside of the password box.
 * @property {string} entropyContainer An ID for the entropyContainer (usually a ```span```) to position the entropy value properly inside of a paragraph.
 * @property {string} passwordParagraph An ID for the password text to be put.
 * @property {string} batchPasswordInput An ID for the '*batch password input*' field. Used to create multiple passwords.
 * @property {string} copyButton An ID for the copy button.
 * @property {string} generateButton An ID for the generate button.
 */

'use strict';

export default interface configHTMLElement{
    passwordTarget:string,
    entropyTarget:string
    strengthCheckerStyling?:{
        styleTarget?:string,
        styleType:"inline"|"css"
    }
    actionElements?:{
        generate?:string,
        copy?:string
        form?:string
    }
    passwordContainer?:string,
    // forms: string,
    // passwordBox: string,
    // passwordContainer: string,
    // entropyContainer: string,
    // passwordParagraph: string,
    // batchPasswordInput: string,
    // copyButton: string,
    // generateButton:string,
}
