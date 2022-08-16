"use strict";

import E_errors from "../enums/errors.enum.js";
import I_passwordModifier from "../interfaces/passwordModifier.interface";
import generateCharCode from "./generateCharCode.helper.js";

export default function conformPassword(password:string,modifier:I_passwordModifier):string{

    /**
     * Since the length attribute does not count,
     * the counter will start at -1.
     */
    let activeValuesCount:number = -1;

    Object.values(modifier).forEach((value)=>{
        if(value) activeValuesCount++;
    });

    if(activeValuesCount > password.length){ throw new Error(E_errors.invalidNumberOfSelectedModifers); }

    if(password.length > modifier.length){

        const slicePoint:number = Math.round(Math.random() * (password.length - 1) + 1);

        const newPassword:string = (
            password.slice(0,slicePoint)
            + password.slice(slicePoint+1,password.length)
        );

        return conformPassword(newPassword,modifier);
    }

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

    return password;

}