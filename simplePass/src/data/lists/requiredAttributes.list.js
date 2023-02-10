'use strict';
/**
 * @file Contains a list of attributes that are required to be in the password modifier.
 * @module requiredAttributes
 */
/**
 * Defines what attributes that are required to be in the password modifier.
 * > Note: Only 1 of these modifiers is required for the program to function.
 *
 * @const {Array<string>} requiredAttributes
 */
const requiredAttributes = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];
export default requiredAttributes;
