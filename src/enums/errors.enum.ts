
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
    excludeCharactersZeroLength = 'sP_E.4: The given \'excludeCharacters\' was not valid. If set, it must have a length of at least 1',
    excludeCharactersIncludesWhitespace = 'sp_E.5: The given \'excludeCharacters\' was invalid. It may not contain a whitespace character.'
}
export default E_errors;