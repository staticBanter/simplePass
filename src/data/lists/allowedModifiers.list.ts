'use strict';

/**
 * List of allowed modifier attributes.
 * These are attributes that are allowed to be on the password modifier.
 */
const L_allowedModifiers:Array<string> = [
    'length',
    'lowercase',
    'uppercase',
    'numbers',
    'punctuation',
    'special',
    'memorable',
    'w_beginning',
    'w_end',
    'w_between',
    'w_end_required',
    'w_beginning_required',
    'excludeCharacters'
];

export default L_allowedModifiers;