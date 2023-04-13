'use strict';
import config from "../../simplePass.config.js";
/**
 * @file
 * @module errors
 */
const errorMessagePrefix = `ERROR.${config.errorMessagePrefix}-~_E.~:`;
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
 * @property {string} whitespaceBetweenMissingLimit - The Whitespace Between attribute must be set with a Whitespace Between Limit attribute.
 * @property {string} missingRequiredModifier - The Password Modifier must contain one of the following modifiers [list-of-required-attributes].
 * @property {string} missingRequiredAttribute - An object attribute required another attribute to be present and have a value.
 * @property {string} excludeCharactersContainedWhitespace - Exclude Characters contained whitespace.
 */
const errors = {
    invalidModifier: `${errorMessagePrefix} Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript \'FormData\' Object.`,
    toManyAttributes: `${errorMessagePrefix} To Many Attributes. The requested password may only contain ~ attributes, ~ attributes were selected.`,
    nonGenerableCharacterType: `${errorMessagePrefix} Non Generable Character Type. Attempted to generate a character of type ~`,
    invalidAttributeType: `${errorMessagePrefix}InvalidAttribute Type. Attribute ~ is supposed to be of type ~`,
    outOfBoundsAttributeValue: `${errorMessagePrefix} Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.`,
    missingRequiredAttributes: `${errorMessagePrefix} Missing Required Attribute. The attribute \'~\' requires attribute \'~\' to be set before it can be used.`,
    missingRequiredModifier: `${errorMessagePrefix} Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.`,
    excludeCharactersContainedWhitespace: `${errorMessagePrefix} \'Exclude Characters\' contained whitespace`
};
export default errors;
