'use strict';

/**
 * @file
 * @module allowedModifiers
 */

/**
 * Defines what attributes are allowed on the password modifier.
 * - ```length```
 * - ```lowercase```
 * - ```uppercase```
 * - ```numbers```
 * - ```punctuation```
 * - ```whitespaceBeginning```
 * - ```whitespaceEnd```
 * - ```whitespaceBetween```
 * - ```max_whitespaceBetween```
 * - ```required_whitespaceEnd```
 * - ```required_whitespaceBeginning```
 * - ```excludeCharacters```
 * - ```repeatingCharacter```
 * - ```max_repeatingCharacter```
 * - ```customRepeatingCharacters```
 * - ```lowercase_supplement```
 * - ```uppercase_supplement```
 * - ```symbols_supplement```
 *
 * @const {Array<string>} allowedModifiers
 */
const allowedModifiers:Array<string> = [
    'length',
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'whitespaceBeginning',
    'whitespaceEnd',
    'whitespaceBetween',
    'max_whitespaceBetween',
    'required_whitespaceEnd',
    'required_whitespaceBeginning',
    'excludeCharacters',
    'repeatingCharacter',
    'max_repeatingCharacter',
    'customRepeatingCharacters',
    'lowercase_supplement',
    'uppercase_supplement',
    'symbols_supplement'
];

export default allowedModifiers;