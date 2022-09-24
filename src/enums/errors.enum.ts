
'use strict';

/**
 * Enum for a set of possible errors.
 *
 * @enum {string}
 * @module E_errors
 */
enum E_errors{
    invalidLength = 'sP_E.1: The given length was not valid. A valid input length must be a number between 1 and 256.',
    invalidModifier = 'sP_E.2: The given modifier was not valid',
    invalidWhitespaceOption = 'sP_E.3: The given whitespace options were not valid.',
    invalidCharCheckRestriction = 'sP-cC_E.1: The restriction used to check a character was not valid.',
    invalidNumberOfSelectedModifiers = 'sP-cP_E.1: The password was not long enough to contain the selected number of modifiers.',
}
export default E_errors;