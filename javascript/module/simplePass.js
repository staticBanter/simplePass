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
'use strict';
import cleanModifier from "./functions/cleanModifier.js";
import validateModifier from "./functions/validateModifier.js";
import config from "./simplePass.config.js";
import whitespaceAttributes from "./data/lists/whitespaceAttributes.js";
import shuffle from "./functions/shuffle.js";
import generateCharCode from "./functions/generateCharCode.js";
import errors from "./data/objects/errors.js";
import ensureRepeatingCharacters from "./functions/ensureRepeatingCharacters.js";
import strengthChecker from "./functions/strengthChecker.js";
import useableAttributes from "./data/lists/useableAttributes.js";
import passwordPreConfigs from "./data/objects/passwordPreConfigs.js";
import messageHandler from "./functions/messageHandler.js";
import initializer from "./functions/initializer.js";
import characterCodeConstraints from "./data/objects/characterCodeConstraints.js";
/**
 * @file
 * @module simplePass
 */
/**
 * Main program function. Can return a password string or an [object]{@link strengthCheckedPassword} describing a strength checked password.
 *
 * @function simplePass
 * @param {passwordModifier | FormData} [modifier] The available [password modifiers]{@link module:passwordModifier} that can be used to create the password. Defaults to *[config.defaultPasswordModifier]{@link module:config}*.
 * @param {boolean | strengthCheckerStyling} [strengthCheck] An optional boolean or [Strength Checker Styling Object]{@link module:strengthCheckerStyling} instructing simplePass if and how to style the password as well as include an Entropy Score.
 * @requires config
 * @requires errors
 * @requires cleanModifier
 * @requires validateModifier
 * @requires whitespaceAttributes
 * @requires generateCharCode
 * @requires ensureRepeatingCharacters
 * @requires shuffle
 * @requires useableAttributes
 * @requires strengthChecker
 * @requires passwordPreConfigs
 * @requires messageHandler
 * @throws {errors.invalidModifier} Will throw an Error if the [modifier]{@link passwordModifier} is ```null```, ```undefined``` or not a JavaScript Object.
 * @returns {string | strengthCheckedPassword} The generated password or strength checked password object.
 */
export default function simplePass(modifier = config.defaultPasswordModifier, strengthCheck, cFig = config) {
    let messageBoard = null;
    if (cFig.messages
        && cFig.messages.messageBoard) {
        messageBoard = document.body.querySelector(cFig.messages.messageBoard);
    }
    messageHandler('CLEAR', {
        htmlMessage: (messageBoard ? {
            messageBoard: messageBoard,
            clear: true,
        } : undefined),
        consoleMessage: {
            clear: cFig.messages?.clearConsole,
        },
        level: "CLEAR"
    }, cFig);
    /**
     * If the modifier is not an object
     * throw an error.
     */
    if (!modifier
        || typeof modifier !== 'object') {
        messageHandler({
            messageKey: 'invalidModifier',
            templateMessages: {
                replacements: [
                    'M',
                    '1'
                ],
                templates: errors
            }
        }, {
            htmlMessage: (messageBoard ? {
                messageBoard: messageBoard,
            } :
                undefined),
            consoleMessage: true,
            level: "ERROR",
        }, cFig);
    }
    // Initialize the password.
    let password = '';
    let middleCharacters = '';
    // Initialize preserve beginning and end character flags.
    let preserveBeginning = false;
    let preserveEnd = false;
    // Remove unneeded object attributes and normalize formData objects.
    modifier = cleanModifier(modifier);
    // Ensure certain values are set and set properly.
    try {
        validateModifier(modifier, cFig);
    }
    catch (caught) {
        messageHandler({
            messageKey: caught.errorKey,
            templateMessages: {
                replacements: caught.replacements,
                templates: errors,
            }
        }, {
            htmlMessage: (messageBoard ? {
                messageBoard: messageBoard
            } :
                undefined),
            consoleMessage: true,
            level: "ERROR",
        }, cFig);
    }
    if (modifier.preConfig) {
        const preConfig = passwordPreConfigs[modifier.preConfig];
        modifier = {
            length: modifier.length
        };
        if (preConfig) {
            Object.assign(modifier, preConfig);
        }
    }
    // Get the attributes that can affect the character type
    const characterAttributes = Object.keys(modifier).filter((item) => {
        return Object.keys(characterCodeConstraints).includes(item);
    });
    // Get the attributes that can set whitespace
    const setWhitespaceAttributes = Object.keys(modifier).filter((item) => {
        return whitespaceAttributes.includes(item);
    });
    /**
     * Because we manually add the first and last character
     * we need to changed the password length limit.
     */
    let passwordLimit = (modifier.length - 2);
    /**
     * Prevent ```uniqueCharacters``` begin set
     * with modifiers that conflict with it.
     */
    if (modifier.uniqueCharacters
        && (modifier.repeatingCharacter
            || modifier.whitespaceBeginning
            || modifier.whitespaceEnd
            || modifier.whitespaceEnd
            || modifier.required_whitespaceEnd
            || modifier.required_whitespaceBeginning
            || modifier.max_whitespaceBetween
            || modifier.preConfig)) {
        messageHandler(`ERROR.simplePass-M_E.2: Unique modifier was set with clashing modifiers.`);
    }
    /**
     * If the repeating characters attribute is set we need to generate less characters.
     */
    if (modifier.repeatingCharacter) {
        if (modifier.customRepeatingCharacters) {
            if (typeof (modifier.customRepeatingCharacters) !== 'string') {
                modifier.customRepeatingCharacters.forEach((set) => {
                    passwordLimit -= parseInt(set[1]);
                });
            }
            else {
                passwordLimit -= (modifier.customRepeatingCharacters.length * 2);
            }
        }
        else if (modifier.max_repeatingCharacter) {
            passwordLimit -= modifier.max_repeatingCharacter;
        }
        else {
            passwordLimit--;
        }
    }
    /**
     * If the whitespace between attribute is set,
     * we need to lower the password limit
     * to make room for the whitespace.
     */
    if (modifier.whitespaceBetween
        && modifier.max_whitespaceBetween) {
        if ((modifier.length - modifier.max_whitespaceBetween) < characterAttributes.length) {
            messageHandler({
                messageKey: 'ERROR: The password length can not contain the selected amount of characters',
            }, {
                htmlMessage: (messageBoard ? {
                    messageBoard: messageBoard,
                } :
                    undefined),
                consoleMessage: true,
                level: "ERROR",
            }, cFig);
        }
        passwordLimit = passwordLimit - modifier.max_whitespaceBetween;
    }
    /**
     * If the password limit drops below zero the password will not be able to contain all the characters.
     */
    if (passwordLimit <= -1) {
        messageHandler({
            messageKey: 'ERROR: The password length can not contain the selected amount of characters',
        }, {
            htmlMessage: (messageBoard ? {
                messageBoard: messageBoard,
            } :
                undefined),
            consoleMessage: true,
            level: "ERROR",
        }, cFig);
    }
    /**
     * If our character attributes list is greater than one,
     * we need to use `.pop()` and therefore need to do more work,
     * like ensuring the attribute list is replenished.
     * Where if there is only one item we can just reference that.
     */
    if (characterAttributes.length > 1) {
        /**
         * Because we may need through the attributes a few times
         * we don't want to modify the original list.
         * Therefore we create a new list.
         * Because we don't want this list to just be a pointer
         * to the old list we need to initialize it and contact
         * the old list to it.
         */
        let deck = [];
        deck = deck.concat(shuffle(characterAttributes));
        let currentCharType = '';
        /**
         * Set the first character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.whitespaceBeginning
            && modifier.required_whitespaceBeginning) {
            password += ' ';
            preserveBeginning = true;
        }
        else {
            currentCharType = deck.pop();
            if (currentCharType) {
                try {
                    password += String.fromCharCode(generateCharCode({
                        charType: currentCharType,
                        charCodeOptions: {
                            whitespaceOptions: setWhitespaceAttributes,
                            excludeCharacters: modifier.excludeCharacters
                        }
                    }, { beginning: true }));
                }
                catch (caught) {
                    messageHandler({
                        messageKey: caught.errorKey,
                        templateMessages: {
                            replacements: caught.replacements,
                            templates: errors,
                        }
                    }, {
                        htmlMessage: (messageBoard ? {
                            messageBoard: messageBoard,
                        } :
                            undefined),
                        consoleMessage: true,
                        level: "ERROR",
                    }, cFig);
                }
            }
        }
        /**
         * Set the middle characters for the password.
         */
        while (middleCharacters.length < passwordLimit) {
            currentCharType = deck.pop();
            /**
             * If the current character type is undefined,
             * and the deck length is 0,
             * replenish the deck.
             */
            if (!currentCharType
                && deck.length <= 0) {
                deck = deck.concat(shuffle(characterAttributes));
                currentCharType = deck.pop();
            }
            if (currentCharType) {
                try {
                    const generatedCharacter = String.fromCharCode(generateCharCode({
                        charType: currentCharType,
                        charCodeOptions: {
                            whitespaceOptions: setWhitespaceAttributes,
                            excludeCharacters: modifier.excludeCharacters
                        }
                    }));
                    if (modifier.uniqueCharacters) {
                        if (password.includes(generatedCharacter)
                            || middleCharacters.includes(generatedCharacter)) {
                            continue;
                        }
                    }
                    ;
                    middleCharacters += generatedCharacter;
                }
                catch (caught) {
                    messageHandler({
                        messageKey: caught.errorKey,
                        templateMessages: {
                            replacements: caught.replacements,
                            templates: errors,
                        }
                    }, {
                        htmlMessage: (messageBoard ? {
                            messageBoard: messageBoard
                        } :
                            undefined),
                        consoleMessage: true,
                        level: "ERROR",
                    }, cFig);
                }
            }
        }
        // Add any needed whitespace characters.
        if (modifier.whitespaceBetween
            && modifier.max_whitespaceBetween) {
            for (let i = 0; i < modifier.max_whitespaceBetween; i++) {
                middleCharacters += " ";
            }
        }
        // Add the middle characters
        password += shuffle(middleCharacters.split('')).join('');
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.whitespaceEnd
            && modifier.required_whitespaceEnd) {
            password += ' ';
            preserveEnd = true;
        }
        else {
            /**
             * If the current character type is undefined,
             * and the deck length is 0,
             * replenish the deck.
             * We need to do this here because the loop
             * could have ended it on empty.
             */
            if (deck.length <= 0
                || !currentCharType) {
                deck = deck.concat(shuffle(characterAttributes));
            }
            currentCharType = deck.pop();
            if (currentCharType) {
                try {
                    let generatedCharacter = String.fromCharCode(generateCharCode({
                        charType: currentCharType,
                        charCodeOptions: {
                            whitespaceOptions: setWhitespaceAttributes,
                            excludeCharacters: modifier.excludeCharacters
                        }
                    }, { end: true }));
                    if (modifier.uniqueCharacters) {
                        if (password.includes(generatedCharacter)) {
                            while (password.includes(generatedCharacter)) {
                                generatedCharacter = String.fromCharCode(generateCharCode({
                                    charType: currentCharType,
                                    charCodeOptions: {
                                        whitespaceOptions: setWhitespaceAttributes,
                                        excludeCharacters: modifier.excludeCharacters
                                    }
                                }, { end: true }));
                            }
                        }
                    }
                    password += generatedCharacter;
                }
                catch (caught) {
                    messageHandler({
                        messageKey: caught.errorKey,
                        templateMessages: {
                            replacements: caught.replacements,
                            templates: errors,
                        }
                    }, {
                        htmlMessage: (messageBoard ? {
                            messageBoard: messageBoard
                        } :
                            undefined),
                        consoleMessage: true,
                        level: "ERROR",
                    }, cFig);
                }
            }
        }
        // Check if we need to repeat any characters.
        if (modifier.repeatingCharacter) {
            // Recreate the password
            password = ensureRepeatingCharacters(password, {
                repeatingSetCount: modifier.max_repeatingCharacter,
                customCharacterSet: modifier.customRepeatingCharacters,
                preservations: {
                    beginning: preserveBeginning,
                    end: preserveEnd
                }
            });
            /**
             * The *ensureRepeatingCharacters* function may remove some characters from
             * the original password.
             * We will check if the password length is less than our requested length
             * and add new characters if it is.
             *
             * Because *ensureRepeatingCharacters* function only removes repeating
             * characters from the original password, we should be OK to add any
             * new characters from the request as we like.
             */
            if (password.length < modifier.length) {
                // Split the sting into pieces
                let stringBeginning = password.slice(0, 1);
                let stringMiddle = password.slice(1, password.length - 1);
                let stringEnd = password.slice(password.length - 1, password.length);
                // Add new characters to the middle of the string  the way we usually do.
                while (stringMiddle.length < (modifier.length - 2)) {
                    /**
                     * Check and reinitialize deck.
                     */
                    if (deck.length <= 0
                        || !currentCharType) {
                        deck = deck.concat(shuffle(characterAttributes));
                    }
                    // Get current character
                    currentCharType = deck.pop();
                    /**
                     * Add current character to string middle.
                     * If we can repeat this character we will.
                     */
                    if (currentCharType) {
                        try {
                            const currentCharacter = String.fromCharCode(generateCharCode({
                                charType: currentCharType,
                                charCodeOptions: {
                                    whitespaceOptions: setWhitespaceAttributes,
                                    excludeCharacters: modifier.excludeCharacters
                                }
                            }));
                            stringMiddle += currentCharacter;
                            // Repeat character if possible.
                            if ((stringMiddle.length + 1) <= (modifier.length - 2)) {
                                stringMiddle += currentCharacter;
                            }
                        }
                        catch (caught) {
                            messageHandler({
                                messageKey: caught.errorKey,
                                templateMessages: {
                                    replacements: caught.replacements,
                                    templates: errors,
                                }
                            }, {
                                htmlMessage: (messageBoard ? {
                                    messageBoard: messageBoard
                                } :
                                    undefined),
                                consoleMessage: true,
                                level: "ERROR",
                            }, cFig);
                        }
                    }
                }
                // Recreate our password.
                password = stringBeginning + shuffle(stringMiddle.split('')).join('') + stringEnd;
            }
        }
    }
    else {
        // ^ Our character attributes list only contained one item.
        /**
         * Set the first character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.whitespaceBeginning
            && modifier.required_whitespaceBeginning) {
            password += ' ';
            preserveBeginning = true;
        }
        else {
            try {
                password += String.fromCharCode(generateCharCode({
                    charType: characterAttributes[0],
                    charCodeOptions: {
                        whitespaceOptions: setWhitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }, { beginning: true }));
            }
            catch (caught) {
                messageHandler({
                    messageKey: caught.errorKey,
                    templateMessages: {
                        replacements: caught.replacements,
                        templates: errors,
                    }
                }, {
                    htmlMessage: (messageBoard ? {
                        messageBoard: messageBoard
                    } :
                        undefined),
                    consoleMessage: true,
                    level: "ERROR",
                }, cFig);
            }
        }
        /**
         * Set the middle characters for the password.
         */
        while (middleCharacters.length < passwordLimit) {
            try {
                const generatedCharacter = String.fromCharCode(generateCharCode({
                    charType: characterAttributes[0],
                    charCodeOptions: {
                        whitespaceOptions: setWhitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }));
                if (modifier.uniqueCharacters) {
                    if (password.includes(generatedCharacter)
                        || middleCharacters.includes(generatedCharacter)) {
                        continue;
                    }
                }
                middleCharacters += generatedCharacter;
            }
            catch (caught) {
                messageHandler({
                    messageKey: caught.errorKey,
                    templateMessages: {
                        replacements: caught.replacements,
                        templates: errors,
                    }
                }, {
                    htmlMessage: (messageBoard ? {
                        messageBoard: messageBoard
                    } :
                        undefined),
                    consoleMessage: true,
                    level: "ERROR",
                }, cFig);
            }
        }
        // Add any needed whitespace characters.
        if (modifier.whitespaceBetween
            && modifier.max_whitespaceBetween) {
            for (let i = 0; i < modifier.max_whitespaceBetween; i++) {
                middleCharacters += " ";
            }
        }
        // Add middle characters to password
        password += shuffle(middleCharacters.split('')).join('');
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.whitespaceEnd
            && modifier.required_whitespaceEnd) {
            password += ' ';
            preserveEnd = true;
        }
        else {
            try {
                let generatedCharacter = String.fromCharCode(generateCharCode({
                    charType: characterAttributes[0],
                    charCodeOptions: {
                        whitespaceOptions: setWhitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }, { end: true }));
                if (modifier.uniqueCharacters) {
                    if (password.includes(generatedCharacter)) {
                        while (password.includes(generatedCharacter)) {
                            generatedCharacter = String.fromCharCode(generateCharCode({
                                charType: characterAttributes[0],
                                charCodeOptions: {
                                    whitespaceOptions: setWhitespaceAttributes,
                                    excludeCharacters: modifier.excludeCharacters
                                }
                            }, { end: true }));
                        }
                    }
                }
                password += generatedCharacter;
            }
            catch (caught) {
                messageHandler({
                    messageKey: caught.errorKey,
                    templateMessages: {
                        replacements: caught.replacements,
                        templates: errors,
                    }
                }, {
                    htmlMessage: (messageBoard ? {
                        messageBoard: messageBoard
                    } :
                        undefined),
                    consoleMessage: true,
                    level: "ERROR",
                }, cFig);
            }
        }
        // Check if we need to repeat any characters.
        if (modifier.repeatingCharacter) {
            // Recreate the password
            password = ensureRepeatingCharacters(password, {
                repeatingSetCount: modifier.max_repeatingCharacter,
                customCharacterSet: modifier.customRepeatingCharacters,
                preservations: {
                    beginning: preserveBeginning,
                    end: preserveEnd
                }
            });
            /**
             * The *ensureRepeatingCharacters* function may remove some characters from
             * the original password.
             * We will check if the password length is less than our requested length
             * and add new characters if it is.
             *
             * Because *ensureRepeatingCharacters* function only removes repeating
             * characters from the original password, we should be OK to add any
             * new characters from the request as we like.
             */
            if (password.length < modifier.length) {
                // Split the sting into pieces
                let stringBeginning = password.slice(0, 1);
                let stringMiddle = password.slice(1, password.length - 1);
                let stringEnd = password.slice(password.length - 1, password.length);
                // Add new characters to the middle of the string  the way we usually do.
                while (stringMiddle.length < (modifier.length - 2)) {
                    try {
                        const currentCharacter = String.fromCharCode(generateCharCode({
                            charType: characterAttributes[0],
                            charCodeOptions: {
                                whitespaceOptions: setWhitespaceAttributes,
                                excludeCharacters: modifier.excludeCharacters
                            }
                        }));
                        stringMiddle += currentCharacter;
                        // If we can repeat this character we shall.
                        if ((stringMiddle.length + 1) <= (modifier.length - 2)) {
                            stringMiddle += currentCharacter;
                        }
                    }
                    catch (caught) {
                        messageHandler({
                            messageKey: caught.errorKey,
                            templateMessages: {
                                replacements: caught.replacements,
                                templates: errors,
                            }
                        }, {
                            htmlMessage: (messageBoard ? {
                                messageBoard: messageBoard,
                            } :
                                undefined),
                            consoleMessage: true,
                            level: "ERROR",
                        }, cFig);
                    }
                }
                // Recreate our password.
                password = stringBeginning + shuffle(stringMiddle.split('')).join('') + stringEnd;
            }
        }
    }
    if (strengthCheck) {
        if (typeof (strengthCheck) !== 'boolean'
            && strengthCheck.styleTarget
            && strengthCheck.styleType) {
            return strengthChecker(password, {
                characterSets: {
                    used: Object.keys(modifier),
                    available: useableAttributes
                },
                excludeCharacters: modifier.excludeCharacters,
                min_length: cFig.passwordConstraints.min_length,
                max_length: cFig.passwordConstraints.max_length
            }, {
                styleTarget: strengthCheck.styleTarget,
                styleType: strengthCheck.styleType
            });
        }
        return strengthChecker(password, {
            characterSets: {
                used: Object.keys(modifier),
                available: useableAttributes
            },
            excludeCharacters: modifier.excludeCharacters,
            min_length: cFig.passwordConstraints.min_length,
            max_length: cFig.passwordConstraints.max_length
        });
    }
    // Return the password.
    return password;
}
simplePass.init = initializer;
