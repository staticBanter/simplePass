'use strict';

import I_passwordModifier from "../data/interfaces/passwordModifier.interface.js";
import L_allowedModifiers from "../data/lists/allowedModifiers.list.js";

export default function cleanModifier(modifier:I_passwordModifier|FormData|object):I_passwordModifier{
    const converter:I_passwordModifier= {};

    if(modifier instanceof FormData){
        for (let [key,value] of modifier.entries()) {
            if(L_allowedModifiers.includes(key)){
                if(
                    value
                    && (
                        typeof(value) === 'string'
                        || typeof(value) === 'number'
                        || typeof(value) === 'boolean'
                    )
                ){
                    converter[key] = value;
                }
            }
        }
    }else{
        for(const [key, value] of Object.entries(modifier)){
            if(
                value
                && (
                    typeof(value) === 'string'
                    || typeof(value) === 'number'
                    || typeof(value) === 'boolean'
                )
            ){
                converter[key] = value;
            }
        }
    }
    
    return converter;

}