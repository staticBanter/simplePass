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
import characterCodeConstraints from "../data/objects/characterCodeConstraints.js";
import config from "../simplePass.config.js";
import passwordPreConfigs from "../data/objects/passwordPreConfigs.js";

/**
 * @file
 * @module validateModifier
 */

/**
 * A basic validation function used to ensure the set [simplePass modifier object]{@link passwordModifier} attributes are usable.
 * This function will throw an error if the object is not usable, else the function will return ```void```.
 *
 * **WARNING!** simplePass does not preform comprehensive input sanitization/validation,
 * please ensure you are sanitizing and validating any inputs before they reach your server/application!
 *
 * @function validateModifier
 * @param {passwordModifier} modifier The [password modifier]{@link passwordModifier} object to validate.
 * @requires config
 * @throws {errors.invalidAttributeType} Will throw an error if a modifier attribute is not a valid type.
 * @throws {errors.outOfBoundsAttributeValue} Will throw an error if a modifier attribute is out of its allowed value bounds.
 * @throws {errors.toManyAttributes} Will throw an error if the modifier contains more attributes than the password can contain.
 * @throws {errors.missingRequiredAttribute} Will throw an error if a modifier attribute is missing another attribute that needs to be present.
 * @throws {errors.excludeCharactersContainedWhitespace} Will throw an error if the ```excludeCharacters``` attribute contains a whitespace.
 * @returns {void}
 */
export default function validateModifier (
    modifier: passwordModifier,
): true {


    // Ensure our modifier match our schema.
    Object.entries(passwordModifierSchema).forEach(([key,validator])=>{

        if(modifier[key]){

            const result = validator(modifier[key])

            if(!result){
                throw new Error(`Invalid value for password modifier attribute ${key}`);
            }

        }

    });

    // Check if the password will be long enough to contain all the attributes.
    let modifierCount: number = Object.keys(modifier)
    .filter((item: string) => {
        return Object.keys(characterCodeConstraints).includes(item);
    })
    .length;

    // Check if the password should contain repeating characters
    if(modifier.repeatingCharacter) {

        /**
         * Determine if we are:
         *  Custom Repeating Characters
         *  Repeating random characters in the already generated password.
         *  Repeating a single character in the password.
         * * Note: It needs to be checked in this order.
         */
        if(modifier.customRepeatingCharacters) {
            // ^ Custom Repeating Characters

            // No string, bye bye...
            if(typeof (modifier.customRepeatingCharacters) !== 'string') {
                throw {
                    errorKey: 'invalidAttributeType',
                    replacements: [
                        'vM',
                        '15',
                        'customRepeatingCharacters',
                        'string'
                    ]
                };
            }

            // Trim any leading and trailing whitespace.
            modifier.customRepeatingCharacters = modifier.customRepeatingCharacters.trim();

            /**
             * IF the custom repeats contains spaces it must be a set of repeats.
             * ELSE IF it still contains a ":" (colon) it must be a single custom repeat.
             * ELSE it's just a string of requested repeating characters.
             * We must preform these checks in this order.
             */
            if(modifier.customRepeatingCharacters.includes(' ')) {

                // Initialize a holding array.
                const repeatingSets: Array<Array<string>> = [];

                // Split the string along the spaces.
                modifier.customRepeatingCharacters.split(' ').forEach((set: string) => {

                    /**
                     * IF any sets contains a literal character identifier "\" or ":".
                     * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                     */
                    if(set.includes('\\')) {

                        /**
                         * Extract the character.
                         * * Note: only the second character in the string is being sliced.
                         * * We are assuming that the first character will be our identifier "\",
                         * * the second character will be our literal.
                         */
                        const literal: string = set.slice(1, 2);

                        // Remove the first instance of our literal character.
                        set = set.replace(literal, '');


                        const pieces: Array<string> = set.split(':');

                        if(pieces.length > 2) {
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }

                        /**
                         * Add the literal character and it's repeats to the holding array.
                         */
                        repeatingSets.push([literal, pieces[1]]);

                    } else {
                        // ^ There shouldn't be a literal ":" (colon) in the string.


                        let pieces = set.split(':');

                        if(pieces.length > 2) {
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }

                        // Push the set to the array.
                        repeatingSets.push([pieces[0], pieces[1]]);

                    }

                });

                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;

                modifier.customRepeatingCharacters.forEach((set) => {

                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     * * Note
                     */
                    if(
                        !set[1]
                        || parseInt(set[1]) <= 1
                    ) {
                        set[1] = '2';
                    }

                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     * @ignore
                     */
                    modifierCount += parseInt(set[1]);
                });

            } else if(modifier.customRepeatingCharacters.includes(':')) {
                // ^ Single custom repeat.

                // Initialize a holding array.
                const repeatingSets: Array<Array<string>> = [];

                /**
                 * IF any sets contains a literal character identifier "\" or ":".
                 * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                 */
                if(modifier.customRepeatingCharacters.includes('\\')) {

                    /**
                     * Extract the character.
                     * * Note: only the second character in the string is being sliced.
                     * * We are assuming that the first character will be our identifier "\",
                     * * the second character will be our literal.
                     */
                    const literal = modifier.customRepeatingCharacters.slice(1, 2);

                    // Remove the first instance of our literal character.
                    modifier.customRepeatingCharacters = modifier.customRepeatingCharacters.replace(literal, '');


                    const pieces = modifier.customRepeatingCharacters.split(':');

                    if(pieces.length > 2) {
                        throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                    }

                    // Push the set to the array.
                    repeatingSets.push([literal, pieces[1]]);

                } else {
                    // ^ There shouldn't be a literal ":" (colon) in the string.


                    const pieces = modifier.customRepeatingCharacters.split(':');

                    if(pieces.length > 2) {
                        throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');
                    }

                    // Push the set to the array.
                    repeatingSets.push([pieces[0], pieces[1]]);

                }

                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;

                modifier.customRepeatingCharacters.forEach((set) => {

                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     */
                    if(
                        !set[1]
                        || parseInt(set[1]) <= 1
                    ) {
                        set[1] = '2';
                    }

                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     * @ignore
                     */
                    modifierCount += parseInt(set[1]);
                });

            } else {
                // ^ String of repeating characters.

                /**
                 * Every repeating character replaces a potential password modification that can be added,
                 * therefore we need to increase the modifier count accordingly
                 * @ignore
                 */
                modifierCount += (modifier.customRepeatingCharacters.length * 2);

            }

        } else if(modifier.max_repeatingCharacter) {
            // ^ Repeating random characters in the already generated password.

            // If our Repeating Character Limit is not a string or a number throw an error.
            if(
                typeof (modifier.max_repeatingCharacter) !== 'number'
                && typeof (modifier.max_repeatingCharacter) !== 'string'
            ) {
                throw {
                    errorKey: 'invalidAttributeType',
                    replacements: ['vM', '13', 'max_repeatingCharacter', 'number or string']
                };
            }

            // Convert strings to ints.
            if(typeof (modifier.max_repeatingCharacter) === 'string') {
                modifier.max_repeatingCharacter = parseInt(modifier.max_repeatingCharacter);
            }

            /**
             * TODO: check the min and max values for the repeating character limit
             * this values should be dynamic based on the min and max password length values.
             */
            // Ensure the Repeating Character Limit is within a reasonable range.
            if(
                modifier.max_repeatingCharacter < 1
                || modifier.max_repeatingCharacter > 100
            ) {
                throw {
                    errorKey: 'outOfBoundsAttributeValue',
                    replacements: ['vM', '14', 'max_repeatingCharacter']
                };
            }

            // Check if the requested password length can contain the amount of repeated characters.
            if(modifier.length < (modifier.max_repeatingCharacter * 2)) {
                throw {
                    errorKey: 'The password can not contain the requested amount of repeating characters.'
                };
            }

            /**
             * Every repeating character replaces a potential password modification that can be added,
             * therefore we need to increase the modifier count accordingly
             * @ignore
             */
            modifierCount += modifier.max_repeatingCharacter;

        } else {
            // ^ Repeating a single character in the password.

            modifierCount++;

        }

    }

    /**
     * Ensure the modifier contains at least one of these attributes.
     */
    if(
        !Object.keys(modifier)
            .some(function (array) {
                return Object.keys(characterCodeConstraints).includes(array);
            })
    ) {
        throw {
            errorKey: 'missingRequiredAttributes',
            replacements: ['vM', '7', Object.keys(characterCodeConstraints).toString()]
        };
    }

    if(modifierCount > modifier.length) {

        throw {
            errorKey: 'toManyAttributes',
            replacements: ['vM', '3', `${modifier.length}`, `${modifierCount}`]
        };

    }

    return true;

}

const passwordModifierSchema:{
    [index:string]:Function
} = {
    // Modifiers
    length:(v:any)=>{
        v = parseInt(v);
        return (
            typeof(v) === 'number'
            && (v % 1) === 0
            && v >= config.passwordConstraints.min_length
            && v <= config.passwordConstraints.max_length
        )
    },
    excludeCharacters:(v:any)=>{
        return (
            typeof(v) === 'string'
            && !(new RegExp(/[\s]/g).test(v))
            && v.length >= config.passwordConstraints.min_excludeCharactersLength
            && v.length <= config.passwordConstraints.max_excludeCharactersLength
        )
    },
    uniqueCharacters:(v:any)=>{return(v?true:false)},
    repeatingCharacter:(v:any)=>{return(v?true:false)},
    max_repeatingCharacter:(v:any)=>{
        v = parseInt(v);
        return(
            typeof(v)==='number'
            && (v % 1) === 0
            && v >= config.passwordConstraints.min_repeatingCharactersLength
            && v <= config.passwordConstraints.max_repeatingCharactersLength
        )
    },
    customRepeatingCharacters:(v:any)=>{
        if(Array.isArray(v)){
            if(!v.length){return false;}

            for(let i=0;i<v.length;i++){
                if(
                    !Array.isArray(v[i])
                    || v[i].length > 1
                    || typeof(v[i][0])==='string'
                ){
                    return false;
                }
            }

        }else if(typeof(v)==='string'){
            return (
                v.length
                && v.length >= config.passwordConstraints.min_repeatingCharactersLength
                && v.length <= config.passwordConstraints.max_repeatingCharactersLength
            )
        }
        return false;
    },
    preConfig:(v:any)=>{
        return(
            typeof(v) === 'string'
            && Object.keys(passwordPreConfigs).includes(v)
        );
    },
    // Whitespace
    whitespaceBeginning:(v:any)=>{return(v?true:false)},
    required_whitespaceBeginning:(v:any)=>{return(v?true:false)},
    whitespaceEnd:(v:any)=>{return(v?true:false)},
    required_whitespaceEnd:(v:any)=>{return(v?true:false)},
    whitespaceBetween:(v:any)=>{return(v?true:false)},
    max_whitespaceBetween:(v:any)=>{
        v=parseInt(v)
        return(
            typeof(v)==='number'
            && (v % 1) === 0
            && v >= config.passwordConstraints.min_whitespaceBetween()
            && v <= config.passwordConstraints.max_whitespaceBetween()
        )
    },
    // Character Sets
    lowercase:(v:any)=>{return(v?true:false)},
    uppercase:(v:any)=>{return(v?true:false)},
    numbers:(v:any)=>{return(v?true:false)},
    punctuation:(v:any)=>{return(v?true:false)},
    lowercase_supplement:(v:any)=>{return(v?true:false)},
    uppercase_supplement:(v:any)=>{return(v?true:false)},
    symbols_supplement:(v:any)=>{return(v?true:false)},
    lowercase_extended_a:(v:any)=>{return(v?true:false)},
    uppercase_extended_a:(v:any)=>{return(v?true:false)},
    ligature_extended_a:(v:any)=>{return(v?true:false)},
    lowercase_extended_b:(v:any)=>{return(v?true:false)},
    uppercase_extended_b:(v:any)=>{return(v?true:false)},
    mixedcase_extended_b:(v:any)=>{return(v?true:false)},
    insensitivecase_extended_b:(v:any)=>{return(v?true:false)},
    lowercase_ipa_extension:(v:any)=>{return(v?true:false)},
    uppercase_ipa_extension:(v:any)=>{return(v?true:false)},
    character_modifier_letters:(v:any)=>{return(v?true:false)},
    symbol_modifier_letters:(v:any)=>{return(v?true:false)},
    lowercase_greek_coptic:(v:any)=>{return(v?true:false)},
    uppercase_greek_coptic:(v:any)=>{return(v?true:false)},
    insensitivecase_greek_coptic:(v:any)=>{return(v?true:false)},
    symbol_greek_coptic:(v:any)=>{return(v?true:false)},
    lowercase_cyrillic:(v:any)=>{return(v?true:false)},
    uppercase_cyrillic:(v:any)=>{return(v?true:false)},
    symbols_cyrillic:(v:any)=>{return(v?true:false)},
    lowercase_cyrillic_supplement:(v:any)=>{return(v?true:false)},
    uppercase_cyrillic_supplement:(v:any)=>{return(v?true:false)},
    misc_cyrillic_supplement:(v:any)=>{return(v?true:false)},
    general_punctuation:(v:any)=>{return(v?true:false)},
    currency_symbols:(v:any)=>{return(v?true:false)},
    misc_technical:(v:any)=>{return(v?true:false)},
    box_drawings:(v:any)=>{return(v?true:false)},
    block_elements:(v:any)=>{return(v?true:false)},
    misc_symbols:(v:any)=>{return(v?true:false)},
    dingbats:(v:any)=>{return(v?true:false)},
}
