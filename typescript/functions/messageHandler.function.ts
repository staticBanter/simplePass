'use strict';

import createMessage from "./createMessage.function.js";
import messageTypes from "../data/interfaces/messageTypes.interface.js";
import createMessageBox from "./createMessageBox.function.js";
import messageObject from "../data/interfaces/messageObject.interface.js";

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
export default function messageHandler(
    message: string | messageObject,
    messageTypes: messageTypes = {
        consoleMessage: true,
        level:"ERROR"
    }
):void {

    if (
        message === 'CLEAR'
    ) {

        if (
            typeof (messageTypes.consoleMessage) === 'object'
            && messageTypes.consoleMessage.clear
        ) {
            console.clear();
        }

        if (
            messageTypes.htmlMessage?.clear
            && messageTypes.htmlMessage.messageBoard
        ) {

            messageTypes.htmlMessage.messageBoard.querySelectorAll<HTMLElement>('.sp_messageBox').forEach((messageBox: HTMLElement) => {

                messageBox.remove();

            });

        }

        return;
    }

    let messageTitle: string | undefined;

    if (typeof (message) === 'object') {

        if (message.title) {
            messageTitle = message.title.replace(' ', '_');
        }

        if (
            message.templateMessages
            && message.templateMessages.templates
            && (
                message.templateMessages.replacements
                && message.templateMessages.replacements.length
                && message.templateMessages.replacements.length >= 1
            )
        ) {
            message = createMessage(message.templateMessages!.templates[message.messageKey], message.templateMessages!.replacements);
        } else {
            message = message.messageKey;
        }
    }

    if (
        !messageTypes.consoleMessage
        && !messageTypes.htmlMessage
    ) {
        const spEHE4 = 'sP-eH_E.4: Missing Message Type. A Message Of Unknown Type Was Created:';

        console.warn(spEHE4);

        document.body.appendChild(createMessageBox(
            {
                message:
                    [
                        spEHE4,
                        message
                    ],
                title: 'sP-eH_E.4: Missing Message Type.',
                type: 'overlay',
                level:messageTypes.level
            }
        ));

        return;

    }

    if (messageTypes.htmlMessage) {

        messageTypes.htmlMessage.messageBoard.appendChild(createMessageBox({
            message: message,
            title: messageTitle,
            level:messageTypes.level
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