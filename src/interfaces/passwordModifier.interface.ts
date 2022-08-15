'use strict';

export default interface I_passwordModifier {
    length:number|string,
    lowercase:boolean,
    uppercase:boolean,
    numbers:boolean,
    punctuation:boolean,
    special:boolean,
    memorable:boolean,
}
