
'use strict';

/** @enum {string} */
enum E_errors{
    invalidLength = 'sP_E.1: The given length was not valid. A valid input length must be a number between 1 and 256.',
    invalidModifier = 'sP_E.2: The given modifier was not valid',
    invalidCharCheckRestriction = 'sP-cC_E.1: The resctiction used to check a character was not valid.',
    invalidNumberOfSelectedModifers = 'sP-cP_E.1: The password was not long enough to contain the selected number of modifiers.'
}
export default E_errors;