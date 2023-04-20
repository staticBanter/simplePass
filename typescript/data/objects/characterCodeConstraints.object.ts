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
    },
    lowercase_extended_b: {
        min:384,
        max:591,
        range: [
            [384],
            [387],
            [389],
            [392],
            [396, 397],
            [402],
            [405],
            [409, 411],
            [414],
            [417],
            [419],
            [421],
            [427],
            [432],
            [436],
            [438],
            [441, 442],
            [445],
            [454],
            [457],
            [460],
            [496],
            [499],
            [501],
            [572],
            [589],
            [591],
            [578],
            [563, 569],
            [575, 576],
            [585],
            [587],
            [583]
        ]
        .concat(range(462, 476, 2, undefined, true))
        .concat(range(479, 495, 2, undefined, true))
        .concat(range(505, 561, 2, undefined, true)),
        offset:384,
    },
    uppercase_extended_b: {
        min: 385,
        max: 590,
        range: [
            [444]
        ].concat(range(
            385,
            408,
            1,
            [
                387,
                389,
                392,
                396,
                397,
                402,
                405
            ],
            true
        ))
            .concat(range(
                412,
                440,
                1,
                [
                    414,
                    417,
                    419,
                    421,
                    422,
                    424,
                    426,
                    427,
                    429,
                    432,
                    436,
                    438
                ],
                true
            ))
            .concat(range(
                452,
                458,
                1,
                [
                    453,
                    454,
                    456,
                    459
                ],
                true
            ))
            .concat(range(
                461,
                475,
                2,
                undefined,
                true,
            ))
            .concat(range(
                478,
                494,
                2,
                undefined,
                true
            )).concat(range(
                497,
                504,
                1,
                [
                    498,
                    499,
                    501
                ],
                true
            )).concat(range(
                506,
                562,
                2,
                undefined,
                true
            )).concat(range(
                570,
                590,
                1,
                [
                    572,
                    575,
                    576,
                    578,
                    583,
                    585,
                    587,
                    589
                ],
                true,
            )),
        offset: 385,
    },
    mixedcase_extended_b: {
        min: 453,
        max: 498,
        range: [
            [453],
            [456],
            [459],
            [498],
        ],
        offset:453,
    },
    insensitivecase_extended_b: {
        min: 422,
        max: 451,
        range: [
            [422],
            [426],
            [443],
            [446,451]
        ],
        offset: 422,
    },
    character_modifier_letters: {
        min: 688,
        max: 739,
        range: [
            [688, 696],
            [737, 739]
        ],
        offset:688,
    },
    symbol_modifier_letters: {
        min: 697,
        max: 767,
        range: [
            [697, 736],
            [740,767],
        ],
        offset: 697,
    }
};

export default characterCodeConstraints;