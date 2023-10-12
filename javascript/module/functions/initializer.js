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
import messageHandler from "./messageHandler.js";
import simplePass from "../simplePass.js";
/**
 * @file
 * @module initializer
 */
/**
 * @function setInnerTextOrValue Sets the ```innerText``` or ```value``` of an element.
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
 * @function getInnerTextOrValue Gets the ``innerText``` or ```value``` of an element.
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
 * @function injectSimplePass Injects the generated password and calculated entropy into provided elements.
 * @param {HTMLElement|HTMLInputElement} passwordTarget The element that the password will be injected into.
 * @param {string|strengthCheckedPassword} password The password or [Strength Check Password object]{@link module:strengthCheckedPassword} to inject into the password target.
 * @param {HTMLElement|HTMLInputElement|null} [entropyTarget] The element that the entropy calculation will be inserted into.
 * @returns {void}
 */
function injectSimplePass(passwordTarget, password, entropyTarget = null) {
    if (typeof (password) === 'string') {
        setInnerTextOrValue(passwordTarget, password);
    }
    else {
        setInnerTextOrValue(passwordTarget, password.password);
        if (entropyTarget) {
            setInnerTextOrValue(entropyTarget, Math.floor(password.entropy).toString());
        }
    }
}
/**
 *
 * @function initializer Initialization function used to automate the setup of inject passwords and registering events for various elements used by the program.
 * @param cFig A [simplePass configuration]{@link config} object
 * @returns {void}
 */
export default function initializer(cFig = config) {
    console.log('Initializer Call');
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
    const passwordTarget = document.body.querySelector(cFig.htmlElements.passwordTarget);
    console.log(passwordTarget);
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
    let entropyTarget = null;
    let strengthCheckStyleTarget = null;
    if (cFig.htmlElements.entropyTarget) {
        entropyTarget = document.body.querySelector(cFig.htmlElements.entropyTarget);
    }
    if (cFig.htmlElements.strengthCheckerStyling) {
        if (cFig.htmlElements.strengthCheckerStyling.styleTarget) {
            strengthCheckStyleTarget = document.body.querySelector(cFig.htmlElements.strengthCheckerStyling.styleTarget);
        }
        else {
            strengthCheckStyleTarget = passwordTarget;
        }
    }
    /**
     * Inject our initial password
     */
    injectSimplePass(passwordTarget, simplePass(cFig.defaultPasswordModifier, (entropyTarget
        || strengthCheckStyleTarget) ?
        (strengthCheckStyleTarget ?
            {
                styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                styleTarget: strengthCheckStyleTarget
            } :
            true) :
        false), entropyTarget);
    /**
     * If we have any action elements set,
     * we need to preform more work.
     */
    if (cFig.htmlElements.actionElements) {
        /**
         * Generate Action Button
         */
        if (cFig.htmlElements.actionElements.generate) {
            document.body.querySelector(cFig.htmlElements.actionElements.generate)?.addEventListener('click', function () {
                /**
                 * If this is a submit button and it has been clicked.
                 * we do not need to generate another password so bail out here.
                 */
                if ((this instanceof HTMLButtonElement)
                    && this.form
                    && this.type === 'submit') {
                    return;
                }
                injectSimplePass(passwordTarget, simplePass(cFig.defaultPasswordModifier, (entropyTarget
                    || strengthCheckStyleTarget) ?
                    (strengthCheckStyleTarget ?
                        {
                            styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                            styleTarget: strengthCheckStyleTarget
                        } :
                        true) :
                    false), entropyTarget);
            });
        }
        /**
         * Password Modifier Form
         */
        if (cFig.htmlElements.actionElements.form) {
            const passwordForm = document.body.querySelector(cFig.htmlElements.actionElements.form);
            if (passwordForm) {
                passwordForm.addEventListener('submit', function (event) {
                    event.preventDefault();
                    const passwordModifiers = new FormData(this);
                    let batchAmount = parseInt(passwordModifiers.get('passwordBatchAmount')?.toString() ?? '0');
                    if (batchAmount
                        && batchAmount < 2) {
                        messageHandler(`ERROR.simplePass-I.2: Batch amount can not be less then 2`, {
                            htmlMessage: (messageBoard ? {
                                messageBoard: messageBoard
                            } :
                                undefined),
                            consoleMessage: true,
                            level: "ERROR",
                        }, cFig);
                    }
                    if (batchAmount
                        && cFig.htmlElements.passwordContainer) {
                        const passwordContainer = document.body.querySelector(cFig.htmlElements.passwordContainer);
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
                        for (const children of passwordContainer.children) {
                            children.remove();
                        }
                        const OL = document.createElement('ol');
                        for (; batchAmount; batchAmount--) {
                            const LI = document.createElement('li');
                            const P = document.createElement('p');
                            const B = document.createElement('b');
                            const SPAN = document.createElement('span');
                            B.innerText = 'Password: ';
                            SPAN.classList.add(cFig.htmlElements.passwordTarget.substring(1));
                            injectSimplePass(SPAN, simplePass(passwordModifiers, (entropyTarget
                                || strengthCheckStyleTarget) ?
                                (strengthCheckStyleTarget ?
                                    {
                                        styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                                        styleTarget: SPAN
                                    } :
                                    true) :
                                false));
                            /**
                             * We only need to update our entropy target if we are on
                             * our last element.
                             */
                            if (batchAmount === 1) {
                                injectSimplePass(SPAN, simplePass(passwordModifiers, (entropyTarget
                                    || strengthCheckStyleTarget) ?
                                    (strengthCheckStyleTarget ?
                                        {
                                            styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                                            styleTarget: SPAN
                                        } :
                                        true) :
                                    false), entropyTarget);
                            }
                            SPAN.classList.add(cFig.htmlElements.passwordTarget);
                            P.appendChild(B);
                            P.appendChild(SPAN);
                            LI.appendChild(P);
                            OL.appendChild(LI);
                        }
                        passwordContainer.appendChild(OL);
                    }
                    else if (!batchAmount
                        && cFig.htmlElements.passwordContainer) {
                        const passwordContainer = document.body.querySelector(cFig.htmlElements.passwordContainer);
                        if (!passwordContainer) {
                            messageHandler(`ERROR.simplePass-I.4: Use of batch password generation without a password container.`, {
                                htmlMessage: (messageBoard ? {
                                    messageBoard: messageBoard
                                } :
                                    undefined),
                                consoleMessage: true,
                                level: "ERROR",
                            }, cFig);
                            return;
                        }
                        const passwordList = passwordContainer.querySelector('ol');
                        if (passwordList) {
                            passwordList.remove();
                            const P = document.createElement('p');
                            const B = document.createElement('b');
                            const SPAN = document.createElement('span');
                            B.innerText = 'Password: ';
                            SPAN.classList.add(cFig.htmlElements.passwordTarget.substring(1));
                            injectSimplePass(SPAN, simplePass(passwordModifiers, (entropyTarget
                                || strengthCheckStyleTarget) ?
                                (strengthCheckStyleTarget ?
                                    {
                                        styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                                        styleTarget: SPAN
                                    } :
                                    true) :
                                false), entropyTarget);
                            P.appendChild(B);
                            P.appendChild(SPAN);
                            passwordContainer.append(P);
                        }
                        else {
                            injectSimplePass(passwordTarget, simplePass(passwordModifiers, (entropyTarget
                                || strengthCheckStyleTarget) ?
                                (strengthCheckStyleTarget ?
                                    {
                                        styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                                        styleTarget: strengthCheckStyleTarget
                                    } :
                                    true) :
                                false), entropyTarget);
                        }
                    }
                    else {
                        injectSimplePass(passwordTarget, simplePass(passwordModifiers, (entropyTarget
                            || strengthCheckStyleTarget) ?
                            (strengthCheckStyleTarget ?
                                {
                                    styleType: cFig.htmlElements.strengthCheckerStyling?.styleType ?? "inline",
                                    styleTarget: strengthCheckStyleTarget
                                } :
                                true) :
                            false), entropyTarget);
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
        if (cFig.htmlElements.actionElements.copy) {
            document.body.querySelector(cFig.htmlElements.actionElements.copy)?.addEventListener(('click'), function () {
                let copiedPassword = '';
                // Why are we not finding our new elements?
                document.body.querySelectorAll(cFig.htmlElements.passwordTarget).forEach((password, passwordIndex) => {
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
