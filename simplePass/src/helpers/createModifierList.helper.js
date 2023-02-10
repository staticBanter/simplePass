'use strict';
/**
 * @file Contains code for a helper function that creates a list of attributes from a [password modifier object]{@link passwordModifier}
 * @module createModifierList
 */
/**
 * Creates an array of strings from a [password modifier object]{@link passwordModifier} containing the object
 * keys that were found in a predefined list.
 *
 * @function createModifierList
 * @param {passwordModifier} modifier The password modifier object.
 * @param {Array<any>} list The predefined list to match object keys about.
 * @returns {Array<any>} The list of modifiers attributes that matched the original list.
 */
export default function createModifierList(modifier, list) {
    // Initialize Array
    const modifiers = [];
    // Filter Keys
    Object.keys(modifier).forEach((key) => {
        if (list.includes(key)) {
            modifiers.push(key);
        }
    });
    // Return Array.
    return modifiers;
}
