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
 */
'use strict';
export {};
