'use strict';

import {assert} from "chai";
import allowedModifiers from "../../javascript/module/data/lists/allowedModifiers.js";
import whitespaceAttributes from "../../javascript/module/data/lists/whitespaceAttributes.js";
import cleanModifier from "../../javascript/module/functions/cleanModifier.js";
import characterCodeConstraints from "../../javascript/module/data/objects/characterCodeConstraints.js";

describe('cleanModifier(modifier:passwordModifier|FormData|object):passwordModifier',function(){

    describe('Passing a \'dirty\' object',function(){

        const results = cleanModifier({
            length:22,
            lowercase:true,
            uppercase:true,
            non_password_modifier_1:'value_1',
            non_password_modifier_2:true
        });

        const allowedAttributeTypes = [
            'string',
            'boolean',
            'number'
        ]

        it('Should return an object',function(){
            assert.isObject(results)
        });

        const combinedModifiers = allowedModifiers.concat(Object.keys(characterCodeConstraints)).concat(whitespaceAttributes);

        it('Should only contain object keys that are usable attributes',function(){
            Object.keys(results).forEach((key)=>{
                assert.include(combinedModifiers, key)
            });
        });

        it(`Should only contain properties that are of the following types: ${allowedAttributeTypes.join(', ')}`,function(){
            Object.values(results).forEach((property)=>{
                assert.include(allowedAttributeTypes,typeof(property));
            });
        });

    });

});
