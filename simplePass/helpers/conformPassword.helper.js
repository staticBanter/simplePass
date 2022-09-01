'use strict';
import generateCharCode from "./generateCharCode.helper.js";
export default function conformPassword(password, modifier) {
    const passwordConformationConstraints = {
        lowercase: /[a-z]/g,
        uppercase: /[A-Z]/g,
        number: /[0-9]/g,
        punctuation: /[^A-Za-z0-9]/g,
        w_between: /[\s]/g,
    };
    for (const attribute in modifier) {
        if (Object.keys(passwordConformationConstraints).includes(attribute)) {
            if (!new RegExp(passwordConformationConstraints[attribute]).test(password)) {
                let newChar = "";
                let slicePoint = Math.round(Math.random() * (password.length - 1) + 1);
                if (attribute === 'w_between') {
                    slicePoint = Math.round(Math.random() * (password.length - 3) + 1);
                    newChar = " ";
                }
                else {
                    const missingModifier = {
                        length: 1
                    };
                    Object.defineProperty(missingModifier, attribute, {
                        value: true,
                        writable: false,
                    });
                    newChar = String.fromCharCode(generateCharCode(missingModifier));
                }
                return conformPassword((password.slice(0, slicePoint)
                    + newChar
                    + password.slice(slicePoint + 1, password.length)), modifier);
            }
        }
    }
    return password;
}
