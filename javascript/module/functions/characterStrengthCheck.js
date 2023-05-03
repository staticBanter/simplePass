'use strict';
/**
 * @file
 * @module characterStrengthCheck
 */
/**
 * This function checks if a given string is within a certain range and is using a good mix of
 * repeating and unique characters.
 *
 * @function characterStrengthCheck
 * @param {string} password The password string to check
 * @param {characterStrengthCheckConstraints} constraints An [object]{@link characterStrengthCheckConstraints} describing the constraints the password was created under.
 * @returns {number} The character score for the password
 */
export default function characterStrengthCheck(password, constraints = {
    min_passwordLength: 3,
    max_passwordLength: 256
}) {
    const uniqueCharacters = [];
    for (let i = 0; i < password.length; i++) {
        if (!uniqueCharacters.includes(password.charAt(i))) {
            uniqueCharacters.push(password.charAt(i));
        }
    }
    const uniqueCharactersAverage = uniqueCharacters.length / password.length;
    const repeatingCharacterAverage = (password.length - uniqueCharacters.length) / password.length;
    let min_passwordLengthAverage = password.length / constraints.min_passwordLength;
    // Achieving higher than 100% throws off other calculations.
    if (min_passwordLengthAverage > 1) {
        min_passwordLengthAverage = 1;
    }
    const max_passwordLengthAverage = password.length / constraints.max_passwordLength;
    return (((((uniqueCharactersAverage
        + repeatingCharacterAverage) / 2)
        + min_passwordLengthAverage
        + max_passwordLengthAverage) / 3) * 100);
}
