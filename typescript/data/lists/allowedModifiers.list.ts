'use strict';

/**
 * @file
 * @module allowedModifiers
 */

/**
 * Defines what attributes are allowed on the password modifier.
 * - ```length```
 * - ```lowercase```
 * - ```uppercase```
 * - ```numbers```
 * - ```punctuation```
 * - ```whitespaceBeginning```
 * - ```whitespaceEnd```
 * - ```whitespaceBetween```
 * - ```max_whitespaceBetween```
 * - ```required_whitespaceEnd```
 * - ```required_whitespaceBeginning```
 * - ```excludeCharacters```
 * - ```repeatingCharacter```
 * - ```max_repeatingCharacter```
 * - ```customRepeatingCharacters```
 * - ```lowercase_supplement```
 * - ```uppercase_supplement```
 * - ```symbols_supplement```
 * - ```preConfig```
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
    'symbols_supplement',
    'preConfig',
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

export default allowedModifiers;