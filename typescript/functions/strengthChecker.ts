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

import strengthCheckedPassword from "../data/interfaces/strengthCheckedPassword.js";
import strengthCheckerConstraints from "../data/interfaces/strengthCheckerConstraints.js";
import calculateMaxPossibleCharacters from "./calculateMaxPossibleCharacters.js";

/**
 * @file
 * @module strengthChecker
 */

/**
 * A that provides various form of information about a password such as the:
 * - Bits of entropy calculated as ```E = l(log2(p))```; where:
 *  - *E* = Entropy of the password,
 *  - *l* = Length of the password,
 *  - *p* = Is the number of Possibilities (number of possible characters).
 * - Possible combinations for the password,
 * - Binary string representation of the password,
 * - Length of the binary string,
 * - Average bit length of each character.
 * @function strengthChecker
 * @param {string} password The password to check the strength of.
 * @param {strengthCheckerConstraints} constraints An [object]{@link module:strengthCheckerConstraints} representing constraints the password was created under.
 * @requires calculateMaxPossibleCharacters
 * @returns {strengthCheckedPassword} An [object]{@link module:strengthCheckedPassword} containing the strength checked password, its strength score, and the bit entropy of the password.
 */
export default function strengthChecker (
    password: string,
    constraints: strengthCheckerConstraints,
    compressions?:Array<CompressionFormat>
): strengthCheckedPassword | Promise<strengthCheckedPassword> {

    const numberOfCharacters: number = calculateMaxPossibleCharacters(
        {
            characterSets: constraints.characterSets.used
                .filter((item) => {
                    return constraints.characterSets.available.includes(item);
                }),
            excludeCharacters: constraints.excludeCharacters
        }
    );

    const binaryStringDelimiter: string = ' ';

    const binaryString: string = password.split('')
        .map((char) => {
            const bin = char.charCodeAt(0).toString(2);
            return (
                (
                    Array(
                        (
                            Math.ceil(bin.length / 8) * 8
                        )
                        - bin.length + 1
                    )
                        .join("0")
                )
                + bin
            );
        })
        .join(binaryStringDelimiter);

    let averageBitLength: number = 0;

    binaryString.split(binaryStringDelimiter)
        .forEach((byte: string) => {
            averageBitLength += byte.length;
        });

    let uniqueCharacters: string = '';

    password.split('').forEach(element => {
        if(!uniqueCharacters.includes(element)) {
            uniqueCharacters += element;
        }
    });

    if(compressions){

        const compressionResponses:Array<Promise<ArrayBuffer>> = [];

        for(let i =0; i<compressions.length; i++){
            const byteArray = new TextEncoder().encode(password);
            const cs = new CompressionStream(compressions[i]);
            const writer = cs.writable.getWriter();
            writer.write(byteArray);
            writer.close();
            compressionResponses.push(new Response(cs.readable).arrayBuffer());
        }

        if(compressions.length){

            return Promise.all(compressionResponses)
            .then((compressionBuffers:Array<ArrayBuffer>)=>{

                const compressionStats:{
                    [index:string]:number
                } = {};

                let averageCompression = 0;

                compressions.forEach((compression:CompressionFormat,index:number)=>{
                    compressionStats[compression] = compressionBuffers[index].byteLength;
                    averageCompression += compressionBuffers[index].byteLength;
                });

                compressionStats['average'] = (averageCompression / compressionBuffers.length);

                return {
                    password: password,
                    entropy: (password.length * Math.log2(numberOfCharacters)),
                    possibleCombinations: (numberOfCharacters ** password.length),
                    binaryStringLength: binaryString.replaceAll(binaryStringDelimiter, '').length,
                    binaryString: binaryString,
                    averageCharacterBitLength: (averageBitLength / password.length),
                    uniqueCharactersPercentage: ((uniqueCharacters.length / password.length) * 100),
                    compressionStats:compressionStats
                };

            });

        }

    }

    return {
        password: password,
        entropy: (password.length * Math.log2(numberOfCharacters)),
        possibleCombinations: (numberOfCharacters ** password.length),
        binaryStringLength: binaryString.replaceAll(binaryStringDelimiter, '').length,
        binaryString: binaryString,
        averageCharacterBitLength: (averageBitLength / password.length),
        uniqueCharactersPercentage: ((uniqueCharacters.length / password.length) * 100),
    };

}
