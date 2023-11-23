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

/**
 * Interface for object that represents a 'Password Modifier' object used by the [simplePass main function]{@link simplePass}.
 *
 * > Note: 1 attribute from the [Character Code Constraints]{@link module:characterCodeConstraints} object is required for the program to function.
 *
 * @interface passwordModifier
 * @property {number} length The length the password should be.
 * @property {string} [excludeCharacters] A string containing any characters the password should exclude.
 * @property {boolean} [lowercase] If the password should contain lowercase characters
 * @property {boolean} [uppercase] If the password should contain uppercase characters.
 * @property {boolean} [numbers] If the password should contain numbers
 * @property {boolean} [punctuation] If the password should contain punctuation.
 * @property {boolean} [whitespaceBeginning] If the password can contain white-space at the beginning.
 * @property {boolean} [required_whitespaceBeginning] If the password is required to contain a white-space in the beginning.
 * @property {boolean} [whitespaceEnd] If the password can contain white-space at the end.
 * @property {boolean} [required_whitespaceEnd] If the password is required to contain a white-space in the end.
 * @property {boolean} [whitespaceBetween] If the password can contain white-space in the middle.
 * @property {boolean} [max_whitespaceBetween] The number of white-spaces to insert in the middle of the password.
 * @property {boolean} [repeatingCharacter] If the password is required to contain a repeating character.
 * @property {boolean} [uniqueCharacters] If the password should only contain unique characters.
 * @property {number} [max_repeatingCharacter] The number of repeating character sets the password requires.
 * @property {string|Array<Array<string>>} [customRepeatingCharacters] A string input of repeating characters that should be repeated in the password. This can also
 * include how many times the character should be repeated in the password; if so, the property will be converted to a list.
 * @property {boolean} [lowercase_supplement] If the password should contain Latin(1) Supplement Lowercase characters.
 * @property {boolean} [uppercase_supplement] If the password should contain Latin(1) Supplement Uppercase characters.
 * @property {boolean} [symbols_supplement] If the password should contain Latin(1) Supplement Symbol characters.
 * @property {string} [preConfig] If the password should follow a set of pre-configured rules.
 */

'use strict';

export default interface passwordModifier {
    [index: string]: number|string|boolean|Array<Array<string|number>>|undefined;

    // Modifiers
    length:number;
    excludeCharacters?:string,
    uniqueCharacters?:boolean,
    repeatingCharacter?:boolean,
    max_repeatingCharacter?:number,
    customRepeatingCharacters?:string|Array<Array<string>>,
    preConfig?:string,
    // Whitespace
    whitespaceBeginning?:boolean,
    required_whitespaceBeginning?:boolean,
    whitespaceEnd?:boolean,
    required_whitespaceEnd?:boolean,
    whitespaceBetween?:boolean,
    max_whitespaceBetween?:number,
    // Character Sets
    lowercase?:boolean,
    uppercase?:boolean,
    numbers?:boolean,
    punctuation?:boolean,
    lowercase_supplement?:boolean,
    uppercase_supplement?:boolean,
    symbols_supplement?:boolean,
    lowercase_extended_a?:boolean,
    uppercase_extended_a?:boolean,
    ligature_extended_a?:boolean,
    lowercase_extended_b?:boolean,
    uppercase_extended_b?:boolean,
    mixedcase_extended_b?:boolean,
    insensitivecase_extended_b?:boolean,
    lowercase_ipa_extension?:boolean,
    uppercase_ipa_extension?:boolean,
    character_modifier_letters?:boolean,
    symbol_modifier_letters?:boolean,
    lowercase_greek_coptic?:boolean,
    uppercase_greek_coptic?:boolean,
    insensitivecase_greek_coptic?:boolean,
    symbol_greek_coptic?:boolean,
    lowercase_cyrillic?:boolean,
    uppercase_cyrillic?:boolean,
    symbols_cyrillic?:boolean,
    lowercase_cyrillic_supplement?:boolean,
    uppercase_cyrillic_supplement?:boolean,
    misc_cyrillic_supplement?:boolean,
    general_punctuation?:boolean,
    currency_symbols?:boolean,
    misc_technical?:boolean,
    box_drawings?:boolean,
    block_elements?:boolean,
    misc_symbols?:boolean,
    dingbats?:boolean,
}
