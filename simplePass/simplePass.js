'use strict';
import E_errors from "./enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import conformPassword from "./helpers/conformPassword.helper.js";
import cleanModifier from "./helpers/cleanModifier.helper.js";
import L_requiredAttributes from "./lists/requiredAttributes.list.js";
export default function simplePass(modifier = {
    length: 8,
    lowercase: true,
}) {
    if (!modifier
        || typeof modifier !== 'object') {
        throw new Error(E_errors.invalidModifier);
    }
    modifier = cleanModifier(modifier);
    if (!Object.keys(modifier).some(attribute => L_requiredAttributes.includes(attribute))) {
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
    if (Object.entries(modifier).length
        > modifier.length) {
        throw new Error(E_errors.invalidNumberOfSelectedModifiers);
    }
    if (modifier.excludeCharacters) {
        if (!modifier.excludeCharacters.length
            && modifier.excludeCharacters.length <= 0) {
            throw new Error(E_errors.excludeCharactersZeroLength);
        }
        if (new RegExp('/[\s]/g').test(modifier.excludeCharacters)) {
            throw new Error(E_errors.excludeCharactersIncludesWhitespace);
        }
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
