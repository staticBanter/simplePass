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
 * - ```lowercase_ipa_extension```
 * - ```uppercase_ipa_extension```
 * - ```character_modifier_letters```
 * - ```symbol_modifier_letters```
 * - ```lowercase_greek_coptic```
 * - ```uppercase_greek_coptic```
 * - ```insensitivecase_greek_coptic```
 * - ```symbol_greek_coptic```
 * - ```lowercase_cyrillic```
 * - ```uppercase_cyrillic```
 * - ```symbols_cyrillic```
 * - ```lowercase_cyrillic_supplement```
 * - ```uppercase_cyrillic_supplement```
 * - ```misc_cyrillic_supplement```
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
    'lowercase_ipa_extension',
    'uppercase_ipa_extension',
    'character_modifier_letters',
    'symbol_modifier_letters',
    'lowercase_greek_coptic',
    'uppercase_greek_coptic',
    'insensitivecase_greek_coptic',
    'symbol_greek_coptic',
    'lowercase_cyrillic',
    'uppercase_cyrillic',
    'symbols_cyrillic',
    'lowercase_cyrillic_supplement',
    'uppercase_cyrillic_supplement',
    'misc_cyrillic_supplement'
];

export default requiredAttributes;
