'use strict';

/**
 * Interface for object that represents a Password Modifier.
 *
 * @interface I_passwordModifier
 * @module
 */
export default interface I_passwordModifier {
    [index: string]: number|string|boolean|undefined;

    length:number|string;
    lowercase?:boolean,
    uppercase?:boolean,
    numbers?:boolean,
    punctuation?:boolean,
    special?:boolean,
    memorable?:boolean,
    w_beginning?:boolean,
    w_end?:boolean,
    w_between?:boolean,
}
