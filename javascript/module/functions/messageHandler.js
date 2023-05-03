'use strict';
import createMessage from "./createMessage.js";
import createMessageBox from "./createMessageBox.js";
import config from "../simplePass.config.js";
/**
 * @file
 * @module messageHandler
 */
/**
 * This function creates messages for the users to see. It accepts a `string` or a [`messageObject`]{@link messageObject} as well as a [`messageTypes object`]{@link messageTypes}.
 * Depending on the `messageTypes` object, this function will create a message in the specified areas.
 *
 * This function may also clear messages from given channels as well by passing the string "CLEAR" and setting the respective `messageTypes.clear` attribute to `true`
 *
 * @function messageHandler
 * @param {string | messageObject} message The message to be displayed to the user. Can also be a [`messageObject`]{@link messageObject}.
 * @param {messageTypes} messageTypes An [`object`]{@link messageTypes} representing the type(s) of messages to handle.
 * @throws Program Errors
 * @returns {void}
 */
export default function messageHandler(message, messageTypes = {
    consoleMessage: true,
    level: "ERROR"
}, cFig = config) {
    if (message === 'CLEAR') {
        if (typeof (messageTypes.consoleMessage) === 'object'
            && messageTypes.consoleMessage.clear) {
            console.clear();
        }
        if (messageTypes.htmlMessage?.clear
            && messageTypes.htmlMessage.messageBoard) {
            messageTypes.htmlMessage.messageBoard.querySelectorAll('.sp_messageBox').forEach((messageBox) => {
                messageBox.remove();
            });
        }
        return;
    }
    let messageTitle;
    if (typeof (message) === 'object') {
        if (message.title) {
            messageTitle = message.title.replace(' ', '_');
        }
        if (message.templateMessages
            && message.templateMessages.templates
            && (message.templateMessages.replacements
                && message.templateMessages.replacements.length
                && message.templateMessages.replacements.length >= 1)) {
            message = createMessage(message.templateMessages.templates[message.messageKey], message.templateMessages.replacements, cFig);
        }
        else {
            message = message.messageKey;
        }
    }
    if (!messageTypes.consoleMessage
        && !messageTypes.htmlMessage) {
        const spEHE4 = 'sP-eH_E.4: Missing Message Type. A Message Of Unknown Type Was Created:';
        console.warn(spEHE4);
        document.body.appendChild(createMessageBox({
            message: [
                spEHE4,
                message
            ],
            title: 'sP-eH_E.4: Missing Message Type.',
            type: 'overlay',
            level: messageTypes.level
        }));
        return;
    }
    if (messageTypes.htmlMessage) {
        messageTypes.htmlMessage.messageBoard.appendChild(createMessageBox({
            message: message,
            title: messageTitle,
            level: messageTypes.level
        }));
    }
    switch (messageTypes.level?.toLocaleLowerCase()) {
        case 'info':
            console.info(message);
            break;
        case 'warning':
            console.warn(message);
            break;
        case 'log':
            console.log(message);
            break;
        case 'debug':
            console.debug(message);
            break;
        default:
            throw new Error(message);
            break;
    }
}
