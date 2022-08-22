'use strict';

import I_passwordModifier  from "../interfaces/passwordModifier.interface.js";
import I_charCodeGenerationFlag from "../interfaces/charCodeGenerationFlag.interface.js";

/**
 * Generates a char code the confroms to the required modifications
 * set by the *modifier* parameter.
 *
 * @function generateCharCode
 * @param {I_passwordModifier} modifier The available password modifications. See README.md for more information about modifiers.
 * @param {I_charCodeGenerationFlag} flag A flag object used to indicate specific locations in the password
 * such as the beginning and end.
 * @returns {number} A charCode that conforms to the required modifications.
 */
export default function generateCharCode(modifier:I_passwordModifier,flag?:I_charCodeGenerationFlag):number{

    const charCode:number = self.crypto.getRandomValues(new Uint8Array(1))[0];

    if(
        modifier.lowercase
        && (
            charCode >= 97
            && charCode <= 122
        )
    ){
        return charCode
    }else if(
       modifier.uppercase
        && (
            charCode >= 65
            && charCode <= 90
        )
    ){
        return charCode
    }else if(
        modifier.numbers
        && (
            charCode >= 48
            && charCode <= 57
        )
    ){
        return charCode
    }else if(
        modifier.punctuation
        &&(
            (
                charCode >= 33
                && charCode <= 47
            )
            || (
                charCode >= 58
                && charCode <= 64
            )
            || (
                charCode >= 91
                && charCode <= 96
            )
            || (
                charCode >= 123
                && charCode <= 126
            )
        )
    ){
        return charCode;
    }else if(
        charCode === 32
    ){

        if(
            modifier.w_between
            && !flag
        ){
            return charCode;
        }else if(
            (
                modifier.w_beginning
                || modifier.w_end
            )
            && (
                flag?.beginning
                || flag?.end
            )
        ){
            return charCode;
        }

    }
    // }else if(
    //     modifier.special
    //     && (
    //         (
    //             charCode >= 0
    //             && charCode <= 32
    //         )
    //         || charCode >= 127
    //     )
    // ){
    //     return charCode;
    // }

    return generateCharCode(modifier,flag);
}