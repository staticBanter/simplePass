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

    if(
        modifier.lowercase
        && !new RegExp(/[a-z]/g).test(password)
    ){

        const slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + String.fromCharCode(generateCharCode({
                length:1,
                lowercase:true,
                uppercase:false,
                numbers:false,
                punctuation:false,
                special:false,
                memorable:false
            }))
            + password.slice(slicePoint+1,password.length)
        );

        return conformPassword(newPassword,modifier);
    }

    if(
        modifier.uppercase
        && !new RegExp(/[A-Z]/g).test(password)
    ){

        const slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + String.fromCharCode(generateCharCode({
                length:1,
                lowercase:false,
                uppercase:true,
                numbers:false,
                punctuation:false,
                special:false,
                memorable:false
            }))
            + password.slice(slicePoint+1,password.length)
        );

        return conformPassword(newPassword,modifier);
    }

    if(
        modifier.numbers
        && !new RegExp(/[0-9]/g).test(password)
    ){

        const slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + String.fromCharCode(generateCharCode({
                length:1,
                lowercase:false,
                uppercase:false,
                numbers:true,
                punctuation:false,
                special:false,
                memorable:false
            }))
            + password.slice(slicePoint+1,password.length)
        );

        return conformPassword(newPassword,modifier);
    }

    if(
        modifier.punctuation
        && !new RegExp(/[^A-Za-z0-9]/g).test(password)
    ){

        const slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + String.fromCharCode(generateCharCode({
                length:1,
                lowercase:false,
                uppercase:false,
                numbers:false,
                punctuation:true,
                special:false,
                memorable:false
            }))
            + password.slice(slicePoint+1,password.length)
        );

        return conformPassword(newPassword,modifier);
    }

    if(
        modifier.w_between
        && !new RegExp(/[\s]/g).test(password)
    ){

        const slicePoint:number = Math.round(Math.random() * (password.length - 3) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + " "
            + password.slice(slicePoint+1,(password.length))
        );

        return conformPassword(newPassword,modifier);

    }

    return password;

}