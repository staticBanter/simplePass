'use strict';

import I_passwordModifier from "../data/interfaces/passwordModifier.interface.js";

export default function createModifierList(modifier:I_passwordModifier,list:Array<any>):Array<string>{

    const modifiers:Array<string> = [];

    Object.keys(modifier).forEach((key:string)=>{
        if(list.includes(key)){
            modifiers.push(key);
        }
    })

    return modifiers;

}