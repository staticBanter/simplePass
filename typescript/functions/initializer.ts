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

import strengthCheckedPassword from "../data/interfaces/strengthCheckedPassword.js";
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
function setInnerTextOrValue (element: HTMLElement | HTMLInputElement, value: string): void {

    if((element instanceof HTMLInputElement)) {
        element.value = value;
    } else {
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
function getInnerTextOrValue (element: HTMLElement | HTMLInputElement): string {

    if((element instanceof HTMLInputElement)) {
        return element.value;
    } else {
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
function injectSimplePass (
    passwordTarget: HTMLElement | HTMLInputElement,
    password: string | strengthCheckedPassword,
    strengthChecks?: {
        [index: string]: HTMLElement | null,
    }
): void {

    if(typeof (password) === 'string') {

        setInnerTextOrValue(passwordTarget, password);

    } else {

        setInnerTextOrValue(passwordTarget, password.password);

        if(strengthChecks) {

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
function injectStrengthStats (
    password: strengthCheckedPassword,
    elements: {
        [index: string]: HTMLElement | null,
    }
) {

    Object.entries(elements).forEach(([key, element]: [string, HTMLElement | null]) => {

        if(element) {

            if(
                element
                && Object.keys(password).includes(key.replace('Target', ''))
            ) {
                setInnerTextOrValue(element, password[key.replace('Target', '')]);
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

export default function initializer (cFig: typeof config = config): void {

    /**
     * Ensure these default values are always present.
     */
    if(!cFig.defaultPasswordModifier) {
        cFig.defaultPasswordModifier = Object.assign(config.defaultPasswordModifier, cFig.defaultPasswordModifier);
    }

    let messageBoard: HTMLElement | null = null;

    if(
        cFig.messages
        && cFig.messages.messageBoard
    ) {
        messageBoard = document.body.querySelector<HTMLHtmlElement>(cFig.messages.messageBoard);
    }

    /**
     * These elements get used repeatedly throughout the function.
     * We will query for them here and initialize their variables.
     */
    const passwordTarget: HTMLElement | HTMLInputElement | null = document.body.querySelector<HTMLElement | HTMLInputElement>(cFig.elements.passwordTarget);

    /**
     * If we have no target stop here.
     * We have nothing else to do.
     */
    if(!passwordTarget) {

        messageHandler(
            `ERROR.simplePass-I.1: Could not find a password target`,
            {
                htmlMessage: (
                    messageBoard ? {
                        messageBoard: messageBoard
                    } :
                        undefined
                ),
                consoleMessage: true,
                level: "ERROR",
            },
            cFig
        );

        /**
         * Because `messageHandler` might not throw an error
         * we have to explicitly declare a return here so we can bail out.
         * We need a password target to continue.
         */
        return;
    }

    let targetElements: {
        [index: string]: HTMLElement | null,
    } = {};

    if(cFig.strengthCheck) {

        Object.entries(cFig.strengthCheck).forEach(([propertyName, queryString]: [string, string]) => {
            if(queryString) {
                const target: HTMLElement | null = document.body.querySelector<HTMLElement>(queryString);
                if(target) {
                    targetElements[propertyName] = target;
                }
            }
        });

    }

    /**
     * Inject our initial password
     */
    injectSimplePass(
        passwordTarget,
        simplePass(
            cFig.defaultPasswordModifier,
            cFig
        ),
        targetElements
    );

    /**
     * If we have any action elements set,
     * we need to preform more work.
     */
    if(cFig.elements.actions) {

        /**
         * Generate Action Button
         */
        if(cFig.elements.actions.generate) {

            document.body.querySelector<HTMLElement | HTMLButtonElement>(cFig.elements.actions.generate)?.addEventListener('click', function (this: HTMLElement | HTMLButtonElement) {

                /**
                 * If this is a submit button and it has been clicked.
                 * we do not need to generate another password so bail out here.
                 */
                if(
                    (this instanceof HTMLButtonElement)
                    && this.form
                    && this.type === 'submit'
                ) {
                    return;
                }

                injectSimplePass(
                    passwordTarget,
                    simplePass(
                        cFig.defaultPasswordModifier,
                        cFig
                    ),
                    targetElements
                );

            });

        }

        /**
         * Password Modifier Form
         */
        if(cFig.elements.actions.form) {

            const passwordForm: HTMLFormElement | null = document.body.querySelector<HTMLFormElement>(cFig.elements.actions.form);

            if(passwordForm) {

                passwordForm.addEventListener('submit', function (event: Event) {
                    event.preventDefault();

                    const passwordModifiers: FormData = new FormData(this);
                    let batchAmount: number = (parseInt(passwordModifiers.get('passwordBatchAmount')?.toString() ?? '0') - 1);

                    const passwordContainer: HTMLElement | null = document.body.querySelector<HTMLElement>(cFig.elements.passwordContainer ?? '.simplePass_passwordContainer');

                    if(!passwordContainer) {

                        messageHandler(
                            `ERROR.simplePass-I.3: Use of batch password generation without a password container.`,
                            {
                                htmlMessage: (
                                    messageBoard ? {
                                        messageBoard: messageBoard
                                    } :
                                        undefined
                                ),
                                consoleMessage: true,
                                level: "ERROR",
                            },
                            cFig
                        );

                        return;
                    }

                    if(
                        batchAmount
                        && batchAmount > 0
                    ) {

                        const statIndex: HTMLSpanElement | null = document.body.querySelector<HTMLSpanElement>('.simplePass_passwordStatsIndex');
                        const batchTotal = batchAmount + 1;
                        if(statIndex) {
                            statIndex.innerText = `(For Password: ${batchAmount + 1})`;
                        }

                        passwordContainer.innerHTML = '';

                        const OL: HTMLOListElement = document.createElement('ol');

                        while(batchAmount--) {

                            const LI: HTMLLIElement = document.createElement('li');
                            LI.dataset.simplePassIndex = (batchAmount + 1).toString();
                            Object.assign(LI.style, {cursor: "pointer"});

                            const password_LABEL: HTMLLabelElement = document.createElement('label');
                            password_LABEL.innerText = "Password:";

                            const password_INPUT: HTMLInputElement = document.createElement('input');
                            password_INPUT.type = 'text';
                            password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                            password_INPUT.setAttribute('readonly', 'readonly');

                            password_LABEL.appendChild(password_INPUT);

                            LI.appendChild(password_LABEL);

                            OL.prepend(LI);

                            const password: string | strengthCheckedPassword = simplePass(passwordModifiers);

                            injectSimplePass(
                                password_INPUT,
                                password
                            );

                            if(typeof (password) !== 'string') {

                                LI.addEventListener('click', function () {

                                    injectStrengthStats(
                                        password,
                                        targetElements
                                    );

                                    if(statIndex) {
                                        statIndex.innerText = `(For Password: ${LI.dataset.simplePassIndex})`;
                                    }

                                });

                            }

                        }

                        const LI: HTMLLIElement = document.createElement('li');
                        LI.dataset.simplePassIndex = batchTotal.toString();

                        const password_LABEL: HTMLLabelElement = document.createElement('label');
                        password_LABEL.innerText = "Password:";

                        const password_INPUT: HTMLInputElement = document.createElement('input');
                        password_INPUT.type = 'text';
                        password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                        password_INPUT.setAttribute('readonly', 'readonly');

                        password_LABEL.appendChild(password_INPUT);

                        LI.appendChild(password_LABEL);

                        OL.appendChild(LI);

                        const password: string | strengthCheckedPassword = simplePass(passwordModifiers);

                        injectSimplePass(
                            password_INPUT,
                            password,
                            targetElements
                        );

                        passwordContainer.prepend(OL);

                        if(typeof (password) !== 'string') {

                            LI.addEventListener('click', function () {

                                injectStrengthStats(
                                    password,
                                    targetElements
                                );

                                if(statIndex) {
                                    statIndex.innerText = `(For Password: ${LI.dataset.simplePassIndex})`;
                                }

                            });

                        }

                    } else if(passwordContainer.querySelector('ol')) {

                        passwordContainer.innerHTML = '';

                        const password_LABEL: HTMLLabelElement = document.createElement('label');
                        password_LABEL.innerText = "Password:";

                        const password_INPUT: HTMLInputElement = document.createElement('input');
                        password_INPUT.classList.add(cFig.elements.passwordTarget.substring(1));
                        password_INPUT.type = 'text';
                        password_INPUT.setAttribute('readonly', 'readonly');

                        password_LABEL.appendChild(password_INPUT);

                        passwordContainer.appendChild(password_LABEL);

                        injectSimplePass(
                            password_INPUT,
                            simplePass(
                                passwordModifiers,
                                cFig
                            ),
                            targetElements
                        );

                    } else {

                        const passwordTarget: HTMLElement | HTMLInputElement | null = document.body.querySelector<HTMLElement | HTMLInputElement>(cFig.elements.passwordTarget);

                        if(!passwordTarget) {

                            messageHandler(
                                `ERROR.simplePass-I.2: Could not find a password target`,
                                {
                                    htmlMessage: (
                                        messageBoard ? {
                                            messageBoard: messageBoard
                                        } :
                                            undefined
                                    ),
                                    consoleMessage: true,
                                    level: "ERROR",
                                },
                                cFig
                            );

                            return;
                        }

                        injectSimplePass(
                            passwordTarget,
                            simplePass(
                                passwordModifiers,
                                cFig
                            ),
                            targetElements
                        );

                    }

                });

                if(cFig.defaultPasswordModifier) {

                    for(const [key, value] of Object.entries(cFig.defaultPasswordModifier)) {

                        const input: HTMLInputElement | null = passwordForm.querySelector<HTMLInputElement>(`[name=${key}]`);

                        if(
                            input
                            && value
                        ) {

                            if(
                                input.type === 'checkbox'
                                || input.type === 'radio'
                            ) {
                                input.checked = true;
                            } else {
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
                const radioCheckboxes: NodeListOf<HTMLInputElement> = passwordForm.querySelectorAll<HTMLInputElement>('input[data-radioCheckbox]');

                radioCheckboxes.forEach((input): void => {

                    input.addEventListener('click', function (): void {

                        radioCheckboxes.forEach((input): void => {

                            if(input.value !== this.value) {

                                if(input.checked) {
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
        if(cFig.elements.actions.copy) {

            document.body.querySelector(cFig.elements.actions.copy)?.addEventListener(('click'), function (this: HTMLElement) {

                let copiedPassword: string = '';

                // Why are we not finding our new elements?
                document.body.querySelectorAll<HTMLLIElement>(cFig.elements.passwordTarget).forEach((password: HTMLLIElement, passwordIndex: number): void => {

                    if(!passwordIndex) {
                        copiedPassword += `${getInnerTextOrValue(password)}`;
                        return;
                    }

                    copiedPassword += `\n${getInnerTextOrValue(password)}`;

                });

                navigator.clipboard.writeText(copiedPassword).then((): void => {

                    this.style.backgroundColor = `green`;
                    this.innerText = 'Copied!';

                    setTimeout(() => {

                        this.toggleAttribute('style');
                        this.innerText = 'Copy';

                    }, 5000);

                })
                    .catch((error): void => {

                        messageHandler(
                            `ERROR.simplePass-Ic.1: Unable to copy to clipboard! Environment Error: ${error.message}.`,
                            {
                                htmlMessage: (
                                    messageBoard ? {
                                        messageBoard: messageBoard
                                    } :
                                        undefined
                                ),
                                consoleMessage: true,
                                level: "ERROR",
                            },
                            cFig
                        );

                    });

            });

        }

    }

}
