'use strict';
/**
 * @file File containing code for the function that conforms generated passwords.
 * @module conformPassword
 */

import I_passwordModifier from "../interfaces/passwordModifier.interface";
import generateCharCode from "./generateCharCode.helper.js";

/**
 * Takes a given password and adjusts it until the password conforms with
 * desired modifications.
 *
 * @function conformPassword
 * @type {Function}
 * @param {string} password The password to conform.
 * @param {I_passwordModifier} modifier The modifiers the password must conform to.
 * @returns {string} The conformed password
 * @requires module:I_passwordModifier
 * @requires module:generateCharCode
 */
export default function conformPassword(password:string,modifier:I_passwordModifier):string{

    const passwordConformationConstraints: {[key:string]:RegExp} = {
        lowercase: /[a-z]/g,
        uppercase: /[A-Z]/g,
        numbers:/[0-9]/g,
        punctuation:/[^A-Za-z0-9]/g,
        w_between:/[\s]/g,
    }

    /**
     * Foreach set modifier attribute,
     * If `passwordConformationConstraints` includes a attribute of the same name,
     * If the password does not pass the RegExp test for that modifier constraint,
     * Generate the missing character and recheck for conformity.
     */
    for (const attribute in modifier) {
        if(Object.keys(passwordConformationConstraints).includes(attribute)){
            if(!new RegExp(passwordConformationConstraints[attribute]).test(password)){

                let newChar:string = "";
                let slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

                /**
                 * If the missing modifier attribute is for a space character,
                 * just set the `newChar` to a space character; this is faster than trying to generate one.
                 * Else set `newChar` to a random character of the missing attribute.
                 */
                if(attribute === 'w_between'){
                    slicePoint = Math.round(Math.random() * (password.length - 3) + 1);
                    newChar = " ";
                }else{

                    const missingModifier:I_passwordModifier = {
                        length:1
                    }

                    Object.defineProperty(missingModifier, attribute, {
                        value: true,
                        writable:false,
                    });

                    newChar = String.fromCharCode(generateCharCode(missingModifier));
                }

                return conformPassword((
                    password.slice(0,slicePoint)
                    + newChar
                    + password.slice(slicePoint+1,password.length)
                ),modifier);
            }
        }
    }

    return password;

}