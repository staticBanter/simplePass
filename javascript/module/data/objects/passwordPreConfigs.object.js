'use strict';
/**
 * @file
 * @module passwordPreConfigs
 */
/**
 * @const {object} passwordPreConfigs An object representing sets of pre-configured password modifiers.
 * Pre-configs will override any modifier with the same attribute name, and will remove any attributes that are not
 * apart of the pre-config, unless specifically specified.
 * @property {object} [default] The default simplePass pre-config.
 * @property {object} [fourDigitPin] A pre-config for four digit pins.
 * @property {object} [defaultSupplement1] An alternate version of the default pre-config using Basic Latin 1 Supplement characters.
 * @property {object} [extreme] A pre-config that utilize a large portion of the simplePass feature set while generating the largest possible password.
 */
const passwordPreConfigs = {
    default: {
        length: 22,
        numbers: true,
        lowercase: true,
        uppercase: true,
        punctuation: true
    },
    fourDigitPin: {
        numbers: true,
        length: 4
    },
    defaultSupplement1: {
        length: 22,
        numbers: true,
        symbols_supplement: true,
        lowercase_supplement: true,
        uppercase_supplement: true,
    },
    extreme: {
        length: 256,
        numbers: true,
        lowercase: true,
        uppercase: true,
        punctuation: true,
        lowercase_supplement: true,
        uppercase_supplement: true,
        symbols_supplement: true,
        max_repeatingCharacter: Math.floor(Math.random() * (13 - 5 + 1) + 5),
        whitespaceBetween: true,
        max_whitespaceBetween: Math.floor(Math.random() * (10 - 2 + 1) + 2),
    }
};
export default passwordPreConfigs;
