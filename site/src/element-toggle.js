/*!
 *
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
 *
 */

'use strict';

export default (() => {

    document.body.querySelectorAll('.toggle').forEach((toggle) => {

        toggle.addEventListener('click', () => {

            if(!toggle.dataset.toggleTarget) {
                throw new Error('Toggle was declared without a target');
            }

            if(!toggle?.dataset.toggle) {
                throw new Error('Toggle was declared without any toggles');
            }

            const targets = document.body.querySelectorAll(toggle.dataset.toggleTarget);

            if(!targets) {
                throw new Error(`Could not find toggle target for DQS ${toggle.dataset.toggleTarget}`);
            }

            targets.forEach((target) => {

                toggle.dataset.toggle.split(' ').forEach((attributeValuePair) => {

                    if(attributeValuePair.includes('=')) {

                        const split = attributeValuePair.split('=');

                        if(split[1].includes('|')) {

                            const valuePairs = split[1].split('|');

                            (
                                target.hasAttribute(split[0])
                                && target.getAttribute(split[0]) === valuePairs[0]
                            ) ?
                                target.setAttribute(split[0], valuePairs[1])
                                : target.setAttribute(split[0], valuePairs[0]);

                        } else {

                            (
                                target.hasAttribute(split[0])
                                && target.getAttribute(split[0]) === split[1]
                            )
                                ? target.removeAttribute(split[0])
                                : target.setAttribute(split[0], split[1]);

                        }

                    } else {

                        target.hasAttribute(attributeValuePair) ?
                            target.removeAttribute(attributeValuePair) :
                            target.setAttribute(attributeValuePair, attributeValuePair);

                    }

                });

            });

            const internalAttributes = {
                'data-toggle-state':['on','off'],
                'aria-expanded':['false','true']
            }

            Object.entries(internalAttributes).forEach(([key,value])=>{

                const toggleAttribute = toggle.getAttribute(key);

                // Aria attributes have to be explicitly set first
                if(
                    key.includes('aria-')
                    && toggleAttribute
                ){
                    toggleAttribute === value[1]?
                        toggle.setAttribute(key, value[0]):
                        toggle.setAttribute(key, value[1]);
                }else if(!key.includes('aria-')){
                    toggleAttribute === value[1]?
                    toggle.setAttribute(key, value[0]):
                    toggle.setAttribute(key, value[1]);
                }

            })

        });

        if(toggle.dataset.loadToggle){
            toggle.click();
        }

    });

})();
