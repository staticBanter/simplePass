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
/**
 * An interface representing the 'Strength Check Compression' object.
 * This object is used to define what elements the program should use to inject password strength compression stats.
 *
 * @interface strengthCheckCompression
 * @property {string} [gzipTarget] The target element for GZIP value.
 * @property {string} [deflateTarget] The target element for deflate value.
 * @property {string} ['deflate-rawTarget'] The target element for deflate-raw value.
 * @property {string} [average] The target element for the average compression value.
 */
/**
 * An interface representing the 'Strength Check Targets' object.
 * This object is used to define what elements the program should use to inject password strength stats.
 *
 * @interface strengthCheckTargets
 * @property {string} [entropyTarget] Entropy stat target.
 * @property {string} [possibleCombinationsTarget] Possible Combination Target stat target.
 * @property {string} [binaryStringLengthTarget] Binary String Target stat target.
 * @property {string} [binaryStringTarget] Binary String Length Target stat target.
 * @property {string} [averageCharacterBitLengthTarget] Average Character Bit Length stat target.
 * @property {string} [uniqueCharacterPercentageTarget] Unique Character Percentage stat target.
 * @property {strengthCheckCompression} [compression] An object defining the types of compression checks you wish to preform.
 */
'use strict';
export {};
