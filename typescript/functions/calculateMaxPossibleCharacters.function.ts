'use strict';

import characterCodeConstraints from "../data/objects/characterCodeConstraints.object.js";
import characterCodeConstraintsAttributes from "../data/interfaces/characterCodeConstraintsAttributes.interface.js";
import whitespaceAttributes from "../data/lists/whitespaceAttributes.list.js";
import useableAttributes from "../data/lists/useableAttributes.list.js";
import characterSetObject from "../data/interfaces/characterSetObject.interface.js";

/**
 * @file
 * @module calculateMaxPossibleCharacters
 */


/**
 * Calculates the maximum amount of possible characters that can be used within a given character-set.
 *
 * @function calculateMaxPossibleCharacters
 * @param {characterSetObject} characterSetObject An [object]{@link module:characterSetObject} describing the usable characters and character-sets.
 * @requires characterCodeConstraints
 * @implements {characterCodeConstraintsAttributes}
 * @requires whitespaceAttributes
 * @requires useableAttributes
 * @returns {number} The number of usable characters minus any exclusions.
 */
export default function calculateMaxPossibleCharacters(characterSetObject:characterSetObject):number{

    let maxPossibleCharacters = 0;
    let whiteSpaceFlag = false;

    characterSetObject.characterSets.forEach((set:string)=>{

        if(useableAttributes.includes(set)){
            if(whitespaceAttributes.includes(set)){
                // Only count whitespace once.
                if(!whiteSpaceFlag){
                    set = 'whitespace';
                    whiteSpaceFlag = true;
                }else{
                    set = '';
                }
            }

            const constraint:characterCodeConstraintsAttributes|undefined = characterCodeConstraints[set]

            if(constraint){
                if(constraint.range){
                    constraint.range.forEach((range)=>{
                        if(
                            range[0]
                            && range[1]
                        ){
                            maxPossibleCharacters += (range[1]-range[0]);
                        }else if(range[0]){
                            maxPossibleCharacters++;
                        }
                    })
                }else if(
                    constraint.min
                    && constraint.max
                ){
                    maxPossibleCharacters += (constraint.max-constraint.min);
                }else if(constraint.single){
                    maxPossibleCharacters++;
                }
            }
        }
    });

    if(
        characterSetObject.excludeCharacters
        && characterSetObject.excludeCharacters.length > 0
    ){
        maxPossibleCharacters -= characterSetObject.excludeCharacters.length;
    }

    return maxPossibleCharacters;

}