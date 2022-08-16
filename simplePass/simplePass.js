'use strict';
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
export default function simplePass(modifier = {
    length: 8,
    lowercase: true,
    uppercase: false,
    numbers: false,
    punctuation: false,
    special: false,
    memorable: false
}) {
    if (!modifier
        || typeof modifier !== 'object') {
        throw new Error(E_errors.invalidModifier);
    }
    if (!modifier.length
        && !modifier.lowercase
        && !modifier.uppercase
        && !modifier.numbers
        && !modifier.punctuation
        && !modifier.special
        && !modifier.memorable) {
        throw new Error(E_errors.invalidModifier);
    }
    if (!modifier.length
        || modifier.length < 1) {
        throw new Error(E_errors.invalidLength + ' | 1');
    }
    else if (typeof (modifier.length) === 'string') {
        modifier.length = Number.parseInt(modifier.length);
    }
    else if (typeof (modifier.length) !== 'number') {
        throw new Error(E_errors.invalidLength + ' | 2');
    }
    function createRandomPassword() {
        let password = '';
        while (password.length < modifier.length) {
            password += String.fromCharCode(generateCharCode(modifier));
        }
        return password;
    }
    if (!modifier.memorable) {
        return createRandomPassword();
    }
    else {
        return;
    }
}
