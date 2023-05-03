/**
 * @interface messageBoxObject
 * @property {string} [title] The title of the message.
 * @property {string | Array<string>} message A message or list of messages to be displayed.
 * @property {string} [type] The type of message to create.
 * @property {string} [level] The level of the message.
 */

'use strict';

export default interface messageBoxObject {
    title?: string
    message: string | Array<string>,
    type?: string,
    level?:string
};