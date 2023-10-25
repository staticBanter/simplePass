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

import calculateMaxPossibleCharacters from "./calculateMaxPossibleCharacters.js";
import strengthScores from "../data/objects/strengthScores.js";
import characterStrengthCheck from "./characterStrengthCheck.js";
import strengthCheckerStyling from "../data/interfaces/strengthCheckerStyling.js";
import strengthCheckedPassword from "../data/interfaces/strengthCheckedPassword.js";
import strengthCheckerConstraints from "../data/interfaces/strengthCheckerConstraints.js";




function DTMS(element:HTMLElement,styles:object){

    console.log(Object.assign(element.style,styles));

}

/**
 * @file
 * @module strengthChecker
 */

/**
 * A function to determine the strength of a password. Preforms 2 types of checks:
 * - Bits of entropy calculated as ```E =(Pl(log(Pc)))/log(2)```; where:
 *  - *E* = Entropy
 *  - *Pl* = Password length
 *  - *Pc* = Total amount of characters that can be used.
 * - Character length and uniques check.
 *  - Ensures the password is long enough
 *  - Ensure the password is using a good amount of repeating and unique characters.
 * It returns the average of these two scores as the passwords strength.
 * It also returns the just the Bit Entropy of the password as well (as this is mainly what people use).
 * This function may optionally style a given element based on the strength score of the password.
 * @function strengthChecker
 * @param {string} password The password to check the strength of.
 * @param {strengthCheckerConstraints} constraints An [object]{@link module:strengthCheckerConstraints} representing constraints the password was created under.
 * @param {strengthCheckerStyling} [styling] An [object]{@link module:strengthCheckerStyling} describing if and what elements should be styled to visually represent the passwords strength.
 * @requires calculateMaxPossibleCharacters
 * @requires strengthScores
 * @requires characterStrengthCheck
 * @returns {strengthCheckedPassword} An [object]{@link module:strengthCheckedPassword} containing the strength checked password, its strength score, and the bit entropy of the password.
 */
export default function strengthChecker(
    password:string,
    constraints:strengthCheckerConstraints,
    styling?:strengthCheckerStyling
):strengthCheckedPassword{

    let strengthScore = 0;

    // Entropy Check.
    const entropy = (
        password.length*Math.log(
            calculateMaxPossibleCharacters(
                {
                    characterSets:constraints.characterSets.used
                    .filter((item)=>{
                        return constraints.characterSets.available.includes(item);
                    }),
                    excludeCharacters:constraints.excludeCharacters
                }
            )
        )
        /Math.log(2)
    );

    strengthScore += entropy;


    strengthScore += characterStrengthCheck(
        password,
        {
            min_passwordLength:constraints.min_length,
            max_passwordLength:constraints.max_length
        }
    );

    strengthScore = (strengthScore / 2);

    if(
        styling
        && styling.styleTarget
    ){

        let colour = '';
        let score = '';

        /**
         * TODO: Improve this mess.
         */
        if(strengthScore <= strengthScores.bad.score){
            colour = strengthScores.bad.colour
            score = 'bad'
        }else if(
            (strengthScore > strengthScores.bad.score)
            && (strengthScore <= strengthScores.modest.score)
        ){
            colour = strengthScores.modest.colour
            score = 'modest';
        }else if(
            (strengthScore > strengthScores.modest.score)
            && (strengthScore <= strengthScores.ok.score)
        ){
            colour = strengthScores.ok.colour
            score = 'ok';
        }else if(
            (strengthScore > strengthScores.ok.score)
            && (strengthScore <= strengthScores.good.score)
        ){
            colour = strengthScores.good.colour;
            score = 'good';
        }else{
            /**
             * ^ Yes we could preform checks to ensure the score falls within our range,
             * but that is kind of redundant.
             */
            colour = strengthScores.excellent.colour;
            score = 'excellent';
        }

        styling.styleType==="inline"?
        Object.assign(styling.styleTarget.style,{color:colour}):
        (
            styling.styleTarget.classList.add('strengthChecked'),
            styling.styleTarget.dataset.score = score
        );

    }

    return {
        password:password,
        strengthScore:strengthScore,
        entropy:entropy,
    }
}
