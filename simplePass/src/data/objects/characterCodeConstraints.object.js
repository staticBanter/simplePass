'use strict';
/**
 * @file Contains the code that defines the character-code constraints.
 * @module characterCodeConstraints
 */
/**
 * Interface for an object representing the different type of character code constraints
 *
 * @interface I_charCodeConstraintsAttributes
 * @property {number} [min] The maximum possible character code for a character type.
 * @property {number} [max] The minimum possible character code for a character type.
 * @property {Array<Array<number>>} [range] A list containing all possible minimum
 * and maximum values as a pair for a character type.
 * @property {number} [single] The only possible character code for a character type.
 */
/**
 * Character-code constraint object. Defines the bounds that each character code type exists in.
 *
 * @const {object} characterCodeConstraints
 * @property {object} [lowercase] Basic Latin Lower Alpha character code constraints.
 * @property {object} [uppercase] Basic Latin Upper Alpha character code constraints.
 * @property {object} [numbers] Basic Latin Numeric character code constraints.
 * @property {object} [punctuation] Basic Latin Punctuation character code constraints.
 * @property {object} [whitespace]  Whitespace character code constraint.
 * @implements {I_charCodeConstraintsAttributes}
 *
 */
const characterCodeConstraints = {
    lowercase: {
        min: 97,
        max: 122,
    },
    uppercase: {
        min: 65,
        max: 90,
    },
    numbers: {
        min: 48,
        max: 57,
    },
    punctuation: {
        min: 33,
        max: 126,
        range: [
            [33, 47],
            [58, 64],
            [91, 96],
            [123, 126]
        ]
    },
    whitespace: {
        single: 32
    },
    lowercase_supplement: {
        min: 223,
        max: 255,
        range: [
            [233, 246],
            [248, 255]
        ]
    },
    uppercase_supplement: {
        min: 192,
        max: 222,
        range: [
            [192, 214],
            [216, 222]
        ]
    },
    symbols_supplement: {
        min: 161,
        max: 247,
        range: [
            [161, 191],
            [215],
            [247]
        ]
    }
};
export default characterCodeConstraints;
