'use strict';
import L_useableAttributes from "../data/lists/usableAttributes.list.js";
import L_requiredAttributes from "../data/lists/requiredAttributes.list.js";
import config from "../config.simplePass.js";
import createMessage from "./createMessage.helper.js";
import E_errors from "../data/enums/errors.enum.js";
/**
 * @file Contains validation function for the simplePass modifier. Exports `validateModifier`.
 * @module validateModifier
 */
/**
 * A basic validation function used to ensure the set modifier attributes are usable.
 * **WARNING!** simplePass does not preform comprehensive input sanitization/validation at the moment,
 * please ensure you are sanitizing and validating any inputs before they reach your server/application!
 *
 * @function validateModifier
 * @param {I_passwordModifier} modifier
 * @requires createMessage
 * @requires E_errors
 * @requires config
 * @requires L_useableAttributes
 * @requires L_requiredAttributes
 * @returns {void}
 */
export default function validateModifier(modifier) {
    // Check if the password will be long enough to contain all the attributes.
    let modifierCount = Object.keys(modifier)
        .filter((item) => {
        return L_useableAttributes.includes(item);
    })
        .length;
    // Check if the password should contain repeating characters
    if (modifier.repeatingCharacter) {
        /**
         * Determine if we are:
         *  Custom Repeating Characters
         *  Repeating random characters in the already generated password.
         *  Repeating a single character in the password.
         * * Note: It needs to be checked in this order.
         */
        if (modifier.customRepeatingCharacters) {
            // ^ Custom Repeating Characters
            // No string, bye bye...
            if (typeof (modifier.customRepeatingCharacters) !== 'string') {
                throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '15', 'string or list']));
            }
            // Trim any leading and trailing whitespace.
            modifier.customRepeatingCharacters = modifier.customRepeatingCharacters.trim();
            /**
             * IF the custom repeats contains spaces it must be a set of repeats.
             * ELSE IF it still contains a ":" (colon) it must be a single custom repeat.
             * ELSE it's just a string of requested repeating characters.
             * We must preform these checks in this order.
             */
            if (modifier.customRepeatingCharacters.includes(' ')) {
                // Initialize a holding array.
                const repeatingSets = [];
                // Split the string along the spaces.
                modifier.customRepeatingCharacters.split(' ').forEach((set) => {
                    /**
                     * IF any sets contains a literal character identifier "\" or ":".
                     * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                     */
                    if (set.includes('\\')) {
                        /**
                         * Extract the character.
                         * * Note: only the second character in the string is being sliced.
                         * * We are assuming that the first character will be our identifier "\",
                         * * the second character will be our literal.
                         */
                        const literal = set.slice(1, 2);
                        // Remove the first instance of our literal character.
                        set = set.replace(literal, '');
                        const pieces = set.split(':');
                        if (pieces.length > 2) {
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }
                        /**
                         * Add the literal character and it's repeats to the holding array.
                         */
                        repeatingSets.push([literal, pieces[1]]);
                    }
                    else {
                        // ^ There shouldn't be a literal ":" (colon) in the string.
                        let pieces = set.split(':');
                        if (pieces.length > 2) {
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }
                        // Push the set to the array.
                        repeatingSets.push([pieces[0], pieces[1]]);
                    }
                });
                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;
                modifier.customRepeatingCharacters.forEach((set) => {
                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     * * Note
                     */
                    if (!set[1]
                        || parseInt(set[1]) <= 1) {
                        set[1] = '2';
                    }
                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     */
                    modifierCount += parseInt(set[1]);
                });
            }
            else if (modifier.customRepeatingCharacters.includes(':')) {
                // ^ Single custom repeat.
                // Initialize a holding array.
                const repeatingSets = [];
                /**
                 * IF any sets contains a literal character identifier "\" or ":".
                 * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                 */
                if (modifier.customRepeatingCharacters.includes('\\')) {
                    /**
                     * Extract the character.
                     * * Note: only the second character in the string is being sliced.
                     * * We are assuming that the first character will be our identifier "\",
                     * * the second character will be our literal.
                     */
                    const literal = modifier.customRepeatingCharacters.slice(1, 2);
                    // Remove the first instance of our literal character.
                    modifier.customRepeatingCharacters = modifier.customRepeatingCharacters.replace(literal, '');
                    const pieces = modifier.customRepeatingCharacters.split(':');
                    if (pieces.length > 2) {
                        throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                    }
                    // Push the set to the array.
                    repeatingSets.push([literal, pieces[1]]);
                }
                else {
                    // ^ There shouldn't be a literal ":" (colon) in the string.
                    const pieces = modifier.customRepeatingCharacters.split(':');
                    if (pieces.length > 2) {
                        throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');
                    }
                    // Push the set to the array.
                    repeatingSets.push([pieces[0], pieces[1]]);
                }
                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;
                modifier.customRepeatingCharacters.forEach((set) => {
                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     */
                    if (!set[1]
                        || parseInt(set[1]) <= 1) {
                        set[1] = '2';
                    }
                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     */
                    modifierCount += parseInt(set[1]);
                });
            }
            else {
                // ^ String of repeating characters.
                /**
                 * Every repeating character replaces a potential password modification that can be added,
                 * therefore we need to increase the modifier count accordingly
                 */
                modifierCount += (modifier.customRepeatingCharacters.length * 2);
            }
        }
        else if (modifier.repeatingCharacter_limit) {
            // ^ Repeating random characters in the already generated password.
            // If our Repeating Character Limit is not a string or a number throw an error.
            if (typeof (modifier.repeatingCharacter_limit) !== 'number'
                && typeof (modifier.repeatingCharacter_limit) !== 'string') {
                throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '13', 'repeatingCharacter_limit', 'number or string']));
            }
            // Convert strings to ints.
            if (typeof (modifier.repeatingCharacter_limit) === 'string') {
                modifier.repeatingCharacter_limit = parseInt(modifier.repeatingCharacter_limit);
            }
            /**
             * TODO: check the min and max values for the repeating character limit
             * this values should be dynamic based on the min and max password length values.
             */
            // Ensure the Repeating Character Limit is within a reasonable range.
            if (modifier.repeatingCharacter_limit < 1
                || modifier.repeatingCharacter_limit > 255) {
                throw new Error(createMessage(E_errors.outOfBoundsAttributeValue, [config.errorMessagePrefix, 'vM', '14', 'repeatingCharacter_limit']));
            }
            // Check if the requested password length can contain the amount of repeated characters.
            if (modifier.length < (modifier.repeatingCharacter_limit * 2)) {
                throw new Error('The password can not contain the requested amount of repeating characters.');
            }
            /**
             * Every repeating character replaces a potential password modification that can be added,
             * therefore we need to increase the modifier count accordingly
             */
            modifierCount += modifier.repeatingCharacter_limit;
        }
        else {
            // ^ Repeating a single character in the password.
            modifierCount++;
        }
    }
    /**
     * Ensure the length attribute is proper type
     * and within acceptable values.
     */
    if (!modifier.length
        || (typeof (modifier.length) !== 'string'
            && typeof (modifier.length) !== 'number')) {
        throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '1', 'length', 'string or number']));
    }
    else {
        if (typeof (modifier.length) === 'string') {
            const length = parseInt(modifier.length);
            if (length > config.passwordLengthMax
                || length < config.passwordLengthMin) {
                throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '1', 'length', 'string or number']));
            }
        }
        else {
            if (modifier.length > config.passwordLengthMax
                || modifier.length < config.passwordLengthMin) {
                throw new Error(createMessage(E_errors.outOfBoundsAttributeValue, [config.errorMessagePrefix, 'vM', '2', 'length']));
            }
        }
        if (modifierCount > modifier.length) {
            throw new Error(createMessage(E_errors.toManyAttributes, [config.errorMessagePrefix, 'vM', '3', `${modifier.length}`, `${modifierCount}`]));
        }
    }
    /**
     * If the 'white-space between' attribute is set,
     * and if the 'white-space between limit' attribute is not set,
     * throw an error.
     */
    if (modifier.w_between) {
        if (!modifier.w_between_limit) {
            throw new Error(createMessage(E_errors.missingRequiredAttribute, [config.errorMessagePrefix, 'vM', '11', 'w_between_limit', 'w_between']));
        }
        /**
         * Ensure the 'white-space between limit' attribute is proper type
         * and within acceptable values.
         */
        if (typeof (modifier.w_between_limit) !== 'string'
            && typeof (modifier.w_between_limit) !== 'number') {
            throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '4', 'w_between_limit', 'string or number']));
        }
        else {
            if (typeof (modifier.w_between_limit) === 'string') {
                const w_between_limit = parseInt(modifier.w_between_limit);
                if (w_between_limit > config.whitespaceBetweenMax()
                    || w_between_limit < config.whitespaceBetweenMin()) {
                    throw new Error(createMessage(E_errors.outOfBoundsAttributeValue, [config.errorMessagePrefix, 'vM', '5', 'w_between_limit']));
                }
            }
            else {
                if (modifier.w_between_limit > config.whitespaceBetweenMax()
                    || modifier.w_between_limit < config.whitespaceBetweenMin()) {
                    throw new Error(createMessage(E_errors.outOfBoundsAttributeValue, [config.errorMessagePrefix, 'vM', '6', 'w_between_limit']));
                }
            }
        }
    }
    /**
     * Ensure the modifier contains at least one of these attributes.
     */
    if (!Object.keys(modifier)
        .some(function (array) {
        return L_requiredAttributes.includes(array);
    })) {
        throw new Error(createMessage(E_errors.missingRequiredAttributes, [config.errorMessagePrefix, 'vM', '7', L_requiredAttributes.toString()]));
    }
    /**
     * If the 'exclude characters' attributes is set,
     * ensure it is the proper type,
     * is not blank,
     * its length is within proper range,
     * and does not contain any whitespace.
     */
    if (modifier.excludeCharacters) {
        if (typeof (modifier.excludeCharacters) !== 'string') {
            throw new Error(createMessage(E_errors.invalidAttributeType, [config.errorMessagePrefix, 'vM', '8', 'excludeCharacters', 'string']));
        }
        if (!modifier.excludeCharacters.length
            && modifier.excludeCharacters.length <= 0) {
            throw new Error(createMessage(E_errors.outOfBoundsAttributeValue, [config.errorMessagePrefix, 'vM', '9', 'excludeCharacters']));
        }
        if (new RegExp('/[\s]/g').test(modifier.excludeCharacters)) {
            throw new Error(createMessage(E_errors.excludeCharactersContainedWhitespace, [config.errorMessagePrefix, 'vM', '10']));
        }
    }
}
