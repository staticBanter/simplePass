'use strict';
/**
 * @file
 * @module config
 */
/**
 * Configuration settings for the simplePass password program.
 * These settings can be configured to your needs or your machines capabilities.
 *
 * @const {object} config
 * @property {number} min_passwordLength The minimum password length.
 * @property {number} max_passwordLength The maximum password length.
 * @property {number} min_excludeCharactersLength The minimum excluded characters to allow.
 * @property {number} max_excludeCharactersLength The maximum excluded characters to allow.
 * @property {number} max_whitespaceCharactersOffset Offsets the maximum amount of possible whitespace characters.
 * This because simplePass does not allow a password to contain only whitespace, and give a default offset of 2 characters.
 * Likewise, simplePass will also manually added the beginning and ending characters, adding 2 more to our offset for a total of 4.
 * @property {Function} max_whitespaceBetween The maximum amount of white-space to allow between a password.
 * **Dynamic** : based on passwords length.
 * @property {Function} min_whitespaceBetween The minimum amount of white-space to allow between a password.
 * **Dynamic** : based on passwords length.
 * @property {object} messages An object to customize simplePass error messages.
 * to swap out for dynamic error properties.
 * @property {passwordModifier} defaultPasswordModifier A default ['Password Modifier' object]{@link module:passwordModifier}.
 * @property {configHTMLElement} htmlElements An object defining the HTML IDs used by the program.
 */
const config = {
    "min_passwordLength": 3,
    "max_passwordLength": 256,
    "min_excludeCharactersLength": 0,
    "max_excludeCharactersLength": 10,
    "defaultPasswordModifier": {
        length: 22,
        lowercase: true,
        uppercase: true,
        numbers: true,
        punctuation: true
    },
    "max_whitespaceCharactersOffset": 4,
    "max_whitespaceBetween": function () {
        const max_possibleWhitespaceCharacters = (this.max_passwordLength - this.max_whitespaceCharactersOffset);
        return (max_possibleWhitespaceCharacters >= 1) ? max_possibleWhitespaceCharacters : 0;
    },
    "min_whitespaceBetween": function () {
        const min_possibleWhitespaceCharacters = (this.max_passwordLength - this.max_whitespaceCharactersOffset);
        return (min_possibleWhitespaceCharacters >= 1) ? 1 : 0;
    },
    "messages": {
        "prefix": "ERROR.simplePass-~.~:",
        "templateMarker": "~"
    },
    "htmlElements": {
        "forms": "#sp_form",
        "passwordBox": "#sp_passwordBox",
        "passwordContainer": "#sp_passwordContainer",
        "entropyContainer": "#sp_passwordEntropy",
        "passwordParagraph": "#sp_passwordParagraph",
        "batchPasswordInput": "#sp_batchPasswordInput",
        "copyButton": "#sp_copyPasswordButton",
        "generateButton": "#sp_generatePasswordButton",
    }
};
export default config;
