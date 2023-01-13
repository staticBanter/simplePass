/**
 * Interface that defines an object that contains the optional properties that might be
 * included with a character code request object.
 *
 * @interface I_charCodeOptions
 * @property {Array<string>} [whitespaceOptions] A list containing the requested
 * white-space options
 * @property {string} [excludeCharacters] A string containing the characters to be
 * excluded from the password.
 */

/**
 * Interface that defines the 'Character Code Request' object that is used by the [Generate Character Code Function]{@link generateCharCode}.
 * 
 * @interface I_charCodeRequest
 * @implements {I_charCodeOptions}
 * @property {string} charType The requested character code type.
 * @property {I_charCodeOptions} [charCodeOptions] An object defining a set of options
 * to include with the character code request.
 */

'use strict';

interface I_charCodeOptions {
    whitespaceOptions?:Array<string>,
    excludeCharacters?:string
}

export default interface I_charCodeRequest {
    charType:string,
    charCodeOptions?:I_charCodeOptions,
}