/**
 * Interface for object that represents a 'Password Modifier' object used by the [simplePass main function]{@link simplePass}.
 *
 * > Note: 1 attribute from the [list of required attributes]{@link module:requiredAttributes} is required for the program to function.
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
 * @property {number} [max_repeatingCharacter] The number of repeating character sets the password requires.
 * @property {string|Array<Array<string>>} [customRepeatingCharacters] A string input of repeating characters that should be repeated in the password. This can also
 * include how many times the character should be repeated in the password; if so, the property will be converted to a list.
 * @property {boolean} [lowercase_supplement] If the password should contain Latin(1) Supplement Lowercase characters.
 * @property {boolean} [uppercase_supplement] If the password should contain Latin(1) Supplement Uppercase characters.
 * @property {boolean} [symbols_supplement] If the password should contain Latin(1) Supplement Symbol characters.
 */

'use strict';

export default interface passwordModifier {
    [index: string]: number|string|boolean|Array<Array<string|number>>|undefined;

    length:number;
    lowercase?:boolean,
    uppercase?:boolean,
    numbers?:boolean,
    punctuation?:boolean,
    whitespaceBeginning?:boolean,
    required_whitespaceBeginning?:boolean,
    whitespaceEnd?:boolean,
    required_whitespaceEnd?:boolean,
    whitespaceBetween?:boolean,
    max_whitespaceBetween?:number,
    excludeCharacters?:string,
    repeatingCharacter?:boolean,
    max_repeatingCharacter?:number,
    customRepeatingCharacters?:string|Array<Array<string>>,
    lowercase_supplement?:boolean,
    uppercase_supplement?:boolean,
    symbols_supplement?:boolean,
}
