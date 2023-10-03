'use strict';

import characterCodeConstraintsAttributes from "../interfaces/characterCodeConstraintsAttributes.js";
import range from "../../functions/range.js";


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
        min:32
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
    },
    ligature_extended_a:{
        min:306,
        max:339,
        range:[
           [306],
           [307],
           [338],
           [339]
        ]
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
        .concat(range(505, 561, 2, undefined, true))
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
            ))
    },
    mixedcase_extended_b: {
        min: 453,
        max: 498,
        range: [
            [453],
            [456],
            [459],
            [498],
        ]
    },
    insensitivecase_extended_b: {
        min: 422,
        max: 451,
        range: [
            [422],
            [426],
            [443],
            [446,451]
        ]
    },
    lowercase_ipa_extension:{
        min: 592,
        max: 683,
        range: [
            [592,659],
            [665,672],
            [675,683]
        ]
    },
    uppercase_ipa_extension:{
        min:660,
        max:685,
        range:[
            [660,664],
            [673,674],
            [684,685]
        ]
    },
    character_modifier_letters: {
        min: 688,
        max: 739,
        range: [
            [688, 696],
            [737, 739]
        ]
    },
    symbol_modifier_letters: {
        min: 697,
        max: 767,
        range: [
            [697, 736],
            [740,767],
        ]
    },
    lowercase_greek_coptic: {
        min: 881,
        max: 1019,
        range: [
            [881],
            [883],
            [887],
            [912],
            [940, 974],
            [1016],
            [1019]
        ].concat(range(985, 107, 2, undefined, true))
    },
    uppercase_greek_coptic: {
        min: 880,
        max: 1018,
        range: [
            [880],
            [882],
            [886],
            [902],
            [904, 906],
            [908],
            [910, 911],
            [913, 929],
            [931, 939],
            [1015],
            [1018]
        ].concat(range(994,1004,2,undefined,true))
    },
    insensitivecase_greek_coptic: {
        min: 984,
        max: 1011,
        range: [
            [1011]
        ].concat(range(984,992,2,undefined,true))
    },
    symbol_greek_coptic: {
        min: 884,
        max: 1020,
        range: [
            [884, 885],
            [890, 894],
            [900,901],
            [903],
            [975, 983],
            [988],
            [1008, 1014],
            [1020,1023]
        ]
    },
    lowercase_cyrillic: {
        min: 1072,
        max: 1279,
        range: [
            [1072, 1119]
        ]
        .concat(
            range(
                1121,
                1153,
                2,
                undefined,
                true
            )
        )
        .concat(
            range(
                1163,
                1215,
                2,
                [
                    1189,
                    1205,
                ],
                true
            )
        ).concat(
            range(
                1218,
                1230,
                2,
                undefined,
                true,
            )
        )
        .concat(
            range(
                1231,
                1279,
                2,
                [
                    1237,
                ],
                true
            )
        )
    },
    uppercase_cyrillic: {
        min: 1024,
        max: 1278,
        range: [
            [1024, 1071],
        ]
        .concat(range(
            1120,
            1214,
            2,
            [
                1154,
                1156,
                1158,
                1160,
                1188,
                1204,
            ],
            true
        ))
        .concat(range(
            1217,
            1229,
            2,
            undefined,
            true
        ))
        .concat(range(
            1232,
            1278,
            2,
            [
                1236,

            ],
            true
        ))
    },
    symbols_cyrillic: {
        min: 1154,
        max: 1237,
        range: [
            [1154],
            [1188, 1189],
            [1204, 1205],
            [1236, 1237]
        ]
    },
    lowercase_cyrillic_supplement: {
        min:1281,
        max:1319,
        range: range(1281,1319,2,undefined,true)
    },
    uppercase_cyrillic_supplement: {
        min:1280,
        max:1319,
        range: range(1280,1319,2,undefined,true)
    },
    misc_cyrillic_supplement: {
        min:1320,
        max:1327
    },
    general_punctuation:{
        min:8208,
        max:8286,
        range:[
            [8208,8231],
            [8240,8286]
        ]
    },
    currency_symbols:{
        min:8352,
        max:8383,
        range:[
            [8352,8371],
            [8373,8383]
        ]
    },
    misc_technical:{
        min:8960,
        max:9215,
    },
    box_drawings:{
        min:9472,
        max:9599
    },
    block_elements:{
        min:9600,
        max:9631
    },
    misc_symbols:{
        min:9728,
        max:9983,
        range:[
            [9728,9897],
            [9899,9983]
        ]
    },
    dingbats:{
        min:9984,
        max:10175
    },

};

export default characterCodeConstraints;
