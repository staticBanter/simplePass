'use strict';
/**
 * @file Contains Error Enum.
 * @module E_errors
 */
/**
 * Enumerated list of possible error codes and there message template strings.
 * Anything wrapped in braces, [example], is meant to be a substitution for
 * the template string.
 *
 * @enum {string}
 * @readonly
 * @property {string} invalidModifier - The password modifier must be a valid JavaScript Object or JavaScript FormData Object.
 * @property {string} toManyAttributes - The requested password may only contain [maximum-allowed-attributes] amount of attributes, [provided-number-of-attributes] attributes were selected.
 * @property {string} nonGenerableCharacterType - Non Generable Character Type. Attempted to generate a character of type [provided-string]
 * @property {string} invalidAttributeType - Attribute [provided-attribute] is supposed to be of type [required-attribute-type]
 * @property {string} outOfBoundsAttributeValue - Attribute type [provided-attribute] is out of its value bounds.
 * @property {string} whitespaceBetweenMissingLimit - The Whitespace Between attribute must be set with a Whitespace Between Limit attribute.
 * @property {string} missingRequiredAttributes - The Password Modifier must contain one of the following attributes [list-of-required-attributes].
 * @property {string} excludeCharactersContainedWhitespace - Exclude Characters contained whitespace.
 */
var E_errors;
(function (E_errors) {
    E_errors["invalidModifier"] = "~-~_E.~: Invalid Modifier. The password modifier must be a valid JavaScript Object or JavaScript 'FormData' Object.";
    E_errors["toManyAttributes"] = "~-~_E.~: To Many Attributes. The requested password may only contain ~ amount of attributes, ~ attributes were selected.";
    E_errors["nonGenerableCharacterType"] = "~-~_E.~: Non Generable Character Type. Attempted to generate a character of type ~";
    E_errors["invalidAttributeType"] = "~-~_.~: InvalidAttribute Type. Attribute ~ is supposed to be of type ~";
    E_errors["outOfBoundsAttributeValue"] = "~-~_E.~: Out Of Bounds Attribute Type. Attribute type ~ is out of its value bounds.";
    E_errors["missingRequiredAttribute"] = "~-~_E.~: Attribute Missing Required. The attribute '~' requires attribute '~' to be set before it can be used.";
    E_errors["missingRequiredAttributes"] = "~-~_E.~: Missing Required Attributes. The Password Modifier must contain one of the following attributes ~.";
    E_errors["excludeCharactersContainedWhitespace"] = "~-~_E.~: 'Exclude Characters' contained whitespace.";
})(E_errors || (E_errors = {}));
export default E_errors;
