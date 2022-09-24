'use strict';
var E_errors;
(function (E_errors) {
    E_errors["invalidLength"] = "sP_E.1: The given length was not valid. A valid input length must be a number between 1 and 256.";
    E_errors["invalidModifier"] = "sP_E.2: The given modifier was not valid";
    E_errors["invalidWhitespaceOption"] = "sP_E.3: The given whitespace options were not valid.";
    E_errors["invalidCharCheckRestriction"] = "sP-cC_E.1: The restriction used to check a character was not valid.";
    E_errors["invalidNumberOfSelectedModifiers"] = "sP-cP_E.1: The password was not long enough to contain the selected number of modifiers.";
    E_errors["excludeCharactersZeroLength"] = "sP_E.4: The given 'excludeCharacters' was not valid. If set, it must have a length of at least 1";
    E_errors["excludeCharactersIncludesWhitespace"] = "sp_E.5: The given 'excludeCharacters' was invalid. It may not contain a whitespace character.";
})(E_errors || (E_errors = {}));
export default E_errors;
