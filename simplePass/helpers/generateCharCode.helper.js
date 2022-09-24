'use strict';
export default function generateCharCode(modifier, flag) {
    const charCode = self.crypto.getRandomValues(new Uint8Array(1))[0];
    if (modifier.excludeCharacters) {
        if (modifier.excludeCharacters.includes(String.fromCharCode(charCode))) {
            return generateCharCode(modifier, flag);
        }
    }
    if (flag?.beginning) {
        if (modifier.w_beginning
            && modifier.w_beginning_required) {
            return 32;
        }
    }
    if (flag?.end) {
        if (modifier.w_end
            && modifier.w_end_required) {
            return 32;
        }
    }
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
    else if (charCode === 32) {
        if (modifier.w_between
            && !flag) {
            return charCode;
        }
        else if ((modifier.w_beginning
            || modifier.w_end)
            && (flag?.beginning
                || flag?.end)) {
            return charCode;
        }
    }
    return generateCharCode(modifier, flag);
}
