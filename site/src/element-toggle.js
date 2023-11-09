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

        });

    });

})();
