'use strict';

/**
 * @file
 * @module requiredAttributes
 */

/**
 * Defines what attributes that are required to be in the password modifier.
 * - ```lowercase```
 * - ```uppercase```
 * - ```numbers```
 * - ```punctuation```
 * - ```lowercase_supplement```
 * - ```uppercase_supplement```
 * - ```symbols_supplement```
 * - ```lowercase_extended_a```
 * - ```uppercase_extended_a```
 * - ```ligature_extended_a```
 * - ```lowercase_extended_b```
 * - ```uppercase_extended_b```
 * - ```mixedcase_extended_b```
 * - ```insensitivecase_extended_b```
 * - ```character_modifier_letters```
 * - ```symbol_modifier_letters```
 * - ```lowercase_greek_coptic```
 * - ```uppercase_greek_coptic```
 * - ```insensitivecase_greek_coptic```
 * - ```symbol_greek_coptic```
 * > Note: Only 1 of these modifiers is required for the program to function.
 *
 * @const {Array<string>} requiredAttributes
 */
const requiredAttributes:Array<string> = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement',
    'lowercase_extended_a',
    'uppercase_extended_a',
    'ligature_extended_a',
    'lowercase_extended_b',
    'uppercase_extended_b',
    'mixedcase_extended_b',
    'insensitivecase_extended_b',
    'character_modifier_letters',
    'symbol_modifier_letters',
    'lowercase_greek_coptic',
    'uppercase_greek_coptic',
    'insensitivecase_greek_coptic',
    'symbol_greek_coptic'
];

export default requiredAttributes;