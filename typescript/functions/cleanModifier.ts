/**
* simplePass - A JavaScript password generator.
* Copyright (C) 2023  Jordan Vezina(staticBanter)
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

'use strict';

import passwordModifier from "../data/interfaces/passwordModifier.js";
import allowedModifiers from "../data/lists/allowedModifiers.js";
import config from "../simplePass.config.js";

/**
 * @file
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
        length: config.defaultPasswordModifier.length
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

        if(
            allowedModifiers.includes(key)
        ){

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
