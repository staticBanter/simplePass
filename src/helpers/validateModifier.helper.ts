'use strict';

import I_passwordModifier from "../data/interfaces/passwordModifier.interface.js";
import L_useableAttributes from "../data/lists/usableAttributes.list.js";
import L_requiredAttributes from "../data/lists/requiredAttributes.list.js";
import config from "../config.simplePass.js";
import createMessage from "./createMessage.helper.js";
import E_errors from "../data/enums/errors.enum.js";
/**
 * @file Contains validation function for the simplePass modifier. Exports `validateModifier`.
 * @module validateModifier
 */

/**
 * A basic validation function used to ensure the set modifier attributes are usable.
 * **WARNING!** simplePass does not preform comprehensive input sanitization/validation at the moment,
 * please ensure you are sanitizing and validating any inputs before they reach your server/application!
 *
 * @function validateModifier
 * @param {I_passwordModifier} modifier
 * @requires createMessage
 * @requires E_errors
 * @requires config
 * @requires L_useableAttributes
 * @requires L_requiredAttributes
 * @returns {void}
 */
export default function validateModifier(modifier:I_passwordModifier):void{

    /**
     * Ensure the length attribute is proper type
     * and within acceptable values.
     */
    if(
        !modifier.length
        || (
            typeof(modifier.length) !== 'string'
            && typeof(modifier.length) !== 'number'
        )
    ){
        throw new Error(createMessage(E_errors.invalidAttributeType,[config.errorMessagePrefix,'vM','1','length','string or number']));
    }else{

        if(typeof(modifier.length) === 'string'){

            const length = parseInt(modifier.length);

            if(
                length > config.passwordLengthMax
                || length < config.passwordLengthMin
            ){
                throw new Error(createMessage(E_errors.invalidAttributeType,[config.errorMessagePrefix,'vM','1','length','string or number']));
            }
        }else{

            if(
                modifier.length > config.passwordLengthMax
                || modifier.length < config.passwordLengthMin
            ){
                throw new Error(createMessage(E_errors.outOfBoundsAttributeValue,[config.errorMessagePrefix,'vM','2','length']));
            }

        }

        // Check if the password will be long enough to contain all the attributes.
        const modifierCount = Object.keys(modifier)
        .filter((item)=>{
            return L_useableAttributes.includes(item);
        })
        .length;

        if(modifierCount > modifier.length){
            throw new Error(createMessage(E_errors.toManyAttributes,[config.errorMessagePrefix,'vM','3',`${modifier.length}`,`${modifierCount}`]));
        }
    }

    /**
     * If the 'white-space between' attribute is set,
     * and if the 'white-space between limit' attribute is not set,
     * throw an error.
     */
    if(modifier.w_between){

        if(!modifier.w_between_limit){
            throw new Error(createMessage(E_errors.whitespaceBetweenMissingLimit,[config.errorMessagePrefix,]));
        }

        /**
         * Ensure the 'white-space between limit' attribute is proper type
         * and within acceptable values.
         */
        if(
            typeof(modifier.w_between_limit) !== 'string'
            && typeof(modifier.w_between_limit) !== 'number'
        ){
            throw new Error(createMessage(E_errors.invalidAttributeType,[config.errorMessagePrefix,'vM','4','w_between_limit','string or number']));
        }else{

            if(typeof(modifier.w_between_limit) === 'string'){

                const w_between_limit = parseInt(modifier.w_between_limit);

                if(
                    w_between_limit > config.whitespaceBetweenMax()
                    || w_between_limit < config.whitespaceBetweenMin()
                ){
                    throw new Error(createMessage(E_errors.outOfBoundsAttributeValue,[config.errorMessagePrefix,'vM','5','w_between_limit']));
                }

            }else{

                if(
                    modifier.w_between_limit > config.whitespaceBetweenMax()
                    || modifier.w_between_limit < config.whitespaceBetweenMin()
                ){
                    throw new Error(createMessage(E_errors.outOfBoundsAttributeValue,[config.errorMessagePrefix,'vM','6','w_between_limit']));
                }

            }

        }
    }

    /**
     * Ensure the modifier contains at least one of these attributes.
     */
    if(
        !Object.keys(modifier)
        .some(function(array){
            return L_requiredAttributes.includes(array);
        })
    ){
        throw new Error(createMessage(E_errors.missingRequiredAttributes,[config.errorMessagePrefix,'vM','7',L_requiredAttributes.toString()]))
    }

    /**
     * If the 'exclude characters' attributes is set,
     * ensure it is the proper type,
     * is not blank,
     * its length is within proper range,
     * and does not contain any whitespace.
     */
    if(modifier.excludeCharacters){

        if(
            typeof(modifier.excludeCharacters) !== 'string'
        ){
            throw new Error(createMessage(E_errors.invalidAttributeType,[config.errorMessagePrefix,'vM','8','excludeCharacters','string']));
        }

        if(
            !modifier.excludeCharacters.length
            && modifier.excludeCharacters.length <= 0
        ){
            throw new Error(createMessage(E_errors.outOfBoundsAttributeValue,[config.errorMessagePrefix,'vM','9','excludeCharacters']));
        }

        if(new RegExp('/[\s]/g').test(modifier.excludeCharacters)){
            throw new Error(createMessage(E_errors.excludeCharactersContainedWhitespace,[config.errorMessagePrefix,'vM','10']));
        }

    }

}