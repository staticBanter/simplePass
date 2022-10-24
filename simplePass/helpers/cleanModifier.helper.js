'use strict';
import L_allowedModifiers from "../lists/allowedModifiers.list.js";
export default function cleanModifier(modifier) {
    const converter = {};
    if (modifier instanceof FormData) {
        for (let [key, value] of modifier.entries()) {
            if (L_allowedModifiers.includes(key)) {
                if (value
                    && (typeof (value) === 'string'
                        || typeof (value) === 'number'
                        || typeof (value) === 'boolean')) {
                    converter[key] = value;
                }
            }
        }
    }
    else {
        for (const [key, value] of Object.entries(modifier)) {
            if (value
                && (typeof (value) === 'string'
                    || typeof (value) === 'number'
                    || typeof (value) === 'boolean')) {
                converter[key] = value;
            }
        }
    }
    return converter;
}
