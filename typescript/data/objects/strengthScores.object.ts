'use strict';

import strengthScoreAttributes from "../interfaces/strengthScoreAttributes.interface";

/**
 * @file
 * @module strengthScores
 */

/**
 * An object that describes the strength scores assigned to a password.
 *
 * @const {object} strengthScores
 * @property {strengthScoreAttributes} bad The weakest score a password can receive. A password with this score should not be used.
 * @property {strengthScoreAttributes} modest The second weakest score a password can receive. While passwords with this score may look secure,
 * they often lack in entropy. Passwords that receive this score should not be used.
 * @property {strengthScoreAttributes} ok This is the middle score a password can receive. This is the beginning of what we consider a 'strong' password.
 * A password that receives this score should be considered to be updated to a 'good' password score.
 * @property {strengthScoreAttributes} good This score is considered to be the current 'good' password strength. Passwords that receive this score are strong
 * enough to be used as a password.
 * @property {strengthScoreAttributes} excellent The highest score a password can receive. Anything above this score is considered a strong password.
 */
const strengthScores:{
    [index: string]: strengthScoreAttributes;
    bad: strengthScoreAttributes,
    modest: strengthScoreAttributes,
    ok: strengthScoreAttributes,
    good: strengthScoreAttributes,
    excellent: strengthScoreAttributes
} = {
    bad:{
        colour: "red",
        score: 50
    },
    modest:{
        colour: "yellowgreen",
        score:75
    },
    ok:{
        colour:"limegreen",
        score:80,
    },
    good:{
        colour:"green",
        score:95
    },
    excellent:{
        colour:"darkgreen",
        score:110
    }
};

export default strengthScores;