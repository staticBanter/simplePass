'use strict';

import characterCodeConstraintsAttributes from "../interfaces/characterCodeConstraintsAttributes.interface.js";
import range from "../../functions/range.function.js";


/**
 * @file
 * @module characterCodeConstraints
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
 * @property {object} [lowercase_supplement] Basic Latin(1) Supplement Lowercase character code constraints.
 * @property {object} [uppercase_supplement] Basic Latin(1) Supplement Uppercase character code constraints.
 * @property {object} [symbols_supplement] Basic Latin(1) Supplement Signs, Symbols and Punctuation character code constraints.
 * @property {object} [lowercase_extended_a] Latin Extended A Lowercase character code constraints.
 * @property {object} [uppercase_extended_a] Latin Extended A Uppercase character code constraints.
 * @property {object} [ligature_extended_a] Latin Extended A Ligature character code constraints.
 * @implements {characterCodeConstraintsAttributes}
 * @requires range
 *
 */
const characterCodeConstraints:{
    [index:string]:characterCodeConstraintsAttributes|undefined
    lowercase?:characterCodeConstraintsAttributes,
    uppercase?:characterCodeConstraintsAttributes,
    numbers?:characterCodeConstraintsAttributes,
    punctuation?:characterCodeConstraintsAttributes,
    whitespace?:characterCodeConstraintsAttributes
    lowercase_supplement?:characterCodeConstraintsAttributes,
    uppercase_supplement?:characterCodeConstraintsAttributes,
    symbols_supplement?:characterCodeConstraintsAttributes,
    lowercase_extended_a?:characterCodeConstraintsAttributes
    uppercase_extended_a?:characterCodeConstraintsAttributes
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
    lowercase_supplement:{
        min:223,
        max:255,
        range:[
            [233,246],
            [248,255]
        ]
    },
    uppercase_supplement:{
        min:192,
        max:222,
        range:[
            [192,214],
            [216,222]
        ]
    },
    symbols_supplement:{
        min:161,
        max:247,
        range:[
            [161,191],
            [215],
            [247]
        ]
    },
    lowercase_extended_a:{
        min:257,
        max:383,
        range:range(257,312,2,[306,307])
        .concat(range(314,329,2))
        .concat(range(331,375,2,[338,339]))
        .concat(range(378,383,2))
        .map((element:any) => element = [element]),
        offset:256
    },
    uppercase_extended_a:{
        min: 256,
        max: 382,
        range:range(256,310,2,[306,307])
        .concat(range(313,327,2))
        .concat(range(330,374,2,[338,339]))
        .concat([376])
        .concat(range(377,381,2))
        .map((element:any) => element = [element]),
        offset:256
    },
    ligature_extended_a:{
        min:306,
        max:339,
        range:[
           [306],
           [307],
           [338],
           [339]
        ],
        offset:256
    }
};

export default characterCodeConstraints;