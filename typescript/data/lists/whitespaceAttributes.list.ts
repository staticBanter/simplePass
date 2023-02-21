'use strict';

/**
 * @file
 * @module whitespaceAttributes
 */

/**
 * Defines what attributes are considered white-space attributes.
 * - ```whitespaceBeginning```
 * - ```whitespaceEnd```
 * - ```whitespaceBetween```
 * - ```required_whitespaceEnd```
 * - ```required_whitespaceBeginning```
 * @const {Array<string>} whitespaceAttributes
 */
const whitespaceAttributes:Array<string> = [
    'whitespaceBeginning',
    'whitespaceEnd',
    'whitespaceBetween',
    'required_whitespaceEnd',
    'required_whitespaceBeginning',
];

export default whitespaceAttributes;