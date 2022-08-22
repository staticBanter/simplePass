"use strict";
import E_errors from "../enums/errors.enum.js";
import generateCharCode from "./generateCharCode.helper.js";
export default function conformPassword(password, modifier) {
    let activeValuesCount = -1;
    Object.values(modifier).forEach((value) => {
        if (value)
            activeValuesCount++;
    });
    if (activeValuesCount > password.length) {
        throw new Error(E_errors.invalidNumberOfSelectedModifiers);
    }
    if (password.length > modifier.length) {
        const slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + password.slice(slicePoint + 1, password.length));
        return conformPassword(newPassword, modifier);
    }
    if (modifier.lowercase
        && !new RegExp(/[a-z]/g).test(password)) {
        const slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + String.fromCharCode(generateCharCode({
                length: 1,
                lowercase: true,
                uppercase: false,
                numbers: false,
                punctuation: false,
                special: false,
                memorable: false
            }))
            + password.slice(slicePoint + 1, password.length));
        return conformPassword(newPassword, modifier);
    }
    if (modifier.uppercase
        && !new RegExp(/[A-Z]/g).test(password)) {
        const slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + String.fromCharCode(generateCharCode({
                length: 1,
                lowercase: false,
                uppercase: true,
                numbers: false,
                punctuation: false,
                special: false,
                memorable: false
            }))
            + password.slice(slicePoint + 1, password.length));
        return conformPassword(newPassword, modifier);
    }
    if (modifier.numbers
        && !new RegExp(/[0-9]/g).test(password)) {
        const slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + String.fromCharCode(generateCharCode({
                length: 1,
                lowercase: false,
                uppercase: false,
                numbers: true,
                punctuation: false,
                special: false,
                memorable: false
            }))
            + password.slice(slicePoint + 1, password.length));
        return conformPassword(newPassword, modifier);
    }
    if (modifier.punctuation
        && !new RegExp(/[^A-Za-z0-9]/g).test(password)) {
        const slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + String.fromCharCode(generateCharCode({
                length: 1,
                lowercase: false,
                uppercase: false,
                numbers: false,
                punctuation: true,
                special: false,
                memorable: false
            }))
            + password.slice(slicePoint + 1, password.length));
        return conformPassword(newPassword, modifier);
    }
    if (modifier.w_between
        && !new RegExp(/[\s]/g).test(password)) {
        const slicePoint = Math.round(Math.random() * (password.length - 3) + 1);
        const newPassword = (password.slice(0, slicePoint)
            + " "
            + password.slice(slicePoint + 1, (password.length)));
        return conformPassword(newPassword, modifier);
    }
    return password;
}
