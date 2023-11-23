'use strict';

import {assert} from "chai";
import strengthChecker from "../../javascript/module/functions/strengthChecker.js";
import characterCodeConstraints from "../../javascript/module/data/objects/characterCodeConstraints.js";
import config from "../../javascript/module/simplePass.config.js";

describe('strengthChecker (password: string,constraints: strengthCheckerConstraints,compressions?:Array<CompressionFormat>): strengthCheckedPassword | Promise<strengthCheckedPassword>',function(){

    describe('No promises',function(){

        describe('Standard usage',function(){

            const password = 'Password!?12342';

            const passwordConstraints = {
                characterSets:{
                    used:[
                        'lowercase',
                        'uppercase',
                        'numbers',
                        'punctuation',
                    ],
                    available:Object.keys(characterCodeConstraints)
                },
                min_length:config.passwordConstraints.min_length,
                max_length:config.passwordConstraints.max_length,
            }

            const results = strengthChecker(password,passwordConstraints);

            const mockedResults = {
                password: 'Password!?12342',
                entropy: 98.31883277516457,
                possibleCombinations: 3.952917987596818e+29,
                binaryStringLength: 120,
                binaryString: '01010000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100001 00111111 00110001 00110010 00110011 00110100 00110010',
                averageCharacterBitLength: 8,
                uniqueCharactersPercentage: 86.66666666666667
            }

            it('Should return an object',function(){
                assert.isObject(results);
            });

            it('Should contain keys of the same value as the mocked results',function(){
                Object.entries(mockedResults).forEach(([key,value])=>{
                    assert.propertyVal(results, key, value);
                });
            });

        });

        describe('With character exclusions',function(){

            const password = 'Password!?12342';

            const excludeCharacters  = (exclusions) =>{
                let chars = '';

                for(let i = 32; i < 127; i++){

                    const char = String.fromCharCode(i);

                    if(!exclusions.includes(char)){
                        chars += char;
                    }
                }

                return chars;
            }

            const passwordConstraints = {
                characterSets:{
                    used:[
                        'lowercase',
                        'uppercase',
                        'numbers',
                        'punctuation',
                    ],
                    available:Object.keys(characterCodeConstraints),
                    excludeCharacters:excludeCharacters(password)
                },
                min_length:config.passwordConstraints.min_length,
                max_length:config.passwordConstraints.max_length,
            }

            const results = strengthChecker(password,passwordConstraints);

            const mockedResults = {
                password: 'Password!?12342',
                entropy: 98.31883277516457,
                possibleCombinations: 3.952917987596818e+29,
                binaryStringLength: 120,
                binaryString: '01010000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100001 00111111 00110001 00110010 00110011 00110100 00110010',
                averageCharacterBitLength: 8,
                uniqueCharactersPercentage: 86.66666666666667
            }

            it('Should return an object',function(){
                assert.isObject(results);
            });

            it('Should contain keys of the same value as the mocked results',function(){
                Object.entries(mockedResults).forEach(([key,value])=>{
                    assert.propertyVal(results, key, value);
                });
            });

        });

    });

    describe('Promises',function(){

        describe('Standard usage',function(){

            const password = 'Password!?12342';

            const passwordConstraints = {
                characterSets:{
                    used:[
                        'lowercase',
                        'uppercase',
                        'numbers',
                        'punctuation',
                    ],
                    available:Object.keys(characterCodeConstraints)
                },
                min_length:config.passwordConstraints.min_length,
                max_length:config.passwordConstraints.max_length,
            }

            const compressions = [
                'gzip',
                'deflate',
                // 'deflate-raw'
            ]

            const promisedResults = strengthChecker(password,passwordConstraints,compressions);

            const mockedResults = {
                password: 'Password!?12342',
                entropy: 98.31883277516457,
                possibleCombinations: 3.952917987596818e+29,
                binaryStringLength: 120,
                binaryString: '01010000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100001 00111111 00110001 00110010 00110011 00110100 00110010',
                averageCharacterBitLength: 8,
                uniqueCharactersPercentage: 86.66666666666667
            }

            it('Should eventually return an object',function(done){
                promisedResults.then((results)=>{
                    assert.isObject(results);
                    done();
                })
            });

            it('Should contain keys of the same value as the mocked results',function(done){

                promisedResults.then((results)=>{

                    Object.entries(mockedResults).forEach(([key,value])=>{
                        assert.propertyVal(results, key, value);
                    });

                    done();

                });

            });

        });

        describe('With character exclusions',function(){

            const password = 'Password!?12342';

            const excludeCharacters  = (exclusions) =>{
                let chars = '';

                for(let i = 32; i < 127; i++){

                    const char = String.fromCharCode(i);

                    if(!exclusions.includes(char)){
                        chars += char;
                    }
                }

                return chars;
            }

            const compressions = [
                'gzip',
                'deflate',
                // 'deflate-raw'
            ]

            const passwordConstraints = {
                characterSets:{
                    used:[
                        'lowercase',
                        'uppercase',
                        'numbers',
                        'punctuation',
                    ],
                    available:Object.keys(characterCodeConstraints),
                    excludeCharacters:excludeCharacters(password)
                },
                min_length:config.passwordConstraints.min_length,
                max_length:config.passwordConstraints.max_length,
            }

            const promisedResults = strengthChecker(password,passwordConstraints,compressions);

            const mockedResults = {
                password: 'Password!?12342',
                entropy: 98.31883277516457,
                possibleCombinations: 3.952917987596818e+29,
                binaryStringLength: 120,
                binaryString: '01010000 01100001 01110011 01110011 01110111 01101111 01110010 01100100 00100001 00111111 00110001 00110010 00110011 00110100 00110010',
                averageCharacterBitLength: 8,
                uniqueCharactersPercentage: 86.66666666666667
            }

            it('Should eventually return an object',function(done){
                promisedResults.then((results)=>{
                    assert.isObject(results);
                    done();
                })
            });

            it('Should eventually  contain keys of the same value as the mocked results',function(done){

                promisedResults.then((results)=>{

                    Object.entries(mockedResults).forEach(([key,value])=>{
                        assert.propertyVal(results, key, value);
                    });

                    done()

                });

            });

        });

    });

});
