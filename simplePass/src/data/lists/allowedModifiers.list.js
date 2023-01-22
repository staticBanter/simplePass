'use strict';
/**
 * @file Contains a list of attributes that are allowed on the password modifier.
 * @module L_allowedModifiers
 */
/**
 * Defines what attributes are allowed on the password modifier.
 *
 * @const {Array<string>} L_allowedModifiers
 */
const L_allowedModifiers = [
    'length',
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'w_beginning',
    'w_end',
    'w_between',
    'w_between_limit',
    'w_end_required',
    'w_beginning_required',
    'excludeCharacters',
    'repeatingCharacter',
    'repeatingCharacter_limit',
    'customRepeatingCharacters',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];
export default L_allowedModifiers;
