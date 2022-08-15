'use strict';
/**
 * Generates a char code the confroms to the required modifications
 * set by the *modifier* parameter.
 *
 * @function generateCharCode
 * @param {I_passwordModifier} modifier The avaliale password modifications. See README.md for more information about modifiers.
 * @returns {number} A charcode that conforms to the required modifications.
 */
export default function generateCharCode(modifier) {
    const charCode = self.crypto.getRandomValues(new Uint8Array(1))[0];
    if (modifier.lowercase
        && (charCode >= 97
            && charCode <= 122)) {
        return charCode;
    }
    else if (modifier.uppercase
        && (charCode >= 65
            && charCode <= 90)) {
        return charCode;
    }
    else if (modifier.numbers
        && (charCode >= 48
            && charCode <= 57)) {
        return charCode;
    }
    else if (modifier.punctuation
        && ((charCode >= 33
            && charCode <= 47)
            || (charCode >= 58
                && charCode <= 64)
            || (charCode >= 91
                && charCode <= 96)
            || (charCode >= 123
                && charCode <= 126))) {
        return charCode;
    }
    else if (modifier.special
        && ((charCode >= 0
            && charCode <= 32)
            || charCode >= 127)) {
        return charCode;
    }
    return generateCharCode(modifier);
}
