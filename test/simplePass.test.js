'use strict';

import {assert} from "chai";
import simplePass from "../javascript/module/simplePass.js";
import * as Crypto from "node:crypto";
import matchCharacterSetConstraint from "../javascript/module/functions/matchCharacterSetConstraint.js";
import characterCodeConstraints from "../javascript/module/data/objects/characterCodeConstraints.js";
import passwordPreConfigs from "../javascript/module/data/objects/passwordPreConfigs.js";

describe('simplePass (modifier: passwordModifier | FormData = config.defaultPasswordModifier,cFig: typeof config = config): string | strengthCheckedPassword | Promise<strengthCheckedPassword>',function(){

    describe('No promises',function(){

        describe('Standard usage',function(){

            let passwordModifier =  {
                length:22,
            }

            const characterSets = {
                lowercase:true,
                uppercase:true,
                numbers:true,
                punctuation:true,
            }

            passwordModifier = Object.assign(passwordModifier,characterSets);

            const config = {
                messages:{
                    prefix: "ERROR.simplePass-~.~:",
                    templateMarker: "~",
                },
                cryptoModule:Crypto
            }

            const results = simplePass(passwordModifier,config)

            it('Should return a string',function(){

                assert.isString(results);

            });

            it('Should be the desired length',function(){
                assert.strictEqual(results.length, passwordModifier.length);
            });

            it('Should contain at least one of each of our password modifier character sets',function(){

                const characterSetTypes = {}

                Object.keys(characterSets).forEach((characterSet)=>{

                    results.split('').forEach((char)=>{

                        if(matchCharacterSetConstraint(char.charCodeAt(0),characterCodeConstraints[characterSet])){
                            characterSetTypes[characterSet]?characterSetTypes[characterSet]++:characterSetTypes[characterSet]=1;
                        }

                    });

                });

                Object.keys(characterSets).forEach((characterSet)=>{

                    assert.isAtLeast(characterSetTypes[characterSet], 1);

                });

            });

        });

        describe('Excluding characters',function(){

            let passwordModifier =  {
                length:3,
                excludeCharacters:'bcdefghijklmnopqrstuvwxyz'
            }

            const characterSets = {
                lowercase:true,
            }

            passwordModifier = Object.assign(passwordModifier,characterSets);

            const config = {
                messages:{
                    prefix: "ERROR.simplePass-~.~:",
                    templateMarker: "~",
                },
                cryptoModule:Crypto
            }

            const results = simplePass(passwordModifier,config)

            it('Should return a string',function(){

                assert.isString(results);

            });

            it('Should return a string of desired length',function(){
                assert.strictEqual(results.length, passwordModifier.length)
            });

            it('Should return a string containing a single type of character',function(){
                results.split('').forEach((character)=>{
                    assert.strictEqual(character, 'a');
                });
            });

        });

        describe('Unique characters',function(){

            let passwordModifier =  {
                length:3,
                uniqueCharacters:true
            };

            const characterSets = {
                lowercase:true,
            };

            passwordModifier = Object.assign(passwordModifier,characterSets);

            const config = {
                messages:{
                    prefix: "ERROR.simplePass-~.~:",
                    templateMarker: "~",
                },
                cryptoModule:Crypto
            };

            const results = simplePass(passwordModifier,config);

            it('Should return a string',function(){

                assert.isString(results);

            });

            it('Should return a string of desired length',function(){
                assert.strictEqual(results.length, passwordModifier.length);
            });

            it('Should contain only unique characters',function(){

                const foundCharacters = {};

                results.split('').forEach((character)=>{
                    foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                });

                Object.values(foundCharacters).forEach((value)=>{
                    assert.strictEqual(value, 1);
                });

            });

        });

        describe('Repeating characters',function(){

            describe('Repeating characters (boolean)',function(){

                let passwordModifier =  {
                    length:5,
                    repeatingCharacter:true
                }

                const characterSets = {
                    lowercase:true,
                }

                passwordModifier = Object.assign(passwordModifier,characterSets);

                const config = {
                    messages:{
                        prefix: "ERROR.simplePass-~.~:",
                        templateMarker: "~",
                    },
                    cryptoModule:Crypto
                }

                const results = simplePass(passwordModifier,config)

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should return a string of desired length',function(){
                    assert.strictEqual(results.length, passwordModifier.length)
                });

                it('Should at least one repeating character ',function(){

                    const foundCharacters = {};

                    results.split('').forEach((character)=>{
                        foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                    });

                    assert.isAtLeast(
                        Object.values(foundCharacters).filter((value)=>{
                            if(value > 1){
                                return value;
                            }
                        }).length,
                    1
                    );

                });

            });

            describe('Repeating characters (with max repeats)',function(){

                let passwordModifier =  {
                    length:5,
                    repeatingCharacter:true,
                    max_repeatingCharacter:2
                }

                const characterSets = {
                    lowercase:true,
                }

                passwordModifier = Object.assign(passwordModifier,characterSets);

                const config = {
                    messages:{
                        prefix: "ERROR.simplePass-~.~:",
                        templateMarker: "~",
                    },
                    cryptoModule:Crypto
                }

                const results = simplePass(passwordModifier,config)

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should return a string of desired length',function(){
                    assert.strictEqual(results.length, passwordModifier.length)
                });

                it(`Should at least ${passwordModifier.max_repeatingCharacter} repeating character `,function(){

                    const foundCharacters = {};

                    results.split('').forEach((character)=>{
                        foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                    });

                    assert.isAtLeast(
                        Object.values(foundCharacters).filter((value)=>{
                            if(value > 1){
                                return value;
                            }
                        }).length,
                    passwordModifier.max_repeatingCharacter
                    );

                });

            });

            describe('Repeating characters (custom repeating characters)',function(){

                let passwordModifier =  {
                    length:6,
                    repeatingCharacter:true,
                    customRepeatingCharacters:'a:2 b:2'
                }

                const customRepeatingCharacters = {
                    a:2,
                    b:2
                };

                const characterSets = {
                    lowercase:true,
                }

                passwordModifier = Object.assign(passwordModifier,characterSets);

                const config = {
                    messages:{
                        prefix: "ERROR.simplePass-~.~:",
                        templateMarker: "~",
                    },
                    cryptoModule:Crypto
                }

                const results = simplePass(passwordModifier,config)

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should return a string of desired length',function(){
                    assert.strictEqual(results.length, passwordModifier.length)
                });

                it(`Should at least ${passwordModifier.max_repeatingCharacter} repeating character `,function(){

                    const foundCharacters = {};

                    results.split('').forEach((character)=>{
                        foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                    });

                    Object.entries(foundCharacters)
                    .filter(([key,value])=>{
                        if(
                            Object.keys(customRepeatingCharacters).includes(key)
                            && value >= customRepeatingCharacters[key]
                        ){
                            return [key,value];
                        }
                    })
                    .forEach(([key,value])=>{
                        assert.isAtLeast(value,customRepeatingCharacters[key]);
                    });

                });

            });

        });

        describe('Using a preConfig',function(){

            const preConfig = "fourDigitPin";

            let passwordModifier =  {
                length:3,
                preConfig:preConfig
            };

            const characterSets = {
                numbers:true,
            };

            passwordModifier = Object.assign(passwordModifier,characterSets);

            const config = {
                messages:{
                    prefix: "ERROR.simplePass-~.~:",
                    templateMarker: "~",
                },
                cryptoModule:Crypto
            };

            const results = simplePass(passwordModifier,config);

            it('Should return a string',function(){
                assert.isString(results);
            });

            it('Should return a string of desired length',function(){
                assert.strictEqual(results.length, passwordPreConfigs[preConfig].length);
            });

            it('Should contain at least one of each character set from out preConfig',function(){

                const characterSetTypes = {}

                Object.keys(characterSets).forEach((characterSet)=>{

                    results.split('').forEach((char)=>{

                        if(matchCharacterSetConstraint(char.charCodeAt(0),characterCodeConstraints[characterSet])){
                            characterSetTypes[characterSet]?characterSetTypes[characterSet]++:characterSetTypes[characterSet]=1;
                        }

                    });

                });

                Object.keys(characterSets).forEach((characterSet)=>{

                    assert.isAtLeast(characterSetTypes[characterSet], 1);

                });

            });

        });

        describe('Whitespace characters',function(){

            describe('Whitespace beginning',function(){

                describe('Optional',function(){

                    let passwordModifier =  {
                        length:4,
                    }

                    const characterSets = {
                        lowercase:true,
                        whitespaceBeginning:true,
                    }

                    let upperLimit = 512;

                    const results = [];

                    passwordModifier = Object.assign(passwordModifier,characterSets);

                    const config = {
                        messages:{
                            prefix: "ERROR.simplePass-~.~:",
                            templateMarker: "~",
                        },
                        cryptoModule:Crypto
                    }

                    while(upperLimit--){

                        results.push(simplePass(passwordModifier,config)[0]);

                    }

                    it('Should return a string',function(){

                        assert.isString(simplePass(passwordModifier,config));

                    });

                    it('Should be the desired length',function(){
                        assert.strictEqual(simplePass(passwordModifier,config).length, passwordModifier.length);
                    });

                    it('Should produce a password with a whitespace a the beginning',function(){
                        assert.include(results, ' ')
                    });

                });

                describe('Required',function(){

                    let passwordModifier =  {
                        length:4,
                    }

                    const characterSets = {
                        lowercase:true,
                        whitespaceBeginning:true,
                        required_whitespaceBeginning:true,
                    }

                    passwordModifier = Object.assign(passwordModifier,characterSets);

                    const config = {
                        messages:{
                            prefix: "ERROR.simplePass-~.~:",
                            templateMarker: "~",
                        },
                        cryptoModule:Crypto
                    }

                    const results = simplePass(passwordModifier,config)

                    it('Should return a string',function(){

                        assert.isString(results);

                    });

                    it('Should be the desired length',function(){
                        assert.strictEqual(results.length, passwordModifier.length);
                    });

                    it('Should contain a whitespace as the first character',function(){
                        assert.strictEqual(results[0], ' ');
                    });

                });

            });

            describe('Whitespace end',function(){

                describe('Optional',function(){

                    let passwordModifier =  {
                        length:4,
                    }

                    const characterSets = {
                        lowercase:true,
                        whitespaceEnd:true,
                    }

                    let upperLimit = 512;

                    const results = [];

                    passwordModifier = Object.assign(passwordModifier,characterSets);

                    const config = {
                        messages:{
                            prefix: "ERROR.simplePass-~.~:",
                            templateMarker: "~",
                        },
                        cryptoModule:Crypto
                    }

                    while(upperLimit--){

                        const string = simplePass(passwordModifier,config);

                        results.push(string[string.length-1]);

                    }

                    it('Should return a string',function(){

                        assert.isString(simplePass(passwordModifier,config));

                    });

                    it('Should be the desired length',function(){
                        assert.strictEqual(simplePass(passwordModifier,config).length, passwordModifier.length);
                    });

                    it('Should produce a password with a whitespace a the beginning',function(){
                        assert.include(results, ' ')
                    });

                });

                describe('Required',function(){

                    let passwordModifier =  {
                        length:4,
                    }

                    const characterSets = {
                        lowercase:true,
                        whitespaceEnd:true,
                        required_whitespaceEnd:true,
                    }

                    passwordModifier = Object.assign(passwordModifier,characterSets);

                    const config = {
                        messages:{
                            prefix: "ERROR.simplePass-~.~:",
                            templateMarker: "~",
                        },
                        cryptoModule:Crypto
                    }

                    const results = simplePass(passwordModifier,config)

                    it('Should return a string',function(){

                        assert.isString(results);

                    });

                    it('Should be the desired length',function(){
                        assert.strictEqual(results.length, passwordModifier.length);
                    });

                    it('Should contain a whitespace as the last character',function(){
                        assert.strictEqual(results[results.length-1], ' ');
                    });

                })

            });

        });

        describe('Strength checks',function(){


            let passwordModifier =  {
                length:22,
            }

            const characterSets = {
                lowercase:true,
                uppercase:true,
                numbers:true,
                punctuation:true,
            }

            passwordModifier = Object.assign(passwordModifier,characterSets);

            const config = {
                messages:{
                    prefix: "ERROR.simplePass-~.~:",
                    templateMarker: "~",
                },
                strengthCheck:true,
                cryptoModule:Crypto
            }

            const results = simplePass(passwordModifier,config);

            const resultKeys = {
                'password':'string',
                'entropy':'number',
                'possibleCombinations':'number',
                'binaryStringLength':'number',
                'binaryString':'string',
                'averageCharacterBitLength':'number',
                'uniqueCharactersPercentage':'number',
            }

            it('Should return an object',function(){
                assert.isObject(results);
            });

            it('Should have only the desired keys',function(){
                assert.hasAllKeys(results, Object.keys(resultKeys));
            });

            it('Should have all keys of the desired type',function(){
                Object.entries(results).forEach(([key,value])=>{
                    assert.strictEqual(typeof(value), resultKeys[key]);
                });
            });

            describe('The returned password',function(){

                it('Should be the desired length',function(){
                    assert.strictEqual(results.password.length, passwordModifier.length)
                });

            })

        });

    });

    /**
     * TODO: Test promised return values.
     */

});
