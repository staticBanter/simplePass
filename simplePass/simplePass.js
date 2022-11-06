'use strict';
import E_errors from "./data/enums/errors.enum.js";
import generateCharCode from "./helpers/generateCharCode.helper.js";
import cleanModifier from "./helpers/cleanModifier.helper.js";
import L_requiredAttributes from "./data/lists/requiredAttributes.list.js";
import L_whitespaceAttributes from "./data/lists/whitespaceAttributes.list.js";
import L_useableAttributes from "./data/lists/usableAttributes.list.js";
import shuffle from "./helpers/shuffle.helper.js";
import createModifierList from "./helpers/createModifierList.helper.js";
export default function simplePass(modifier = {
    length: 8,
    lowercase: true,
}) {
    if (!modifier
        || typeof modifier !== 'object') {
        throw new Error(E_errors.invalidModifier);
    }
    const c_modifier = cleanModifier(modifier);
    if (!Object.keys(c_modifier).some(attribute => L_requiredAttributes.includes(attribute))) {
        throw new Error(E_errors.invalidModifier);
    }
    if (!c_modifier.length
        || c_modifier.length < 3
        || c_modifier.length > 256) {
        throw new Error(E_errors.invalidLength);
    }
    else if (typeof (c_modifier.length) === 'string') {
        c_modifier.length = Number.parseInt(c_modifier.length);
    }
    else if (typeof (c_modifier.length) !== 'number') {
        throw new Error(E_errors.invalidLength);
    }
    const passwordLengthLimit = (c_modifier.length - 1);
    if (createModifierList(c_modifier, L_useableAttributes).length
        > c_modifier.length) {
        throw new Error(E_errors.invalidNumberOfSelectedModifiers);
    }
    if (c_modifier.excludeCharacters) {
        if (!c_modifier.excludeCharacters.length
            && c_modifier.excludeCharacters.length <= 0) {
            throw new Error(E_errors.excludeCharactersZeroLength);
        }
        if (new RegExp('/[\s]/g').test(c_modifier.excludeCharacters)) {
            throw new Error(E_errors.excludeCharactersIncludesWhitespace);
        }
    }
    let requiredModifierList = createModifierList(c_modifier, L_requiredAttributes);
    let whitespaceModifierList = createModifierList(c_modifier, L_whitespaceAttributes);
    if (whitespaceModifierList.includes('w_between')) {
        requiredModifierList.push('whitespace');
    }
    const charCodeRequest = {
        charType: '',
        charCodeOptions: {
            whitespaceOptions: whitespaceModifierList,
            excludeCharacters: c_modifier.excludeCharacters
        }
    };
    const realList = (requiredModifierList.length > 1);
    requiredModifierList = shuffle(requiredModifierList);
    let password = '';
    if (!c_modifier.memorable) {
        if (whitespaceModifierList.includes('w_beginning_required')) {
            password += ' ';
        }
        else {
            if (realList) {
                const currentType = requiredModifierList.pop();
                if (currentType) {
                    charCodeRequest.charType = currentType;
                }
            }
            else {
                charCodeRequest.charType = requiredModifierList[0];
            }
            password += String.fromCharCode(generateCharCode(charCodeRequest, { beginning: true }));
        }
        if (realList) {
            while (password.length < passwordLengthLimit
                && password.length < 256) {
                if (requiredModifierList.length === 0) {
                    requiredModifierList = shuffle(createModifierList(c_modifier, L_requiredAttributes));
                }
                const currentType = requiredModifierList.pop();
                if (currentType) {
                    charCodeRequest.charType = currentType;
                }
                password += String.fromCharCode(generateCharCode(charCodeRequest));
            }
            if (whitespaceModifierList.includes('w_end_required')) {
                password += ' ';
            }
            else {
                if (requiredModifierList.length === 0) {
                    requiredModifierList = shuffle(createModifierList(c_modifier, L_requiredAttributes));
                }
                const currentType = requiredModifierList.pop();
                if (currentType) {
                    charCodeRequest.charType = currentType;
                }
                password += String.fromCharCode(generateCharCode(charCodeRequest, { end: true }));
            }
        }
        else {
            charCodeRequest.charType = requiredModifierList[0];
            while (password.length < passwordLengthLimit
                && password.length < 256) {
                password += String.fromCharCode(generateCharCode(charCodeRequest));
            }
            if (whitespaceModifierList.includes('w_end_required')) {
                password += ' ';
            }
            else {
                password += String.fromCharCode(generateCharCode(charCodeRequest, { end: true }));
            }
        }
    }
    else {
        return;
    }
    return password;
}
