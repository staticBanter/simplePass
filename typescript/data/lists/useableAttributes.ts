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
 * - ```general_punctuation```
 * - ```currency_symbols```
 * - ```misc_technical```
 * - ```box_drawings```
 * - ```block_elements```
 * - ```misc_symbols```
 * - ```dingbats```
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
    'symbols_supplement',
    'lowercase_extended_a',
    'uppercase_extended_a',
    'ligature_extended_a',
    'lowercase_extended_b',
    'uppercase_extended_b',
    'mixedcase_extended_b',
    'lowercase_ipa_extension',
    'uppercase_ipa_extension',
    'insensitivecase_extended_b',
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
    'misc_cyrillic_supplement',
    'general_punctuation',
    'currency_symbols',
    'misc_technical',
    'box_drawings',
    'block_elements',
    'misc_symbols',
    'dingbats',
];

export default useableAttributes;
