'use strict';

import config from "../config.simplePass.js";
import E_errors from "../data/enums/errors.enum.js";
import I_charCodeGenerationFlag from "../data/interfaces/charCodeGenerationFlag.interface.js";
import I_charCodeRequest from "../data/interfaces/charCodeRequest.interface.js";
import characterCodeConstraints from "../data/objects/characterCodeConstraints.object.js";
import createMessage from "./createMessage.helper.js";
/**
 * @file Contains function that generates requested character codes. Exports `generateCharCode`.
 * @module generateCharCode
 */

/**
 * Generates a random character code of a given type.
 *
 * @function generateCharCode
 * @param {I_charCodeRequest} charCodeRequest - An object contain the properties that describe the type of character code being requested
 * and certain restrictions being place on it.
 * @param {I_charCodeGenerationFlag} [flags] - A flag object used to give more information about what stage of password generation we are at.
 * @requires characterCodeConstraints
 * @requires createMessage
 * @throws {E_errors.nonGenerableCharacterType} - Will throw an error if the requested character code type
 * is not found within the character code constraints object.
 * @returns {number}
 */
export default function generateCharCode(charCodeRequest:I_charCodeRequest,flags?:I_charCodeGenerationFlag):number{

    // Generate our random number.
    const charCode:number = self.crypto.getRandomValues(new Uint8Array(1))[0];

    /**
     * If the 'excluded characters' attribute is set,
     * If the 'excluded characters' contains the newly generated string,
     * regenerate a new string.
     */
    if(charCodeRequest.charCodeOptions?.excludeCharacters){
        if(charCodeRequest.charCodeOptions.excludeCharacters.includes(String.fromCharCode(charCode))){
            return generateCharCode(charCodeRequest);
        }
    }


    /**
     * Check for flags.
     */
    if(flags){

        /**
         * Do things at the beginning of the password.
         */
        if(flags?.beginning){

            /**
             * If a white-space is optional at the beginning of the password,
             * and the charCode is 32,
             * return the charCode.
             * Else regenerate.
             */
            if(
                charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_beginning')
                && charCode === 32
            ){
                return charCode;
            }else if(charCode === 32){
                return generateCharCode(charCodeRequest,flags);
            }

        }

        /**
         * Do things at the end of the password.
         */
        if(flags?.end){

            /**
             * If a whitespace is optional at the end of the password,
             * and the charCode is 32,
             * return the charCode.
             * Else regenerate.
             */
             if(
                charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_end')
                && charCode === 32
            ){
                return charCode;
            }else if(charCode === 32){
                return generateCharCode(charCodeRequest,flags);
            }

        }

    }

    /**
     * If the requested character type is within our character code constraints,
     * preform further checks to determine if it's the correct character code we
     * want.
     * Else throw an error, we can not check for the requested character type.
     */
    if(characterCodeConstraints[charCodeRequest.charType]){

        /**
         * If the character code we are requesting only has a single constraint,
         * we can preform a direct comparison on it to determine if it's the one
         * we want.
         * Else continue as the constraint may have more attributes that we can
         * test for.
         */
        if(
            characterCodeConstraints[charCodeRequest.charType]?.single
            && characterCodeConstraints[charCodeRequest.charType]?.single === charCode
        ){
            return charCode;
        }

        /**
         * Initialize these three attributes as they are used in a combination of
         * comparisons.
         */
        const min:number|undefined = characterCodeConstraints[charCodeRequest.charType]?.min
        const max:number|undefined = characterCodeConstraints[charCodeRequest.charType]?.max
        const range:Array<Array<number>>|undefined = characterCodeConstraints[charCodeRequest.charType]?.range


        /**
         * If the character code we are looking for exists in a range of codes.
         * If the generated charCode is within the min or max of that range.
         * If the generated charCode is equal to our min or max, we can just return it.
         * Iterate over our range;
         *  If our generated charCode exists somewhere in there, return it.
         */
        if(range){
            if(
                (
                    min
                    && max
                )
                && (
                    charCode >= min
                    && charCode <= max
                )
            ){
                if(
                    charCode === min
                    || charCode === max
                ){
                    return charCode;
                }

                for(let i = 0; i < range.length; i++){
                    if(
                        charCode >= range[i][0]
                        && charCode <= range[i][1]
                    ){
                        return charCode;
                    }
                }
            }
        }else if(
        // ^ Else there was no range attribute and we only need to check the min and max.
            (
                min
                && max
            )
            && (
                charCode >= min
                && charCode <= max
            )
        ){
            return charCode;
        }

    }else{
        throw new Error(createMessage(E_errors.nonGenerableCharacterType,[config.errorMessagePrefix,'gCC','1',charCodeRequest.charType]))
    }

    /**
     * We did not find our character.
     * Regenerate.
     */
    return generateCharCode(charCodeRequest,flags);
}