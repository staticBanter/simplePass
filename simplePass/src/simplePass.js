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
/**
 * @file Main file for simplePass. Exports the `simplePass` function.
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
 * @throws {E_errors.invalidModifier} Will throw an Error if the modifier is `null`, `undefined` or not a JavaScript *Object.*
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
        deck = deck.concat(characterAttributes);
        let currentCharType = deck.pop();
        /**
         * Set the first character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.w_beginning
            && modifier.w_beginning_required) {
            password += ' ';
        }
        else {
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
                deck = deck.concat(characterAttributes);
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
        // Shuffle the middle characters.
        middleCharacters = shuffle(middleCharacters.split('')).join('');
        // Append middle characters to the password.
        password += middleCharacters;
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.w_end
            && modifier.w_end_required) {
            password += ' ';
        }
        else {
            /**
             * If the current character type is undefined,
             * and the deck length is 0,
             * replenish the deck.
             * We need to do this here because the loop
             * could have ended it on empty.
             */
            if (!currentCharType
                && deck.length <= 0) {
                deck = deck.concat(shuffle(characterAttributes));
                const newCurrentChar = deck.pop();
                if (newCurrentChar) {
                    currentCharType = newCurrentChar;
                }
            }
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
        // Shuffle the middle characters.
        middleCharacters = shuffle(middleCharacters.split('')).join('');
        // Append middle characters to the password.
        password += middleCharacters;
        /**
         * Set the last character of the password.
         * Check if it's required to be a whitespace.
         */
        if (modifier.w_end
            && modifier.w_end_required) {
            password += ' ';
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
    }
    // Return the password.
    return password;
}
