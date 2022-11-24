'use strict';

interface I_charCodeConstraintsAttributes {
    min?:number,
    max?:number,
    range?:Array<Array<number>>
    single?:number
}

/**
 * @file Contains the code that defines the character-code constraints.
 * @module characterCodeConstraints
 */

/**
 * Interface for an object representing the different type of character code constraints
 *
 * @interface I_charCodeConstraintsAttributes
 * @property {number} [min] - The maximum possible character code for a character type.
 * @property {number} [max] - The minimum possible character code for a character type.
 * @property {Array<Array<number>>} [range] - A list containing all possible minimum
 * and maximum values as a pair for a character type.
 * @property {number} [single] - The only possible character code for a character type.
 */

/**
 * Character-code constraint object. Defines the bounds that each character code type exists in.
 *
 * @const {object} characterCodeConstraints
 * @property {object} lowercase
 * @property {object} uppercase
 * @property {object} numbers
 * @property {object} punctuation
 * @property {object} whitespace
 * @implements {I_charCodeConstraintsAttributes}
 *
 */
const characterCodeConstraints:{
    [index:string]:I_charCodeConstraintsAttributes|undefined
    lowercase?:I_charCodeConstraintsAttributes,
    uppercase?:I_charCodeConstraintsAttributes,
    numbers?:I_charCodeConstraintsAttributes,
    punctuation?:I_charCodeConstraintsAttributes,
    whitespace?:I_charCodeConstraintsAttributes
} = {
    lowercase:{
        min:97,
        max:122,
    },
    uppercase:{
        min:65,
        max:90,
    },
    numbers:{
        min:48,
        max:57,
    },
    punctuation:{
        min:33,
        max:126,
        range:[
            [33,47],
            [58,64],
            [91,96],
            [123,126]
        ]
    },
    whitespace:{
        single:32
    },
}

export default characterCodeConstraints;