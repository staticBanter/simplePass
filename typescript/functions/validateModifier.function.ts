'use strict';

import passwordModifier from "../data/interfaces/passwordModifier.interface.js";
import useableAttributes from "../data/lists/useableAttributes.list.js";
import requiredAttributes from "../data/lists/requiredAttributes.list.js";
import config from "../simplePass.config.js";

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
 * @requires createMessage
 * @requires config
 * @requires useableAttributes
 * @requires requiredAttributes
 * @throws {errors.invalidAttributeType} Will throw an error if a modifier attribute is not a valid type.
 * @throws {errors.outOfBoundsAttributeValue} Will throw an error if a modifier attribute is out of its allowed value bounds.
 * @throws {errors.toManyAttributes} Will throw an error if the modifier contains more attributes than the password can contain.
 * @throws {errors.missingRequiredAttribute} Will throw an error if a modifier attribute is missing another attribute that needs to be present.
 * @throws {errors.excludeCharactersContainedWhitespace} Will throw an error if the ```excludeCharacters``` attribute contains a whitespace.
 * @returns {void}
 */
export default function validateModifier(
    modifier: passwordModifier,
): void {

    // Check if the password will be long enough to contain all the attributes.
    let modifierCount: number = Object.keys(modifier)
        .filter((item: string) => {
            return useableAttributes.includes(item);
        })
        .length;

    if (
        modifier.preConfig
        &&
        (
            typeof (modifier.preConfig) !== 'string'
            || (
                !modifier.preConfig.length
                || modifier.preConfig.length <= 0
            )
        )
    ) {

        if (typeof (modifier.preConfig) !== 'string') {
            throw {
                errorKey: 'invalidAttributeType',
                replacements:['vM','16','preConfig','string']
            }
        }
    }

    // Check if the password should contain repeating characters
    if(modifier.repeatingCharacter){

        /**
         * Determine if we are:
         *  Custom Repeating Characters
         *  Repeating random characters in the already generated password.
         *  Repeating a single character in the password.
         * * Note: It needs to be checked in this order.
         */
        if(modifier.customRepeatingCharacters){
        // ^ Custom Repeating Characters

            // No string, bye bye...
            if (typeof (modifier.customRepeatingCharacters) !== 'string') {
                throw {
                    errorKey:'invalidAttributeType',
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
            if(modifier.customRepeatingCharacters.includes(' ')){

                // Initialize a holding array.
                const repeatingSets:Array<Array<string>> = [];

                // Split the string along the spaces.
                modifier.customRepeatingCharacters.split(' ').forEach((set:string)=>{

                    /**
                     * IF any sets contains a literal character identifier "\" or ":".
                     * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                     */
                    if(set.includes('\\')){

                        /**
                         * Extract the character.
                         * * Note: only the second character in the string is being sliced.
                         * * We are assuming that the first character will be our identifier "\",
                         * * the second character will be our literal.
                         */
                        const literal:string = set.slice(1,2);

                        // Remove the first instance of our literal character.
                        set = set.replace(literal,'');


                        const pieces:Array<string> = set.split(':');

                        if(pieces.length > 2){
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }

                        /**
                         * Add the literal character and it's repeats to the holding array.
                         */
                        repeatingSets.push([literal,pieces[1]]);

                    }else{
                    // ^ There shouldn't be a literal ":" (colon) in the string.


                        let pieces = set.split(':');

                        if(pieces.length > 2){
                            throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                        }

                        // Push the set to the array.
                        repeatingSets.push([pieces[0],pieces[1]]);

                    }

                });

                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;

                modifier.customRepeatingCharacters.forEach((set)=>{

                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     * * Note
                     */
                    if(
                        !set[1]
                        || parseInt(set[1]) <= 1
                    ){
                        set[1] = '2';
                    }

                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     * @ignore
                     */
                    modifierCount += parseInt(set[1]);
                });

            }else if(modifier.customRepeatingCharacters.includes(':')){
            // ^ Single custom repeat.

                // Initialize a holding array.
                const repeatingSets:Array<Array<string>> = [];

                /**
                 * IF any sets contains a literal character identifier "\" or ":".
                 * ELSE we shouldn't need to worry about splitting the string along the wrong character.
                 */
                if(modifier.customRepeatingCharacters.includes('\\')){

                    /**
                     * Extract the character.
                     * * Note: only the second character in the string is being sliced.
                     * * We are assuming that the first character will be our identifier "\",
                     * * the second character will be our literal.
                     */
                    const literal = modifier.customRepeatingCharacters.slice(1,2);

                    // Remove the first instance of our literal character.
                    modifier.customRepeatingCharacters = modifier.customRepeatingCharacters.replace(literal,'');


                    const pieces = modifier.customRepeatingCharacters.split(':');

                    if(pieces.length > 2){
                        throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                    }

                    // Push the set to the array.
                    repeatingSets.push([literal,pieces[1]]);

                }else{
                // ^ There shouldn't be a literal ":" (colon) in the string.


                    const pieces = modifier.customRepeatingCharacters.split(':');

                    if(pieces.length > 2){
                        throw new Error('Custom Character Repeats contained an unescaped ":" (colon).');
                    }

                    // Push the set to the array.
                    repeatingSets.push([pieces[0],pieces[1]]);

                }

                // Set the modifiers custom repeating characters to the holding array.
                modifier.customRepeatingCharacters = repeatingSets;

                modifier.customRepeatingCharacters.forEach((set)=>{

                    /**
                     * If the repeats wasn't their or less than 1,
                     * Set repeats too 2.
                     */
                    if(
                        !set[1]
                        || parseInt(set[1]) <= 1
                    ){
                        set[1] = '2';
                    }

                    /**
                     * Every repeating character replaces a potential password modification that can be added,
                     * therefore we need to increase the modifier count accordingly
                     * @ignore
                     */
                    modifierCount += parseInt(set[1]);
                });

            }else{
            // ^ String of repeating characters.

                /**
                 * Every repeating character replaces a potential password modification that can be added,
                 * therefore we need to increase the modifier count accordingly
                 * @ignore
                 */
                modifierCount += (modifier.customRepeatingCharacters.length * 2);

            }

        }else if(modifier.max_repeatingCharacter){
        // ^ Repeating random characters in the already generated password.

            // If our Repeating Character Limit is not a string or a number throw an error.
            if(
                typeof(modifier.max_repeatingCharacter) !== 'number'
                && typeof(modifier.max_repeatingCharacter) !== 'string'
            ) {
                throw {
                    errorKey:'invalidAttributeType',
                    replacements:['vM','13','max_repeatingCharacter','number or string']
                };
            }

            // Convert strings to ints.
            if(typeof(modifier.max_repeatingCharacter)==='string'){
                modifier.max_repeatingCharacter = parseInt(modifier.max_repeatingCharacter);
            }

            /**
             * TODO: check the min and max values for the repeating character limit
             * this values should be dynamic based on the min and max password length values.
             */
            // Ensure the Repeating Character Limit is within a reasonable range.
            if(
                modifier.max_repeatingCharacter < 1
                || modifier.max_repeatingCharacter > 255
            ) {
                throw {
                    errorKey:'outOfBoundsAttributeValue',
                    replacements:['vM','14','max_repeatingCharacter']
                };
            }

            // Check if the requested password length can contain the amount of repeated characters.
            if (modifier.length < (modifier.max_repeatingCharacter * 2)) {
                throw {
                    errorKey:'The password can not contain the requested amount of repeating characters.'
                };
            }

            /**
             * Every repeating character replaces a potential password modification that can be added,
             * therefore we need to increase the modifier count accordingly
             * @ignore
             */
            modifierCount += modifier.max_repeatingCharacter;

        }else{
        // ^ Repeating a single character in the password.

            modifierCount++;

        }

    }

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
        throw {
            errorKey:'invalidAttributeType',
            replacements:['vM','1','length','string or number']
        };

    }else{

        if(typeof(modifier.length) === 'string'){

            const length = parseInt(modifier.length);

            if(
                length > config.max_passwordLength
                || length < config.min_passwordLength
            ) {

                throw {
                    errorKey:'invalidAttributeType',
                    replacements:['vM','1','length','string or number']
                };

            }
        }else{

            if(
                modifier.length > config.max_passwordLength
                || modifier.length < config.min_passwordLength
            ) {

                throw {
                    errorKey:'outOfBoundsAttributeValue',
                    replacements:['vM','2','length']
                };

            }

        }

        if (modifierCount > modifier.length) {

            throw {
                errorKey: 'toManyAttributes',
                replacements: ['vM','3',`${modifier.length}`,`${modifierCount}`]
            }

        }
    }

    /**
     * If the 'white-space between' attribute is set,
     * and if the 'white-space between limit' attribute is not set,
     * throw an error.
     */
    if(modifier.w_between){

        if (!modifier.max_whitespaceBetween) {

            throw {
                errorKey:'missingRequiredAttribute',
                replacements:['vM','11','max_whitespaceBetween','w_between']
            };

        }

        /**
         * Ensure the 'white-space between limit' attribute is proper type
         * and within acceptable values.
         */
        if(
            typeof(modifier.max_whitespaceBetween) !== 'string'
            && typeof(modifier.max_whitespaceBetween) !== 'number'
        ) {

            throw {
                errorKey:'invalidAttributeType',
                replacements:['vM','4','max_whitespaceBetween','string or number']
            };

        }else{

            if(typeof(modifier.max_whitespaceBetween) === 'string'){

                const max_whitespaceBetween = parseInt(modifier.max_whitespaceBetween);

                if(
                    max_whitespaceBetween > config.max_whitespaceBetween()
                    || max_whitespaceBetween < config.min_whitespaceBetween()
                ) {

                    throw {
                        errorKey:'outOfBoundsAttributeValue',
                        replacements:['vM','5','max_whitespaceBetween']
                    };

                }

            }else{

                if(
                    modifier.max_whitespaceBetween > config.max_whitespaceBetween()
                    || modifier.max_whitespaceBetween < config.min_whitespaceBetween()
                ) {
                    throw {
                        errorKey:'outOfBoundsAttributeValue',
                        replacements:['vM','6','max_whitespaceBetween']
                    };

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
            return requiredAttributes.includes(array);
        })
    ) {
        throw {
            errorKey: 'missingRequiredAttributes',
            replacements:['vM','7',requiredAttributes.toString()]
        }
    }

    /**
     * If the 'exclude characters' attributes is set,
     * ensure it is the proper type,
     * is not blank,
     * its length is within proper range,
     * and does not contain any whitespace.
     */
    if (modifier.excludeCharacters) {

        if (
            typeof (modifier.excludeCharacters) !== 'string'
        ) {
            throw {
                errorKey: 'invalidAttributeType',
                replacements:['vM','8','excludeCharacters','string']
            }
        }

        if(
            !modifier.excludeCharacters.length
            && modifier.excludeCharacters.length <= 0
        ) {

            throw {
                errorKey: 'outOfBoundsAttributeValue',
                replacements:['vM','9','excludeCharacters']
            }

        }

        if (new RegExp(/[\s]/g).test(modifier.excludeCharacters)) {

            throw {
                errorKey: 'excludeCharactersContainedWhitespace',
                replacements:['vM','10']
            }

        }

    }

}