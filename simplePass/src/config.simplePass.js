'use strict';
/**
 * @file File contains configurable settings for the program.
 * @module config
 */
/**
 * Configuration settings for the simplePass password program.
 * These settings can be configured to your needs or your machines capabilities.
 *
 * @const {object} config
 * @property {number} passwordLengthMin The minimum password length.
 * @property {number} passwordLengthMin The maximum password length.
 * @property {number} excludeCharactersMin The minimum excluded characters to allow.
 * @property {number} excludeCharactersMax The maximum excluded characters to allow.
 * @property {number} defaultPasswordLength The default password length.
 * @property {number} possibleWhitespaceCharacterOffset Offsets the maximum amount of possible whitespace characters.
 * This because simplePass does not allow a password to contain only whitespace, and give a default offset of 2 characters.
 * Likewise, simplePass will also manually added the beginning and ending characters, adding 2 more to our offset for a total of 4.
 * @property {Function} whitespaceBetweenMax The maximum amount of white-space to allow between a password.
 * **Dynamic** : based on passwords length.
 * @property {Function} whitespaceBetweenMin The minimum amount of white-space to allow between a password.
 * **Dynamic** : based on passwords length.
 * @property {number} errorMessagePrefix Prefix used at the beginning of an error message.
 * @property {number} templateMessageMarker The marker to look for inside of error message template strings
 * to swap out for dynamic error properties.
 */
const config = {
    "passwordLengthMin": 3,
    "passwordLengthMax": 256,
    "excludeCharactersMin": 1,
    "excludeCharactersMax": 10,
    "defaultPasswordLength": 8,
    "possibleWhitespaceCharacterOffset": 4,
    "whitespaceBetweenMax": function () {
        const possibleWhitespaceCharacters = (this.passwordLengthMax - this.possibleWhitespaceCharacterOffset);
        return (possibleWhitespaceCharacters >= 1) ? possibleWhitespaceCharacters : 0;
    },
    "whitespaceBetweenMin": function () {
        const possibleWhitespaceCharacters = (this.passwordLengthMax - this.possibleWhitespaceCharacterOffset);
        return (possibleWhitespaceCharacters >= 1) ? 1 : 0;
    },
    "errorMessagePrefix": "-=sP",
    "templateMessageMarker": "~"
};
export default config;
