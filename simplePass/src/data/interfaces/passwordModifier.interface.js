/**
 * Interface for object that represents a Password Modifier.
 *
 * @interface I_passwordModifier
 * @property {number} length - The length the password should be.
 * @property {string} [excludeCharacters] - A string containing any characters the password should exclude.
 * @property {boolean} [lowercase] - If the password should contain lowercase characters
 * @property {boolean} [uppercase] - If the password should contain uppercase characters.
 * @property {boolean} [numbers] - If the password should contain numbers
 * @property {boolean} [punctuation] - If the password should contain punctuation.
 * @property {boolean} [w_beginning] - If the password can contain white-space at the beginning.
 * @property {boolean} [w_beginning_required] - If the password is required to contain a white-space in the beginning.
 * @property {boolean} [w_end] - If the password can contain white-space at the end.
 * @property {boolean} [w_beginning_end] - If the password is required to contain a white-space in the end.
 * @property {boolean} [w_between] - If the password can contain white-space in the middle.
 * @property {boolean} [w_between_limit] - The number of white-spaces to insert in the middle of the password.
 * @property {boolean} [repeatingCharacter] - If the password is required to contain a repeating character.
 * @property {number} [repeatingCharacter_limit] - The number of repeating character sets the password requires.
 * @property {string|Array<Array<string>>} [customRepeatingCharacters] - A string input of repeating characters that should be repeated in the password. This can also
 * include how many times the character should be repeated in the password; if so, the property will be converted to a list.
 */
'use strict';
export {};
