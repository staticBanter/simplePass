'use strict';

import {assert} from "chai";
import * as Crypto from "node:crypto";
import generateCharCode from "../../javascript/module/functions/generateCharCode.js";
import characterCodeConstraints from "../../javascript/module/data/objects/characterCodeConstraints.js";

describe('generateCharCode(charCodeRequest: charCodeRequest, flags?: charCodeGenerationFlag): number',function(){

    describe('Standard usage',function(){


        describe('Working with a simple character set',function(){

            const codeConstraint = 'lowercase';
            const characterCodeType = characterCodeConstraints[codeConstraint];

            const charCodeRequest = {
                charType:codeConstraint
            };

            const results = generateCharCode(charCodeRequest,undefined,Crypto);

            it('Should return a number',function(){
                assert.isNumber(results);
            });

            it('Should return a number within the chosen character set range',function(){
                assert.isTrue((
                    results>=characterCodeType.min
                    && results<=characterCodeType.max
                ));
            });

        });

        describe('Working with a complex character set',function(){

            const codeConstraint = 'uppercase_extended_b';
            const characterCodeType = characterCodeConstraints[codeConstraint];

            const charCodeRequest = {
                charType:codeConstraint
            };

            const results = generateCharCode(charCodeRequest,undefined,Crypto);

            it('Should return a number',function(){
                assert.isNumber(results);
            });

            it('Should return a number within the chosen character set range',function(){
                assert.isTrue((
                    results>=characterCodeType.min
                    && results<=characterCodeType.max
                ));
            });

        });

    });

    describe('Excluding characters',function(){

        const codeConstraint = 'lowercase';

        const charCodeRequest = {
            charType:codeConstraint,
            charCodeOptions:{
                excludeCharacters:'bcdefghijklmnopqrstuvwxyz'
            }
        };

        const results = generateCharCode(charCodeRequest,undefined,Crypto);

        it('Should return a number',function(){
            assert.isNumber(results);
        });

        it('Should only return our allowed character code',function(){
            assert.strictEqual(results, 'a'.charCodeAt(0))
        });

    });

    describe('Whitespace options without flags',function(){

        const codeConstraint = 'lowercase';

        const charCodeRequest = {
            charType: codeConstraint,
            charCodeOptions: {
                whitespaceOptions: [
                    'whitespaceBeginning',
                    'whitespaceEnd',
                ]
            }
        };

        const results = [];

        let upperLimit = 512;

        while(upperLimit--){
            results.push(generateCharCode(charCodeRequest,undefined,Crypto));
        }

        it('Should return a number',function(){
            assert.isNumber(generateCharCode(charCodeRequest,undefined,Crypto));
        })

        it('Should not generate a whitespace code without a flag option',function(){
            assert.notInclude(results, 32);
        });

    });

    describe('Whitespace options with flags',function(){

        describe('With beginning flag',function(){

            const codeConstraint = 'lowercase';

            const charCodeRequest = {
                charType: codeConstraint,
                charCodeOptions: {
                    whitespaceOptions: [
                        'whitespaceBeginning'
                    ],
                    excludeCharacters:'abcdefghijklmnopqrstuvwxy'
                },
            };

            const flags = {
                beginning:true,
            };

            let upperLimit = 512;

            const results = [];

            while(upperLimit--){

                results.push(generateCharCode(charCodeRequest,flags,Crypto))

            }

            it('Should return a number',function(){
                assert.isNumber(generateCharCode(charCodeRequest,flags,Crypto));
            });

            it('Should produce a whitespace character code',function(){
                assert.include(results, 32)
            });

            it('Should not produce a whitespace character code with mismatch options (This could take a while)',function(){

                const charCodeRequest = {
                    charType: codeConstraint,
                    charCodeOptions: {
                        whitespaceOptions: [
                            'whitespaceBeginning'
                        ],
                        excludeCharacters:'abcdefghijklmnopqrstuvwxy'
                    },
                };

                const flags = {
                    end: true,
                }

                let upperLimit = 512;

                const results = [];

                while(upperLimit--){

                    results.push(generateCharCode(charCodeRequest,flags,Crypto))

                }

                assert.notInclude(results,32);

            });

        });

        describe('With end flag',function(){

            const codeConstraint = 'lowercase';

            const charCodeRequest = {
                charType: codeConstraint,
                charCodeOptions: {
                    whitespaceOptions: [
                        'whitespaceEnd'
                    ],
                    excludeCharacters:'abcdefghijklmnopqrstuvwxy'
                },
            };

            const flags = {
                end:true,
            };

            const results = [];

            let upperLimit = 512;

            while(upperLimit--){
                results.push(generateCharCode(charCodeRequest,flags,Crypto));
            }

            it('Should return a number',function(){
                assert.isNumber(generateCharCode(charCodeRequest,flags,Crypto));
            });

            it('Should produce a whitespace character code',function(){
                assert.include(results, 32)
            });

            it('Should not produce a whitespace character code with mismatch options (This could take a while...)',function(){

                const charCodeRequest = {
                    charType: codeConstraint,
                    charCodeOptions: {
                        whitespaceOptions: [
                            'whitespaceEnd'
                        ],
                        excludeCharacters:'abcdefghijklmnopqrstuvwxy'
                    },
                };

                const flags = {
                    beginning: true,
                }

                const results = [];

                let upperLimit = 512;

                while(upperLimit--){
                    results.push(generateCharCode(charCodeRequest,flags,Crypto));
                }

                assert.notInclude(results,32);

            });

        });

    });

});
