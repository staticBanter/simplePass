/**
* simplePass - A JavaScript password generator.
* Copyright (C) 2023  Jordan Vezina(staticBanter)
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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
