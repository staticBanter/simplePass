'use strict';
/**
 * @file
 * @module useableAttributes
 */
/**
 * Defines what attributes are considered usable by the program.
 * - ```lowercase```
 * - ```uppercase```
 * - ```numbers```
 * - ```punctuation```
 * - ```whitespaceBeginning```
 * - ```whitespaceEnd```
 * - ```whitespaceBetween```
 * - ```excludeCharacters```
 * - ```lowercase_supplement```
 * - ```uppercase_supplement```
 * - ```symbols_supplement```
 * @const {Array<string>} useableAttributes
 */
const useableAttributes = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'whitespaceBeginning',
    'whitespaceEnd',
    'whitespaceBetween',
    'excludeCharacters',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];
export default useableAttributes;
