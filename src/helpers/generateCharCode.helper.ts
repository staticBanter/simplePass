'use strict';
/**
 * @file File containing code for the function that generates charCodes.
 * @module generateCharCode
 */

import I_charCodeGenerationFlag from "../data/interfaces/charCodeGenerationFlag.interface.js";
import I_charCodeRequest from "../data/interfaces/charCodeRequest.interface.js";
import characterCodeConstraints from "../data/objects/characterCodeConstraints.object.js";

/**
 * Generates a char code the conforms to the required modifications
 * set by the `modifier` argument.
 *
 * @function generateCharCode
 * @type {Function}
 * @param {I_passwordModifier} modifier The available password modifications. See README.md for more information about modifiers.
 * @param {I_charCodeGenerationFlag} flag A flag object used to indicate specific locations in the password
 * such as the beginning and end.
 * @returns {number} A charCode that conforms to the required modifications.
 * @requires module:I_passwordModifier
 * @requires module:I_charCodeGenerationFlag
 */
export default function generateCharCode(charCodeRequest:I_charCodeRequest,flags?:I_charCodeGenerationFlag):number{

    const charCode:number = self.crypto.getRandomValues(new Uint8Array(1))[0];

    /**
     * If the excluded characters attribute is set,
     * If the excluded characters contains the newly generated string,
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
             * If a whitespace is requested at the beginning of the password,
             *  If a whitespace is required at the beginning of the password, return 32.
             *  If we get 32 character code, return 32.
             */
            if(charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_beginning')){
                if(charCodeRequest.charCodeOptions.whitespaceOptions.includes('w_beginning_required')){
                    return 32;
                }
                if(charCode === 32){return charCode;}
            }else if(charCode === 32){
                return generateCharCode(charCodeRequest,flags);
            }

        }

        /**
         * Do things at the end of the password.
         */
        if(flags?.end){

            /**
             * If a whitespace is requested at the end of the password,
             *  If a whitespace is required at the end of the password, return 32.
             *  If we get 32 character code, return 32.
             */
            if(charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_end')){
                if(charCodeRequest.charCodeOptions.whitespaceOptions.includes('w_end_required')){
                    return 32;
                }
                if(charCode === 32){return charCode;}
            }else if(charCode === 32){
                return generateCharCode(charCodeRequest,flags);
            }

        }

    }

    if(characterCodeConstraints[charCodeRequest.charType]){

        if(
            characterCodeConstraints[charCodeRequest.charType]?.single
            && characterCodeConstraints[charCodeRequest.charType]?.single === charCode
        ){
            return charCode;
        }

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
        throw new Error('sP-gCC_E.1: A requested character did not have a character constraint set and could not be generated.');
    }

    return generateCharCode(charCodeRequest,flags);
}