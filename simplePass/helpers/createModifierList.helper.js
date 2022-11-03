'use strict';
export default function createModifierList(modifier, list) {
    const modifiers = [];
    Object.keys(modifier).forEach((key) => {
        if (list.includes(key)) {
            modifiers.push(key);
        }
    });
    return modifiers;
}
