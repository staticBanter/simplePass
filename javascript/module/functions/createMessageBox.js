/**
* simplePass - A JavaScript password generator.
* Copyright (C) 2023  Jordan Vezina(staticBanter)
*
* This program is free software: you can redistribute it and/or modify
* it under the terms of the GNU General Public License as published by
* the Free Software Foundation, either version 3 of the License, or
* (at your option) any later version.
*
* This program is distributed in the hope that it will be useful,
* but WITHOUT ANY WARRANTY; without even the implied warranty of
* MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
* GNU General Public License for more details.
*
* You should have received a copy of the GNU General Public License
* along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
'use strict';
import config from "../simplePass.config.js";
/**
 * @file
 * @module createMessage
 */
/**
 * This function creates an HTML 'Message-Box' Element containing a program message.
 *
 * @function createMessage
 * @param {string | messageBoxObject} message A string message to use or an [object]{@link messageBoxObject} describing the message.
 * @requires config
 * @returns {HTMLElement}
 */
export default function createMessageBox(message) {
    let messageBox = document.createElement('DIV');
    let messageBoxTitle = "SP_MESSAGE";
    let messageLevel = 'ERROR';
    messageBox.classList.add(config.messages.messageBoxes?.substring(1) ?? 'simplePass_messageBox');
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
                    backdrop.classList.add(config.messages.messageBackdrop?.substring(1) ?? 'simplePass_messageBackdrop');
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
        messageBox.setAttribute('style', `
            height: ${document.documentElement.scrollHeight}px;
            width: ${document.documentElement.scrollWidth}px;
        `);
        window.addEventListener('resize', () => {
            /**
             * Briefly shrink the messageBox,
             * this prevents the messageBox itself from being the cause of overflow.
             */
            messageBox.setAttribute('style', `
                height: ${0}px;
                width: ${0}px;
            `);
            messageBox.setAttribute('style', `
                height: ${document.documentElement.scrollHeight}px;
                width: ${document.documentElement.scrollWidth}px;
            `);
        });
    }
    return messageBox;
}
