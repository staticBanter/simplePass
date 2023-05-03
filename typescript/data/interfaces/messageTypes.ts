/**
 * An interface describing the 'Message Types' object.
 *
 * @interface messageTypes
 * @property {object} [htmlMessage] An object used to describe the HTML message
 * @property {boolean|object} [consoleMessage] A boolean used to indicate if the message should also be displayed in the console. Can also be an object used to signal clearing of console messages.
 * @property {"ERROR"|"WARNING"|"INFO"|"LOG"|"DEBUG"|"CLEAR"} level The level the message should be displayed as to the user.
 * Error messages will halt the program and always throw a console error message.
 * The "CLEAR" level is used to signal clearing current messages.
 */

'use strict';


export default interface messageTypes{
    htmlMessage?:{
        messageBoard:HTMLElement,
        clear?: boolean,
    },
    consoleMessage?:boolean|{
        clear?: boolean,
    };
    level:"ERROR"|"WARNING"|"INFO"|"LOG"|"DEBUG"|"CLEAR"
}