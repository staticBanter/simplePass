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
 * An interface describing the 'simplePass Configuration' object property of the [config object]{@link config} object.
 *
 * @interface SimplePassConfig
 * @property {PasswordConstraints} passwordConstraints The rules the password must conform to.
 * @property {passwordModifier} passwordModifier The type of password we would like to generate.
 * @property {Messages} messages How the program should handle messages
 * @property {configHTMLElement} elements The HTML elements the program will interact with.
 * @property {strengthCheckTargets | boolean} strengthCheck How the program will handle strength checks.
 * It can either be an object defining the elements to inject the strength stats or a boolean to return a strength checked password.
 */
/**
 * An interface describing the 'Password Constraints' object property of the [config object]{@link config} object.
 *
 * @interface PasswordConstraints
 * @property {number} min_length The minium length a password can be.
 * @property {number} max_length the maximum length a password can be.
 * @property {number} min_excludeCharactersLength The minimum length the 'exclude characters' string attribute can be.
 * @property {number} max_excludeCharactersLength The maximum length the 'exclude characters' string attribute can be.
 * @property {number} min_whitespaceCharactersOffset The offset used to indicate the minimum amount of characters needed to prevent generating passwords that will contain whitespace that would be trimmed out.
 * This offset is used to adjust the ```max_whitespaceBetween``` and ```min_whitespaceBetween``` attributes.
 * @property {function} max_whitespaceBetween The maximum amount of whitespace characters allowed in the middle of a password.
  * It's determined by checking if the ```passwordConstraints.max_length``` minus the ```whitespaceCharactersOffset``` attribute is greater then or equal to one.
 *  If it is we can have at least a maximum of one whitespace character between our password
 * @property {function} min_whitespaceBetween The minimum amount of whitespace characters allowed in the middle of a password.
 * It's determined by checking if the ```passwordConstraints.max_length``` minus the ```whitespaceCharactersOffset``` attribute is greater then or equal to one.
 * If it is we can have at least minimum of one whitespace character between our password
 */
/**
 * An interface describing the 'Messages' object property of the [config object]{@link config} object.
 *
 * @interface Messages
 * @property {string} prefix The program prefix used to denote the program that created the message.
 * @property {string} templateMarker A character that is replaced with specific message information throughout a generic error message template.
 * @property {string} [messageBoard] A DOM Query String for a element that messages can be appended to.
 * @property {string} [messageBoxes] A DOM (Class) Query String that is used to identify message elements created by the application.
 * @property {string} [messageBackdrop] A DOM (Class) Query String that is used to identify the backdrop element created by the application.
 * @property {boolean} [clearConsole] Indicates if console messages should be cleared.
 */
/**
 * An interface describing the 'HTML Element' object property of the [config object]{@link config}.
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
/**
 * Configuration settings for the simplePass password program.
 * These settings can be configured to your needs or your machines capabilities.
 *
 * @property {module:config~PasswordConstraints} passwordConstraints An [object]{@link module:config~PasswordConstraints} defining the constraints the password must conform to.
 * @property {passwordModifier} defaultPasswordModifier An [object]{@link passwordModifier} that defines the default password modifiers.
 * @property {module:config~Messages} messages An [object]{@link module:config~Messages} that defines how simplePass should handle various forms of messages.
 * @property {module:config~configHTMLElement} htmlElements An [object]{@link module:config~configHTMLElement} that defines the HTML elements that simplePass should interact with.
 * @property {Crypto} cryptoModule
 */
const config = {
    passwordConstraints: {
        min_length: 3,
        max_length: 256,
        min_excludeCharactersLength: 0,
        max_excludeCharactersLength: 256,
        min_repeatingCharactersLength: 0,
        max_repeatingCharactersLength: 50,
        max_whitespaceCharactersOffset: 4,
        max_whitespaceBetween: function () {
            const max_possibleWhitespaceCharacters = (this.max_length - this.max_whitespaceCharactersOffset);
            return (max_possibleWhitespaceCharacters >= 1) ? max_possibleWhitespaceCharacters : 0;
        },
        min_whitespaceBetween: function () {
            const min_possibleWhitespaceCharacters = (this.max_length - this.max_whitespaceCharactersOffset);
            return (min_possibleWhitespaceCharacters >= 1) ? 1 : 0;
        },
    },
    defaultPasswordModifier: {
        length: 22,
        lowercase: true,
        uppercase: true,
        numbers: true,
        punctuation: true
    },
    messages: {
        prefix: "ERROR.simplePass-~.~:",
        templateMarker: "~",
        messageBoard: '.simplePass_messageBoard',
        messageBoxes: '.simplePass_messageBox',
        messageBackdrop: '.simplePass_messageBackdrop',
        clearConsole: false,
    },
    elements: {
        passwordTarget: ".simplePass_passwordTarget",
        passwordContainer: ".simplePass_passwordContainer",
        actions: {
            generate: ".simplePass_generator",
            copy: ".simplePass_copier",
            form: "#simplePass_form",
        },
    },
    strengthCheck: {
        entropyTarget: ".simplePass_entropyTarget",
        possibleCombinationsTarget: ".simplePass_possibleCombinationsTarget",
        binaryStringTarget: ".simplePass_binaryStringTarget",
        binaryStringLengthTarget: ".simplePass_binaryStringLengthTarget",
        averageCharacterBitLengthTarget: ".simplePass_averageCharacterBitLengthTarget",
        uniqueCharactersPercentageTarget: ".simplePass_uniqueCharactersPercentageTarget",
        compression: {
            gzipTarget: ".simplePass_gzipCompressionTarget",
            deflateTarget: ".simplePass_deflateCompressionTarget",
            'deflate-rawTarget': ".simplePass_deflate-rawCompressionTarget",
            averageTarget: ".simplePass_averageCompressionTarget"
        }
    }
};
export default config;
