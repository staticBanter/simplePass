/**
 * Interface that defines an object that contains the optional properties that might be
 * included with a character code request object.
 *
 * @interface charCodeOptions
 * @property {Array<string>} [whitespaceOptions] A list containing the requested
 * white-space options
 * @property {string} [excludeCharacters] A string containing the characters to be
 * excluded from the password.
 */

/**
 * Interface that defines the 'Character Code Request' object that is used by the [Generate Character Code Function]{@link generateCharCode}.
 *
 * @interface charCodeRequest
 * @implements {charCodeOptions}
 * @property {string} charType The requested character code type.
 * @property {charCodeOptions} [charCodeOptions] An object defining a set of options
 * to include with the character code request.
 */

'use strict';

interface charCodeOptions {
    whitespaceOptions?:Array<string>,
    excludeCharacters?:string
}

export default interface charCodeRequest {
    charType:string,
    charCodeOptions?:charCodeOptions,
}