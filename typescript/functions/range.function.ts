'use strict';

/**
 * @file
 * @module range
 */

/**
 * Returns a list of numbers within a given start and end point.
 * @function range
 * @example <caption>Example usage of the 'range' function</caption>
 * // returns [1,2,3,4,5,6,7,8,9,10]
 * console.log(range(1,10));
 * @param {number} start The number to start the list with
 * @param {number} end The number to end the list with
 * @param {number} [increment = 1] The amount added to the start to increase the list
 * @example <caption>Example usage of the 'range' function with custom increment</caption>
 * // returns [1,3,5,7,9,10]
 * console.log(range(1,10,2));
 * @param {Array<number>} [exclude] A list of numbers that should not be in the range
 * @example <caption>Example usage of the 'range' function with excluded numbers</caption>
 * // returns [1,3,4,5,6,9,10]
 * console.log(range(1,10,1,[2,7,8]))
 * @returns {Array<number>} A list of numbers within the start and end values
 */
export default function range(start:number,end:number,increment:number=1,exclude?:Array<number>):Array<number>{

    const range:Array<number> = [];

    while(start < end){

        if(!exclude?.includes(start)){
            range.push(start);
        }

        (start+increment)>end?
        start = end:
        start+=increment;

    }

    return range;
}
