'use strict';
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import conformPassword from "./helpers/conformPassword.helper.js";
export default function simplePass(modifier = {
    length: 8,
    lowercase: true,
}) {
    if (!modifier
        || typeof modifier !== 'object') {
        throw new Error(E_errors.invalidModifier);
    }
    if (!modifier.lowercase
        && !modifier.uppercase
        && !modifier.numbers
        && !modifier.punctuation
        && !modifier.special
        && !modifier.memorable) {
        throw new Error(E_errors.invalidModifier);
    }
    if (!modifier.length
        || modifier.length < 3
        || modifier.length > 256) {
        throw new Error(E_errors.invalidLength);
    }
    else if (typeof (modifier.length) === 'string') {
        modifier.length = Number.parseInt(modifier.length);
    }
    else if (typeof (modifier.length) !== 'number') {
        throw new Error(E_errors.invalidLength);
    }
    let password = '';
    if (!modifier.memorable) {
        const limit = (modifier.length - 1);
        password += String.fromCharCode(generateCharCode(modifier, { beginning: true }));
        while (password.length < limit
            && password.length < 256) {
            password += String.fromCharCode(generateCharCode(modifier));
        }
        password += String.fromCharCode(generateCharCode(modifier, { end: true }));
    }
    else {
        return;
    }
    return conformPassword(password, modifier);
}
