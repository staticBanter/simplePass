'use strict';
import characterCodeConstraints from "../data/objects/characterCodeConstraints.object.js";
export default function generateCharCode(charCodeRequest, flags) {
    const charCode = self.crypto.getRandomValues(new Uint8Array(1))[0];
    if (charCodeRequest.charCodeOptions?.excludeCharacters) {
        if (charCodeRequest.charCodeOptions.excludeCharacters.includes(String.fromCharCode(charCode))) {
            return generateCharCode(charCodeRequest);
        }
    }
    if (flags) {
        if (flags?.beginning) {
            if (charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_beginning')) {
                if (charCodeRequest.charCodeOptions.whitespaceOptions.includes('w_beginning_required')) {
                    return 32;
                }
                if (charCode === 32) {
                    return charCode;
                }
            }
            else if (charCode === 32) {
                return generateCharCode(charCodeRequest, flags);
            }
        }
        if (flags?.end) {
            if (charCodeRequest.charCodeOptions?.whitespaceOptions?.includes('w_end')) {
                if (charCodeRequest.charCodeOptions.whitespaceOptions.includes('w_end_required')) {
                    return 32;
                }
                if (charCode === 32) {
                    return charCode;
                }
            }
            else if (charCode === 32) {
                return generateCharCode(charCodeRequest, flags);
            }
        }
    }
    if (characterCodeConstraints[charCodeRequest.charType]) {
        if (characterCodeConstraints[charCodeRequest.charType]?.single
            && characterCodeConstraints[charCodeRequest.charType]?.single === charCode) {
            return charCode;
        }
        const min = characterCodeConstraints[charCodeRequest.charType]?.min;
        const max = characterCodeConstraints[charCodeRequest.charType]?.max;
        const range = characterCodeConstraints[charCodeRequest.charType]?.range;
        if (range) {
            if ((min
                && max)
                && (charCode >= min
                    && charCode <= max)) {
                if (charCode === min
                    || charCode === max) {
                    return charCode;
                }
                for (let i = 0; i < range.length; i++) {
                    if (charCode >= range[i][0]
                        && charCode <= range[i][1]) {
                        return charCode;
                    }
                }
            }
        }
        else if ((min
            && max)
            && (charCode >= min
                && charCode <= max)) {
            return charCode;
        }
    }
    else {
        throw new Error('sP-gCC_E.1: A requested character did not have a character constraint set and could not be generated.');
    }
    return generateCharCode(charCodeRequest, flags);
}
