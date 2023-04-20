'use strict';
/**
 * @file
 * @module useableAttributes
 */
/**
 * Defines what attributes are considered usable by the program.
 * - ```lowercase```
 * - ```uppercase```
 * - ```numbers```
 * - ```punctuation```
 * - ```whitespaceBeginning```
 * - ```whitespaceEnd```
 * - ```whitespaceBetween```
 * - ```excludeCharacters```
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
 *
 * @const {Array<string>} useableAttributes
 */
const useableAttributes = [
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
export default useableAttributes;
