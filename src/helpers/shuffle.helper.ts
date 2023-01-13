'use strict';
/**
 * @file Contains the Fisher Yates shuffle helper function.
 * @module shuffle
 */

/**
 * A [Fisher Yates shuffle]{@link https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle} function.
 *
 * @function shuffle
 * @param {Array<any>} array A list that needs to be shuffled
 * @returns {Array<any>} The shuffled list.
 */
export default function shuffle(array:Array<any>):Array<any> {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}