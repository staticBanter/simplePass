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
 * @property {object} [bios] A pre-config that should generate passwords compatible with all motherboard bios.
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
    bios: {
        length: 20,
        lowercase: true,
        uppercase: true,
        numbers: true,
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
