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
import simplePass from "../simplePass.js";
import messageHandler from "./messageHandler.js";
/**
 * @file
 * @module initializer
 */
/**
 * Sets the ```innerText``` or ```value``` of an element.
 *
 * @function setInnerTextOrValue
 * @param {HTMLElement|HTMLInputElement} element The element that the string will be set in
 * @param {string} value The string to set inside of the element.
 * @returns {void}
 */
function setInnerTextOrValue(element, value) {
    if ((element instanceof HTMLInputElement)) {
        element.value = value;
    }
    else {
        element.innerText = value;
    }
}
/**
 * Gets the ``innerText``` or ```value``` of an element.
 *
 * @function getInnerTextOrValue
 * @param {HTMLInputElement|HTMLElement} element The element to get the string from.
 * @returns {string} The string inside of the element
 */
function getInnerTextOrValue(element) {
    if ((element instanceof HTMLInputElement)) {
        return element.value;
    }
    else {
        return element.innerText;
    }
}
/**
 * Injects the generated password and if necessary the corresponding password stats.
 *
 * @function injectSimplePass
 * @param {HTMLElement|HTMLInputElement} passwordTarget The element that the password will be injected into.
 * @param {string|strengthCheckedPassword} password The password or [Strength Check Password object]{@link module:strengthCheckedPassword} to inject into the password target.
 * @param {HTMLElement|HTMLInputElement|null} [entropyTarget] The element that the entropy calculation will be inserted into.
 * @requires setInnerTextOrValue
 * @requires injectStrengthStats
 * @returns {void}
 */
function injectSimplePass(passwordTarget, password, strengthChecks) {
    if (typeof (password) === 'string') {
        setInnerTextOrValue(passwordTarget, password);
    }
    else {
        setInnerTextOrValue(passwordTarget, password.password);
        if (strengthChecks) {
            injectStrengthStats(password, strengthChecks);
        }
    }
}
/**
 * Injects password strength stats into provided elements.
 *
 * @function injectStrengthStats
 * @param {strengthCheckedPassword} password The strength checked password object
 * @param {object} elements An object defining the HTML Elements to inject the stats into.
 * @requires setInnerTextOrValue
 */
function injectStrengthStats(password, elements) {
    Object.entries(elements).forEach(([key, element]) => {
        if (element) {
            key = key.replace('Target', '');
            if (password.compressionStats
                && Object.keys(password.compressionStats).includes(key)
                && password.compressionStats[key]) {
                setInnerTextOrValue(element, password.compressionStats[key]);
            }
            else if (Object.keys(password).includes(key)) {
                setInnerTextOrValue(element, password[key]);
            }
        }
    });
}
/**
 *
 * Initialization function used to automate the setup of inject passwords and registering events for various elements used by the program.
 * This function is currently also needed to preform batch password generation.
 *
 * @function initializer
 * @param cFig A [simplePass configuration]{@link config} object
 * @requires messageHandler
 * @requires injectSimplePass
 * @requires simplePass
 * @requires injectStrengthStats
 * @requires getInnerTextOrValue
 * @returns {void}
 */
export default function initializer(cFig = config) {
    /**
     * Ensure these default values are always present.
     */
    if (!cFig.defaultPasswordModifier) {
        cFig.defaultPasswordModifier = Object.assign(config.defaultPasswordModifier, cFig.defaultPasswordModifier);
    }
    let messageBoard = null;
    if (cFig.messages
        && cFig.messages.messageBoard) {
        messageBoard = document.body.querySelector(cFig.messages.messageBoard);
    }
    /**
     * These elements get used repeatedly throughout the function.
     * We will query for them here and initialize their variables.
     */
    const passwordTarget = document.body.querySelector(cFig.elements.passwordTarget);
    /**
     * If we have no target stop here.
     * We have nothing else to do.
     */
    if (!passwordTarget) {
        messageHandler(`ERROR.simplePass-I.1: Could not find a password target`, {
            htmlMessage: (messageBoard ? {
                messageBoard: messageBoard
            } :
                undefined),
            consoleMessage: true,
            level: "ERROR",
        }, cFig);
        /**
         * Because `messageHandler` might not throw an error
         * we have to explicitly declare a return here so we can bail out.
         * We need a password target to continue.
         */
        return;
    }
    let targetElements = {};
    if (cFig.strengthCheck
        && typeof (cFig.strengthCheck) === 'object') {
        function getTargetElements(strengthCheck) {
            Object.entries(strengthCheck).forEach(([propertyName, queryString]) => {
                if (typeof (queryString) === 'string') {
                    const target = document.body.querySelector(queryString);
                    if (target) {
                        targetElements[propertyName] = target;
                    }
                }
                else if (typeof (queryString) === 'object') {
                    getTargetElements(queryString);
                }
            });
        }
        getTargetElements(cFig.strengthCheck);
    }
    const password = simplePass(cFig.defaultPasswordModifier, cFig);
    /**
     * Inject our initial password
     */
    if (!(password instanceof Promise)) {
        injectSimplePass(passwordTarget, password, targetElements);
    }
    else {
        password.then((password) => {
            injectSimplePass(passwordTarget, password, targetElements);
        });
    }
    /**
     * If we have any action elements set,
     * we need to preform more work.
     */
    if (cFig.elements.actions) {
        /**
         * Generate Action Button
         */
        if (cFig.elements.actions.generate) {
            document.body.querySelector(cFig.elements.actions.generate)?.addEventListener('click', function () {
                /**
                 * If this is a submit button and it has been clicked.
                 * we do not need to generate another password so bail out here.
                 */
                if ((this instanceof HTMLButtonElement)
                    && this.form
                    && this.type === 'submit') {
                    return;
                }
                const password = simplePass(cFig.defaultPasswordModifier, cFig);
                if (!(password instanceof Promise)) {
                    injectSimplePass(passwordTarget, password, targetElements);
                }
                else {
                    password.then((password) => {
                        injectSimplePass(passwordTarget, password, targetElements);
                    });
                }
            });
        }
        /**
         * Password Modifier Form
         */
        if (cFig.elements.actions.form) {
            const passwordForm = document.body.querySelector(cFig.elements.actions.form);
            if (passwordForm) {
                passwordForm.addEventListener('submit', function (event) {
                    event.preventDefault();
                    const passwordModifiers = new FormData(this);
                    let batchAmount = (parseInt(passwordModifiers.get('passwordBatchAmount')?.toString() ?? '0') - 1);
                    const passwordContainer = document.body.querySelector(cFig.elements.passwordContainer ?? '.simplePass_passwordContainer');
                    if (!passwordContainer) {
                        messageHandler(`ERROR.simplePass-I.3: Use of batch password generation without a password container.`, {
                            htmlMessage: (messageBoard ? {
                                messageBoard: messageBoard
                            } :
                                undefined),
                            consoleMessage: true,
                            level: "ERROR",
                        }, cFig);
                        return;
                    }
                    if (batchAmount
                        && batchAmount > 0) {
                        const statIndex = document.body.querySelector('.simplePass_passwordStatsIndex');
                        const batchTotal = batchAmount + 1;
                        if (statIndex) {
                            statIndex.innerText = `(For Password: ${batchAmount + 1})`;
                        }
                        passwordContainer.innerHTML = '';
                        const OL = document.createElement('ol');
                        while (batchAmount--) {
                            const LI = document.createElement('li');
                            LI.dataset.simplePassIndex = (batchAmount + 1).toString();
                            Object.assign(LI.style, { cursor: "pointer" });
                            const password_LABEL = document.createElement('label');
                            password_LABEL.innerText = "Password:";
                            const password_INPUT = document.createElement('input');
                            password_INPUT.type = 'text';
                            password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                            password_INPUT.setAttribute('readonly', 'readonly');
                            password_LABEL.appendChild(password_INPUT);
                            LI.appendChild(password_LABEL);
                            OL.prepend(LI);
                            const password = simplePass(passwordModifiers);
                            if (!(password instanceof Promise)) {
                                injectSimplePass(password_INPUT, password);
                            }
                            else {
                                password.then((password) => {
                                    injectSimplePass(password_INPUT, password);
                                });
                            }
                            if (typeof (password) !== 'string') {
                                LI.addEventListener('click', function () {
                                    if (!(password instanceof Promise)) {
                                        injectStrengthStats(password, targetElements);
                                    }
                                    else {
                                        password.then((password) => {
                                            injectStrengthStats(password, targetElements);
                                        });
                                    }
                                    if (statIndex) {
                                        statIndex.innerText = `(For Password: ${LI.dataset.simplePassIndex})`;
                                    }
                                });
                            }
                        }
                        const LI = document.createElement('li');
                        LI.dataset.simplePassIndex = batchTotal.toString();
                        const password_LABEL = document.createElement('label');
                        password_LABEL.innerText = "Password:";
                        const password_INPUT = document.createElement('input');
                        password_INPUT.type = 'text';
                        password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                        password_INPUT.setAttribute('readonly', 'readonly');
                        password_LABEL.appendChild(password_INPUT);
                        LI.appendChild(password_LABEL);
                        OL.appendChild(LI);
                        const password = simplePass(passwordModifiers);
                        if (!(password instanceof Promise)) {
                            injectSimplePass(password_INPUT, password, targetElements);
                        }
                        else {
                            password.then((password) => {
                                injectSimplePass(password_INPUT, password, targetElements);
                            });
                        }
                        passwordContainer.prepend(OL);
                        if (typeof (password) !== 'string') {
                            LI.addEventListener('click', function () {
                                if (!(password instanceof Promise)) {
                                    injectStrengthStats(password, targetElements);
                                }
                                else {
                                    password.then((password) => {
                                        injectStrengthStats(password, targetElements);
                                    });
                                }
                                if (statIndex) {
                                    statIndex.innerText = `(For Password: ${LI.dataset.simplePassIndex})`;
                                }
                            });
                        }
                    }
                    else if (passwordContainer.querySelector('ol')) {
                        passwordContainer.innerHTML = '';
                        const password_LABEL = document.createElement('label');
                        password_LABEL.innerText = "Password:";
                        const password_INPUT = document.createElement('input');
                        password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                        password_INPUT.type = 'text';
                        password_INPUT.setAttribute('readonly', 'readonly');
                        password_LABEL.appendChild(password_INPUT);
                        passwordContainer.appendChild(password_LABEL);
                        const password = simplePass(passwordModifiers, cFig);
                        if (!(password instanceof Promise)) {
                            injectSimplePass(password_INPUT, password, targetElements);
                        }
                        else {
                            password.then((password) => {
                                injectSimplePass(password_INPUT, password, targetElements);
                            });
                        }
                    }
                    else {
                        const passwordTarget = document.body.querySelector(cFig.elements.passwordTarget);
                        if (!passwordTarget) {
                            messageHandler(`ERROR.simplePass-I.2: Could not find a password target`, {
                                htmlMessage: (messageBoard ? {
                                    messageBoard: messageBoard
                                } :
                                    undefined),
                                consoleMessage: true,
                                level: "ERROR",
                            }, cFig);
                            return;
                        }
                        const password = simplePass(passwordModifiers, cFig);
                        if (!(password instanceof Promise)) {
                            injectSimplePass(passwordTarget, password, targetElements);
                        }
                        else {
                            password.then((password) => {
                                injectSimplePass(passwordTarget, password, targetElements);
                            });
                        }
                    }
                });
                if (cFig.defaultPasswordModifier) {
                    for (const [key, value] of Object.entries(cFig.defaultPasswordModifier)) {
                        const input = passwordForm.querySelector(`[name=${key}]`);
                        if (input
                            && value) {
                            if (input.type === 'checkbox'
                                || input.type === 'radio') {
                                input.checked = true;
                            }
                            else {
                                input.value = value.toString();
                            }
                        }
                    }
                }
                /**
                * Event listeners for "Radio Checkboxes".
                * Just loops through all the checkboxes and unchecks and box that does not have the same value as the
                * currently clicked box.
                */
                const radioCheckboxes = passwordForm.querySelectorAll('input[data-radioCheckbox]');
                radioCheckboxes.forEach((input) => {
                    input.addEventListener('click', function () {
                        radioCheckboxes.forEach((input) => {
                            if (input.value !== this.value) {
                                if (input.checked) {
                                    input.checked = false;
                                }
                            }
                        });
                    });
                });
            }
        }
        /**
         * Copy Action Button
         */
        if (cFig.elements.actions.copy) {
            document.body.querySelector(cFig.elements.actions.copy)?.addEventListener(('click'), function () {
                let copiedPassword = '';
                // Why are we not finding our new elements?
                document.body.querySelectorAll(cFig.elements.passwordTarget).forEach((password, passwordIndex) => {
                    if (!passwordIndex) {
                        copiedPassword += `${getInnerTextOrValue(password)}`;
                        return;
                    }
                    copiedPassword += `\n${getInnerTextOrValue(password)}`;
                });
                navigator.clipboard.writeText(copiedPassword).then(() => {
                    this.style.backgroundColor = `green`;
                    this.innerText = 'Copied!';
                    setTimeout(() => {
                        this.toggleAttribute('style');
                        this.innerText = 'Copy';
                    }, 5000);
                })
                    .catch((error) => {
                    messageHandler(`ERROR.simplePass-Ic.1: Unable to copy to clipboard! Environment Error: ${error.message}.`, {
                        htmlMessage: (messageBoard ? {
                            messageBoard: messageBoard
                        } :
                            undefined),
                        consoleMessage: true,
                        level: "ERROR",
                    }, cFig);
                });
            });
        }
    }
}
