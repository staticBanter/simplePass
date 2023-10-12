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
 * @module errors
 */
/**
 * Object representing possible error codes and their message template strings.
 * Anything wrapped in braces, [example], is meant to be a substitution for
 * the template string.
 *
 * @readonly
 * @property {string} invalidModifier - The password modifier must be a valid JavaScript Object or JavaScript FormData Object.
 * @property {string} toManyAttributes - The requested password may only contain [maximum-allowed-attributes] amount of attributes, [provided-number-of-attributes] attributes were selected.
 * @property {string} nonGenerableCharacterType - Non Generable Character Type. Attempted to generate a character of type [provided-string]
 * @property {string} invalidAttributeType - Attribute [provided-attribute] is supposed to be of type [required-attribute-type]
 * @property {string} outOfBoundsAttributeValue - Attribute type [provided-attribute] is out of its value bounds.
 * @property {string} missingRequiredModifier - The Password Modifier must contain one of the following modifiers [list-of-required-attributes].
 * @property {string} missingRequiredAttribute - An object attribute required another attribute to be present and have a value.
 * @property {string} excludeCharactersContainedWhitespace - Exclude Characters contained whitespace.
 */
const errors = {
    invalidModifier: `Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript \'FormData\' Object.`,
    toManyAttributes: `To Many Attributes. The requested password may only contain ~ attributes, ~ attributes were selected.`,
    nonGenerableCharacterType: `Non Generable Character Type. Attempted to generate a character of type ~`,
    invalidAttributeType: `InvalidAttribute Type. Attribute ~ is supposed to be of type ~`,
    outOfBoundsAttributeValue: `Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.`,
    missingRequiredAttributes: `Missing Required Attribute. The attribute \'~\' requires attribute \'~\' to be set before it can be used.`,
    missingRequiredModifier: `Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.`,
    excludeCharactersContainedWhitespace: `\'Exclude Characters\' contained whitespace`
};
export default errors;
