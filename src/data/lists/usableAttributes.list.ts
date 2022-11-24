'use strict';
/**
 * @file Contains a list of attributes that can be used by the program.
 * @module L_useableAttributes
 */

/**
 * Defines what attributes are considered usable by the program.
 *
 * @const {Array<string>} L_useableAttributes
 */
const L_useableAttributes:Array<string> = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'w_beginning',
    'w_end',
    'w_between',
    'excludeCharacters'
];

export default L_useableAttributes;