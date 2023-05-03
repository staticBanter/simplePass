/**
 * An interface describing the 'Strength Checked Password' object.
 *
 * @interface strengthCheckedPassword
 * @property {string} password The strength checked password.
 * @property {number} strengthScore The score the password received.
 * @property {number} entropy The bit entropy of the password.
 */

'use strict'

export default interface strengthCheckedPassword {
    password:string,
    strengthScore:number
    entropy:number,
}
