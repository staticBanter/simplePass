'use strict';

/**
 * @file Contains a list of attributes that can be used by the program.
 * @module useableAttributes
 */

/**
 * Defines what attributes are considered usable by the program.
 *
 * @const {Array<string>} useableAttributes
 */
const useableAttributes:Array<string> = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'whitespaceBeginning',
    'whitespaceEnd',
    'whitespaceBetween',
    'excludeCharacters',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];

export default useableAttributes;