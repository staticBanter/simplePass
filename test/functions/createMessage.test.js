'use strict';

import errors from "../../javascript/module/data/objects/errors.js";
import createMessage from "../../javascript/module/functions/createMessage.js"
import config from "../../javascript/module/simplePass.config.js";
import {assert} from "chai";

describe('createMessage(templateString:string,replacements:Array<string>,cFig:typeof config = config):string',function(){


    describe('Standard usage',function(){

        const messagePrefixReplacements = [
            'function_name',
            'error_code'
        ];

        describe('Even replacements',function(){

            const stringReplacements = [
                'replacement_1',
                'replacement_2'
            ];

            const replacements = messagePrefixReplacements.concat(stringReplacements);

            const afterMessageReplacements = [
                `ERROR.simplePass-${messagePrefixReplacements[0]}.${messagePrefixReplacements[1]}:`
            ].concat(stringReplacements);

            const results = createMessage(errors.toManyAttributes,replacements);

            it('Should return a string',function(){
                assert.isString(results);
            });

            it('Should remove all template markers',function(){
                assert.notInclude(results, config.messages.templateMarker);
            });

            it('Should contain all the replacements',function(){

                replacements.forEach((replacement)=>{
                    assert.include(results, replacement)
                });

            });

            it('Should contain all the replacements in the same order',function(){

                const insertedReplacements = results.split(' ').filter((word)=>{
                    if(afterMessageReplacements.includes(word)){
                        return word;
                    }
                });

                assert.sameOrderedMembers(insertedReplacements, afterMessageReplacements);

            });

        });

        describe('Less replacements than template markers',function(){

            const stringReplacements = [
                'replacement_1',
            ];

            const replacements = messagePrefixReplacements.concat(stringReplacements);

            const afterMessageReplacements = [
                `ERROR.simplePass-${messagePrefixReplacements[0]}.${messagePrefixReplacements[1]}:`
            ].concat(stringReplacements);

            const results = createMessage(errors.toManyAttributes,replacements);
            const templateCharacter = config.messages.templateMarker;

            it('Should return a string',function(){
                assert.isString(results);
            });

            it('Should remove all template markers',function(){
                assert.notInclude(results, templateCharacter);
            });

            it('Should contain all the replacements',function(){

                replacements.forEach((replacement)=>{
                    assert.include(results, replacement)
                });

            });

            it('Should contain all the replacements in the same order',function(){

                results.split(' ')
                .filter((word)=>{
                    if(afterMessageReplacements.includes(word)){
                        return word;
                    }
                })
                .forEach((insertedReplacement,index)=>{

                    assert.strictEqual(
                        afterMessageReplacements[
                            (index>=afterMessageReplacements.length)?
                            (afterMessageReplacements.length-1):
                            index
                        ],
                        insertedReplacement
                    );

                });

            });

        });

    });

});
