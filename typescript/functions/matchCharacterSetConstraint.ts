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

/**
 * @file
 * @module matchCharacterSetConstraint
 */

/**
 * Checks if a given character code matches one of the programs character code constraints.
 *
 * @function matchCharacterSetConstraint
 * @param {number} charCode The number to check
 * @param {characterCodeConstraintsAttributes} constraint The character code constraint object to match against.
 * @returns {number|false} If the `charCode` matched the `constraint` the function will return the `charCode` else `false` will be returned.
 */
export default function matchCharacterSetConstraint(charCode:number,constraint:characterCodeConstraintsAttributes):number|false{

    if(constraint.min > 255) {
        charCode += constraint.min;
    }

    if(
        !constraint.max
        && !constraint.range
        && charCode === constraint.min
    ) {
        return charCode;
    }

    /**
     * If the character code we are looking for exists in a range of codes.
     * If the generated charCode is within the min or max of that range.
     * If the generated charCode is equal to our min or max, we can just return it.
     * Iterate over our range;
     *  If our generated charCode exists somewhere in there, return it.
     */
    if(constraint.range) {
        if(
            (
                constraint.min
                && constraint.max
            )
            && (
                charCode >= constraint.min
                && charCode <= constraint.max
            )
        ) {

            if(
                charCode === constraint.min
                || charCode === constraint.max
            ) {
                return charCode;
            }

            for(let i = 0; i < constraint.range.length; i++) {

                if(
                    (
                        constraint.range[i][0]
                        && constraint.range[i][1]
                    )
                    && (
                        charCode >= constraint.range[i][0]
                        && charCode <= constraint.range[i][1]
                    )
                ) {
                    return charCode;
                } else if(
                    constraint.range[i][0]
                    && charCode === constraint.range[i][0]
                ) {
                    return charCode;
                }

            }

        }
    } else if(
        // ^ Else there was no range attribute and we only need to check the min and max.
        (
            constraint.min
            && constraint.max
        )
        && (
            charCode >= constraint.min
            && charCode <= constraint.max
        )
    ) {
        return charCode;
    }

    return false;
}
