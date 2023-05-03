/**
 * An interface for describing the 'Strength Checker Constraints' object.
 *
 * @interface strengthCheckerConstraints
 * @property {object} characterSets An object describing the character-sets available.
 * @property {string} excludeCharacters A string that contains any characters to exclude.
 * @property {number} min_length The minimum length the password can be.
 * @property {number} max_length The maximum length the password can be.
 */

'use strict';

export default interface strengthCheckerConstraints {
    characterSets:{
        used:Array<string>,
        available:Array<string>
    }
    excludeCharacters?:string,
    min_length:number,
    max_length:number
}