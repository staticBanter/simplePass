/**
 * An interface describing the 'Character Code Constraints Attribute' object.
 *
 * @interface characterCodeConstraintsAttributes
 * @property {number} [min] The minimum character code of a character-set.
 * @property {number} [max] The maximum character code of a character-set.
 * @property {Array<Array<number>>} [range] A range of minimum and maximums or single character codes of a character-set.
 * @property {number} [single] A single character code for a single character.
 */

'use strict';

export default interface characterCodeConstraintsAttributes {
    min?:number,
    max?:number,
    range?:Array<Array<number>>
    single?:number
}
