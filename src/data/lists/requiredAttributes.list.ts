'use strict';

/**
 * List of required attributes.
 * At least one of these attributes must be in the modifier in order to create a password.
 * Any other modifier attributes are optional.
 */
const L_requiredAttributes:Array<string> = [
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'special',
    'memorable',
];

export default L_requiredAttributes;