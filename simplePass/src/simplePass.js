'use strict';
import cleanModifier from "./helpers/cleanModifier.helper.js";
import validateModifier from "./helpers/validateModifier.helper.js";
import config from "./config.simplePass.js";
import L_requiredAttributes from "./data/lists/requiredAttributes.list.js";
import L_whitespaceAttributes from "./data/lists/whitespaceAttributes.list.js";
import shuffle from "./helpers/shuffle.helper.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import createMessage from "./helpers/createMessage.helper.js";
import E_errors from "./data/enums/errors.enum.js";
import ensureRepeatingCharacters from "./helpers/ensureRepeatingCharacters.helper.js";
/**
 * @file Main file for simplePass.
 * @module simplePass
 */
/**
 * Main program function. Returns a string.
 *
 * @function simplePass
 * @param {I_passwordModifier | FormData} modifier The available password modifications. See README.md for more information about modifiers.
 * @requires config
 * @requires E_errors
 * @requires createMessage
 * @requires cleanModifier
 * @requires validateModifier
 * @requires L_requiredAttributes
 * @requires L_whitespaceAttributes
 * @requires generateCharCode
 * @requires ensureRepeatingCharacters
 * @requires shuffle
 * @throws {E_errors.invalidModifier} Will throw an Error if the [modifier]{@link I_passwordModifier} is ```null```, ```undefined``` or not a JavaScript Object.
 * @returns {string} The generated password.
 */
export default function simplePass(modifier = {
    length: config.defaultPasswordLength,
    lowercase: true,
}) {
    /**
     * If the modifier is not an object
     * throw an error.
     */
    if (!modifier
        || typeof modifier !== 'object') {
        throw new Error(createMessage(E_errors.invalidModifier, [config.errorMessagePrefix, 'M', '1']));
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
    validateModifier(modifier);
    // Get the attributes that can affect the character type
    const characterAttributes = Object.keys(modifier).filter((item) => {
        return L_requiredAttributes.includes(item);
    });
    // Get the attributes that can set whitespace
    const whitespaceAttributes = Object.keys(modifier).filter((item) => {
        return L_whitespaceAttributes.includes(item);
    });
    /**
     * Because we manually add the first and last character
     * we need to changed the password length limit.
     */
    let passwordLimit = (modifier.length - 2);
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
        else if (modifier.repeatingCharacter_limit) {
            passwordLimit -= modifier.repeatingCharacter_limit;
        }
        else {
            passwordLimit--;
        }
    }
    /**
     * If the password limit drops below zero the password will not be able to contain all the characters.
     */
    if (passwordLimit <= (-1)) {
        throw new Error('The password length can not contain the selected amount of characters');
    }
    /**
     * If the whitespace between attribute is set,
     * we need to lower the password limit
     * to make room for the whitespace.
     */
    if (modifier.w_between
        && modifier.w_between_limit) {
        passwordLimit = passwordLimit - modifier.w_between_limit;
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
        if (modifier.w_beginning
            && modifier.w_beginning_required) {
            password += ' ';
            preserveBeginning = true;
        }
        else {
            currentCharType = deck.pop();
            if (currentCharType) {
                password += String.fromCharCode(generateCharCode({
                    charType: currentCharType,
                    charCodeOptions: {
                        whitespaceOptions: whitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }, { beginning: true }));
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
                middleCharacters += String.fromCharCode(generateCharCode({
                    charType: currentCharType,
                    charCodeOptions: {
                        whitespaceOptions: whitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }));
            }
        }
        // Add any needed whitespace characters.
        if (modifier.w_between
            && modifier.w_between_limit) {
            while (modifier.w_between_limit--) {
                middleCharacters += " ";
            }
        }
        // Add the middle characters
        password += shuffle(middleCharacters.split('')).join('');
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.w_end
            && modifier.w_end_required) {
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
                && !currentCharType) {
                deck = deck.concat(shuffle(characterAttributes));
            }
            currentCharType = deck.pop();
            if (currentCharType) {
                password += String.fromCharCode(generateCharCode({
                    charType: currentCharType,
                    charCodeOptions: {
                        whitespaceOptions: whitespaceAttributes,
                        excludeCharacters: modifier.excludeCharacters
                    }
                }, { end: true }));
            }
        }
        // Check if we need to repeat any characters.
        if (modifier.repeatingCharacter) {
            // Recreate the password
            password = ensureRepeatingCharacters(password, {
                repeatingSetCount: modifier.repeatingCharacter_limit,
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
                        const currentCharacter = String.fromCharCode(generateCharCode({
                            charType: currentCharType,
                            charCodeOptions: {
                                whitespaceOptions: whitespaceAttributes,
                                excludeCharacters: modifier.excludeCharacters
                            }
                        }));
                        stringMiddle += currentCharacter;
                        // Repeat character if possible.
                        if ((stringMiddle.length + 1) <= (modifier.length - 2)) {
                            stringMiddle += currentCharacter;
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
        if (modifier.w_beginning
            && modifier.w_beginning_required) {
            password += ' ';
            preserveBeginning = true;
        }
        else {
            password += String.fromCharCode(generateCharCode({
                charType: characterAttributes[0],
                charCodeOptions: {
                    whitespaceOptions: whitespaceAttributes,
                    excludeCharacters: modifier.excludeCharacters
                }
            }, { beginning: true }));
        }
        /**
         * Set the middle characters for the password.
         */
        while (middleCharacters.length < passwordLimit) {
            middleCharacters += String.fromCharCode(generateCharCode({
                charType: characterAttributes[0],
                charCodeOptions: {
                    whitespaceOptions: whitespaceAttributes,
                    excludeCharacters: modifier.excludeCharacters
                }
            }));
        }
        // Add any needed whitespace characters.
        if (modifier.w_between
            && modifier.w_between_limit) {
            while (modifier.w_between_limit--) {
                middleCharacters += " ";
            }
        }
        // Add middle characters to password
        password += shuffle(middleCharacters.split('')).join('');
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.w_end
            && modifier.w_end_required) {
            password += ' ';
            preserveEnd = true;
        }
        else {
            password += String.fromCharCode(generateCharCode({
                charType: characterAttributes[0],
                charCodeOptions: {
                    whitespaceOptions: whitespaceAttributes,
                    excludeCharacters: modifier.excludeCharacters
                }
            }, { end: true }));
        }
        // Check if we need to repeat any characters.
        if (modifier.repeatingCharacter) {
            // Recreate the password
            password = ensureRepeatingCharacters(password, {
                repeatingSetCount: modifier.repeatingCharacter_limit,
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
                    const currentCharacter = String.fromCharCode(generateCharCode({
                        charType: characterAttributes[0],
                        charCodeOptions: {
                            whitespaceOptions: whitespaceAttributes,
                            excludeCharacters: modifier.excludeCharacters
                        }
                    }));
                    stringMiddle += currentCharacter;
                    // If we can repeat this character we shall.
                    if ((stringMiddle.length + 1) <= (modifier.length - 2)) {
                        stringMiddle += currentCharacter;
                    }
                }
                // Recreate our password.
                password = stringBeginning + shuffle(stringMiddle.split('')).join('') + stringEnd;
            }
        }
    }
    // Return the password.
    return password;
}
