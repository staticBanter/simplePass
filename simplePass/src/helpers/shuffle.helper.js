'use strict';
/**
 * @file Fisher-Yates Shuffle helper function.
 * @module shuffle
 */
/**
 * A fisher yates shuffle function.
 *
 * @function shuffle
 * @param {Array<any>} array - A list that needs to be shuffled
 * @returns {Array<any>} - The shuffled list.
 */
export default function shuffle(array) {
    let currentIndex = array.length, randomIndex;
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
