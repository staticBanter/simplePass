'use strict';
const characterCodeConstraints = {
    lowercase: {
        min: 97,
        max: 122,
    },
    uppercase: {
        min: 65,
        max: 90,
    },
    numbers: {
        min: 48,
        max: 57,
    },
    punctuation: {
        min: 33,
        max: 126,
        range: [
            [33, 47],
            [58, 64],
            [91, 96],
            [123, 126]
        ]
    },
    whitespace: {
        single: 32
    },
};
export default characterCodeConstraints;
