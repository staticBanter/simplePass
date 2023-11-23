'use strict';

import {assert} from "chai";
import ensureRepeatingCharacters from "../../javascript/module/functions/ensureRepeatingCharacters.js";

describe('ensureRepeatingCharacters(string:string,options:ensureRepeatingCharacterOptions):string',function(){

    /**
     * TODO: Implement this functionality.
     */
    // describe('String with an already repeated character',function(){

    //     const string = 'aabc';
    //     const options = {
    //         repeatingSetCount:1
    //     }

    //     const results = ensureRepeatingCharacters(string,options);

    //     it('Should return a string',function(){

    //         assert.isString(results);

    //     });

    //     it('Should return the same string',function(){
    //         assert.strictEqual(results, string);
    //     })

    // })

    describe('String without any initial repeating characters',function(){


        describe('Various repeating character set amounts',function(){

            const repeatingCharacterSetAmounts = [
                1,
                2,
                3
            ];

            repeatingCharacterSetAmounts.forEach((amount)=>{

                describe(`${amount} repeating character sets`,function(){

                    const string = 'abc';
                    const options = {
                        repeatingSetCount:amount
                    };

                    const results = ensureRepeatingCharacters(string,options);

                    it('Should return a string',function(){

                        assert.isString(results);

                    });

                    it(`Should contain at least the set amount of repeats(${amount})`,function(){

                        const characters = {}

                        results.split('')
                        .forEach((char)=>{
                            characters[char]?characters[char]++:characters[char]=1;
                        });

                        const threshold = 2;
                        const propertyPassedThreshold = [];

                        Object.entries(characters)
                        .forEach(([key,value])=>{
                            if(value>=threshold){
                                propertyPassedThreshold.push(true);
                            }
                        });

                        assert.isTrue((propertyPassedThreshold.length>=amount));

                    });

                });
            });

        });

        describe('Providing a custom character set to repeat',function(){

            const string = 'abc';
            const options = {
                customCharacterSet:'de'
            }

            const results = ensureRepeatingCharacters(string,options);

            it('Should return a string',function(){

                assert.isString(results);

            });

            it('Should contain the characters from the original string',function(){
                string.split('')
                .forEach((character)=>function(){
                    assert.include(results, character);
                });
            });

            it('Should contain the characters from our custom set',function(){

                options.customCharacterSet
                .split('')
                .forEach((character)=>{
                    assert.include(results, character);
                });

            });

            it('Should repeat each character from our custom set at least once',function(){

                const characters = {};
                const matchCharacters = {
                    d:2,
                    e:2,
                };

                results.split('')
                .filter((character)=>{
                    if(options.customCharacterSet.includes(character)){
                        return character;
                    }
                })
                .forEach((char)=>{
                    characters[char]?characters[char]++:characters[char]=1;
                });

                Object.entries(matchCharacters).forEach(([key,value])=>{
                    assert.propertyVal(characters, key, value)
                });

            });

        });

        describe('Preserving characters in certain positions',function(){

            const string = 'abc';

            describe('Preserve the beginning character',function(){

                const options = {
                    preservations:{
                        beginning:true
                    }
                }

                const results = ensureRepeatingCharacters(string,options);

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should preserve our first character',function(){

                    assert.strictEqual(results[0], string[0]);

                });

            });

            describe('Preserve the last character',function(){

                const options = {
                    preservations:{
                        end:true
                    }
                }

                const results = ensureRepeatingCharacters(string,options);

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should preserve our last character',function(){

                    assert.strictEqual(results[results.length-1], string[string.length-1]);

                });

            });

            describe('Preserve both the beginning and last characters',function(){

                const options = {
                    preservations:{
                        beginning:true,
                        end:true
                    }
                }

                const results = ensureRepeatingCharacters(string,options);

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should preserve our first and last character',function(){

                    const characters = [results[0],results[results.length-1]];
                    const charactersMatch = [string[0],string[string.length-1]];

                    assert.sameOrderedMembers(characters,charactersMatch);

                });

            });

        });

        describe('Mix all options',function(){


            const string = 'abc';

            const options = {
                repeatingSetCount:2,
                customCharacterSet:'de',
                preservations:{
                    beginning:true,
                    end:true,
                }
            }


            const results = ensureRepeatingCharacters(string,options);

                it('Should return a string',function(){

                    assert.isString(results);

                });

                it('Should preserve our first and last character',function(){

                    const characters = [results[0],results[results.length-1]];
                    const charactersMatch = [string[0],string[string.length-1]];

                    assert.sameOrderedMembers(characters,charactersMatch);

                });

                it('Should repeat each character from our custom set at least once',function(){

                    const characters = {};
                    const matchCharacters = {
                        d:2,
                        e:2,
                    };

                    results.split('')
                    .filter((character)=>{
                        if(options.customCharacterSet.includes(character)){
                            return character;
                        }
                    })
                    .forEach((char)=>{
                        characters[char]?characters[char]++:characters[char]=1;
                    });

                    Object.entries(matchCharacters).forEach(([key,value])=>{
                        assert.propertyVal(characters, key, value);
                    });

                });

                it(`Should contain at least the set amount of repeats(${options.repeatingSetCount})`,function(){

                    const characters = {}

                    results.split('')
                    .forEach((char)=>{
                        characters[char]?characters[char]++:characters[char]=1;
                    });

                    const threshold = 2;
                    const propertyPassedThreshold = [];

                    Object.entries(characters)
                    .forEach(([key,value])=>{
                        if(value>=threshold){
                            propertyPassedThreshold.push(true);
                        }
                    });

                    assert.isTrue((propertyPassedThreshold.length>=options.repeatingSetCount));

                });

        });

    });

});
