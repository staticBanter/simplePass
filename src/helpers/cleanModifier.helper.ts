'use strict';

import passwordModifier from "../data/interfaces/passwordModifier.interface.js";
import allowedModifiers from "../data/lists/allowedModifiers.list.js";
import config from "../config.simplePass.js";

/**
 * @file Contains the code that cleans the [password modifier object]{@link passwordModifier}.
 * @module cleanModifier
 */

/**
 * Cleans an object of any attributes that are not apart of this program.
 * Returns a new [password modifier object]{@link passwordModifier}.
 *
 * @function cleanModifier
 * @param {passwordModifier|FormData} modifier The object that needs to be cleaned.
 * @requires config
 * @requires allowedModifiers
 * @returns {passwordModifier} The cleaned [password modifier object]{@link passwordModifier}.
 */
export default function cleanModifier(modifier:passwordModifier|FormData|object):passwordModifier{

    // Initialize a new passwordModifier object to return.
    const converter:passwordModifier = {
        length: config.defaultPasswordLength
    };

    /**
     * Internal function used to check if the modifier attributes
     * exist in a list of allowed attributes,
     * and if the values to those attributes are useable types.
     * If they are the key and value are added to our new object.
     *
     * @function checkPair
     * @param param0
     * @returns {void}
     * @private
     */
    function checkPair([key,value]:any){

        if(allowedModifiers.includes(key)){

            if(
                value
                && (
                    typeof(value) === 'string'
                    || typeof(value) === 'number'
                    || typeof(value) === 'boolean'
                )
            ){
                converter[key] = value;
            }

        }

    }

    /**
     * Convert the `modifiers` key, values into an array and check them.
     * Because the `FormData` object contains its own `entries()` method
     * we need to call these slightly differently.
     */
    if(modifier instanceof FormData){

        for (let [key,value] of modifier.entries()) {
            checkPair([key,value]);
        }

    }else{

        for(const [key, value] of Object.entries(modifier)){
            checkPair([key,value])
        }

    }

    // Return the conversion
    return converter;

}