'use strict';
/**
 * @file
 * @module createMessage
 */
/**
 * This function creates an HTML 'Message-Box' Element containing a program message.
 *
 * @function createMessage
 * @param {string | messageBoxObject} message A string message to use or an [object]{@link messageBoxObject} describing the message.
 * @returns {HTMLElement}
 */
export default function createMessageBox(message) {
    let messageBox = document.createElement('DIV');
    let messageBoxTitle = "SP_MESSAGE";
    let messageLevel = 'ERROR';
    messageBox.classList.add('sp_messageBox');
    const messageBoxHeader = document.createElement('DIV');
    messageBox.appendChild(messageBoxHeader);
    const closeButton = document.createElement('BUTTON');
    closeButton.title = 'Close';
    closeButton.innerText = "X";
    let messageElement = document.createElement('P');
    let backdrop = null;
    if (typeof (message) === 'object') {
        if (message.level) {
            messageLevel = message.level.toUpperCase();
            messageBoxTitle = messageLevel;
        }
        if (message.title) {
            messageBoxTitle = message.title.replaceAll(' ', '_');
        }
        if (message.type) {
            messageBox.dataset.messageType = message.type;
            switch (message.type.toLocaleLowerCase()) {
                case 'overlay':
                    backdrop = document.createElement('DIV');
                    backdrop.classList.add('sp_backdrop');
                    break;
            }
        }
        if (typeof (message.message) === 'string') {
            messageElement.innerText = message.message;
        }
        else {
            messageElement = document.createElement('UL');
            message.message.forEach((message) => {
                const listElement = document.createElement('LI');
                listElement.innerText = message;
                messageElement.appendChild(listElement);
            });
        }
    }
    else {
        messageElement.innerText = message;
    }
    messageBox.dataset.title = messageBoxTitle;
    messageBox.dataset.messageLevel = messageLevel;
    const messageTitle = document.createElement('STRONG');
    messageTitle.innerText = messageBoxTitle;
    messageBoxHeader.appendChild(messageTitle);
    messageBoxHeader.appendChild(closeButton);
    closeButton.addEventListener('click', (event) => {
        event.preventDefault();
        messageBox.remove();
    });
    messageBox.appendChild(messageElement);
    if (backdrop) {
        backdrop.appendChild(messageBox);
        messageBox = backdrop;
    }
    return messageBox;
}
