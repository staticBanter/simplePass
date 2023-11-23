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

import characterCodeConstraintsAttributes from "../data/interfaces/characterCodeConstraintsAttributes.js";
import characterSetObject from "../data/interfaces/characterSetObject.js";
import characterCodeConstraints from "../data/objects/characterCodeConstraints.js";
import uniqueCharacterFilter from "./uniqueCharacterFilter.js";

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
 * @requires uniqueCharacterFilter
 * @returns {number} The number of usable characters minus any exclusions.
 */
export default function calculateMaxPossibleCharacters(characterSetObject:characterSetObject):number{

    let maxPossibleCharacters:number = 0;
    let whiteSpaceFlag:boolean = false;

    characterSetObject.characterSets.forEach((set:string)=>{

        if(set === 'whitespace'){
            // Only count whitespace once.
            if(whiteSpaceFlag){
                return;
            }
            maxPossibleCharacters++;
            whiteSpaceFlag = true;
            return;
        }

        const constraint:characterCodeConstraintsAttributes|undefined = characterCodeConstraints[set]

        if(constraint){
            if(constraint.range){
                constraint.range.forEach((range)=>{
                    if(
                        range[0]
                        && range[1]
                    ){
                        maxPossibleCharacters += (range[1]-range[0])+1;
                    }else if(range[0]){
                        maxPossibleCharacters++;
                    }
                });
            }else if(
                !constraint.range
                && constraint.min
                && constraint.max
            ){
                maxPossibleCharacters += (constraint.max-constraint.min)+1;
            }else if(
                !constraint.range
                && !constraint.max
            ){
                maxPossibleCharacters++;
            }
        }

    });

    if(
        characterSetObject.excludeCharacters
        && characterSetObject.excludeCharacters.length > 0
    ){

        maxPossibleCharacters -= uniqueCharacterFilter(characterSetObject.excludeCharacters).length;
    }

    return maxPossibleCharacters;

}
