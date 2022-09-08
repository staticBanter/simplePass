'use strict';
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import conformPassword from "./helpers/conformPassword.helper.js";
import L_allowedModifiers from "./lists/allowedModifiers.list.js";
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
    const limit = (modifier.length - 1);
    Object.entries(modifier).forEach((attVal) => {
        if (!L_allowedModifiers.includes(attVal[0])
            || !attVal[1]) {
            delete modifier[attVal[0]];
        }
    });
    if (Object.entries(modifier).length
        > modifier.length) {
        throw new Error(E_errors.invalidNumberOfSelectedModifiers);
    }
    let password = '';
    if (!modifier.memorable) {
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
