'use strict';
/** @enum {string} */
var E_errors;
(function (E_errors) {
    E_errors["invalidLength"] = "sP_E.1: The given length was not valid. A valid input length must be a number between 1 and 256.";
    E_errors["invalidModifier"] = "sP_E.2: The given modifier was not valid";
    E_errors["invalidCharCheckRestriction"] = "sP-cC_E.1: The resctiction used to check a character was not valid.";
})(E_errors || (E_errors = {}));
export default E_errors;
