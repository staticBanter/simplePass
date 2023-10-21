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
 * @file
 * @module config
 */

/**
 * An interface defining a Passwords Constraint object.
 *
 * @interface PasswordConstraints
 * @property {number} min_length The minimum length of the password.
 * @property {number} max_length The maximum length of the password.
 * @property {number} min_excludeCharactersLength The minimum length the ```[passwordModifier.excludeCharacters]{@link module:passwordModifier}``` string attribute can be.
 * @property {number} max_excludeCharactersLength The maximum length the ```[passwordModifier.excludeCharacters]{@link module:passwordModifier}``` string attribute can be.
 * @property {number} whitespaceCharactersOffset Offsets the maximum amount of possible whitespace characters.
 * This attribute is designed to prevent passwords that contain only whitespace characters (these are very likely to be not accepted as a valid passwords for a majority of the Internet).
 * This offset is used to adjust the ```max_whitespaceBetween``` and ```min_whitespaceBetween``` attributes.
 * @property {function} max_whitespaceBetween The maximum amount of whitespace allowed in a password.
 * It's determined by checking if the ```passwordConstraints.max_length``` minus the ```whitespaceCharactersOffset``` attribute is greater then or equal to one.
 * If it is we can have at least a maximum of one whitespace character between our password
 * @property {function} min_whitespaceBetween The minimum amount of whitespace allowed in a password.
 * It's determined by checking if the ```passwordConstraints.max_length``` minus the ```whitespaceCharactersOffset``` attribute is greater then or equal to one.
 * If it is we can have at least minimum of one whitespace character between our password
 */

/**
 * An interface defining a Messages object
 *
 * @interface Messages
 * @property {string} prefix The Program Message Prefix. Can be used to denote what programs have sent the message.
 * @property {string} templateMarker A character used to mark where in a template message strings can be replaced.
 * @property {string} [messageBoard] A DOM Query String for a HTML Element that can be used to attach messages to.
 * @property {boolean} [clearConsole] A boolean to instruct previous console messages to be cleared.
 */

'use strict';

import passwordModifier from "./data/interfaces/passwordModifier.js";
import configHTMLElement from "./data/interfaces/configHTMLElements.js";

interface Messages {
    prefix: string,
    templateMarker:string
    messageBoard?:string,
    messageBoxes?:string,
    messageBackdrop?:string,
    clearConsole?:boolean,
}

interface PasswordConstraints {
    min_length: number,
    max_length: number,
    min_excludeCharactersLength: number,
    max_excludeCharactersLength: number,
    max_whitespaceCharactersOffset: number,
    max_whitespaceBetween: (() => number),
    min_whitespaceBetween: (() => number),
}

/**
 * Configuration settings for the simplePass password program.
 * These settings can be configured to your needs or your machines capabilities.
 *
 * @property {PasswordConstraints} passwordConstraints An object defining the constraints the password must conform to.
 * @property {passwordModifier} defaultPasswordModifier A [Password Modifier object]{@link module:passwordModifier} that defines the default password modifiers.
 * @property {Messages} messages A [Messages object]{@link config.Messages} that defines how simplePass should handle various forms of messages.
 * @property {configHTMLElement} htmlElements A [HTML Configuration object]{@link module:configHTMLElement} that defines the HTML elements that simplePass should interact with.
 */
const config: {
    [index: string]:any;

    passwordConstraints:PasswordConstraints,
    defaultPasswordModifier: passwordModifier;
    messages:Messages,
    htmlElements: configHTMLElement
} = {
    passwordConstraints:{
        min_length:3,
        max_length:256,
        min_excludeCharactersLength:0,
        max_excludeCharactersLength:10,
        max_whitespaceCharactersOffset:4,
        max_whitespaceBetween:function():number{
            const max_possibleWhitespaceCharacters = (this.max_length - this.max_whitespaceCharactersOffset);
            return (max_possibleWhitespaceCharacters >= 1) ? max_possibleWhitespaceCharacters : 0
        },
        min_whitespaceBetween:function():number{
            const min_possibleWhitespaceCharacters = (this.max_length - this.max_whitespaceCharactersOffset);
            return (min_possibleWhitespaceCharacters >= 1) ? 1 : 0
        },
    },
    defaultPasswordModifier:{
        length:22,
        lowercase:true,
        uppercase:true,
        numbers:true,
        punctuation:true
    },
    messages: {
        prefix: "ERROR.simplePass-~.~:",
        templateMarker: "~",
        messageBoard:'.simplePass_messageBoard',
        messageBoxes:'.simplePass_messageBox',
        messageBackdrop:'.simplePass_messageBackdrop',
        clearConsole:false,
    },
    htmlElements:{
        passwordTarget:".simplePass_passwordTarget",
        entropyTarget:".simplePass_entropyTarget",
        strengthCheckerStyling:{
            styleType:"inline",
        },
        actionElements:{
            generate:".simplePass_generator",
            copy:".simplePass_copier",
            form:"#simplePass_form"
        },
        passwordContainer:".simplePass_passwordContainer"
    }
};

export default config;
