'use strict';

interface I_minMax{
    min:number,
    max:number,
}

interface I_charCodeConstraintsAttributes {
    min?:number,
    max?:number,
    range?:Array<Array<number>>
    single?:number
}

export default interface I_characterCodeConstraints{
    [index:string]:I_charCodeConstraintsAttributes|undefined
    lowercase?:I_minMax,
    uppercase?:I_minMax,
    numbers?:I_minMax,
    punctuation?:I_minMax & {
        range:Array<Array<number>>
    },
    whitespace?:{
        single:number
    }
}

