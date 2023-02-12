'use strict';

/**
 * @file Contains a list of attributes that are allowed on the password modifier.
 * @module allowedModifiers
 */

/**
 * Defines what attributes are allowed on the password modifier.
 *
 * @const {Array<string>} allowedModifiers
 */
const allowedModifiers:Array<string> = [
    'length',
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'whitespaceBeginning',
    'whitespaceEnd',
    'whitespaceBetween',
    'max_whitespaceBetween',
    'required_whitespaceEnd',
    'required_whitespaceBeginning',
    'excludeCharacters',
    'repeatingCharacter',
    'max_repeatingCharacter',
    'customRepeatingCharacters',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];

export default allowedModifiers;