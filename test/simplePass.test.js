'use strict';

import {assert} from "chai";
import simplePass from "../javascript/module/simplePass.js";
import matchCharacterSetConstraint from "../javascript/module/functions/matchCharacterSetConstraint.js";
import characterCodeConstraints from "../javascript/module/data/objects/characterCodeConstraints.js";
import * as testCases from "./testCases.js";

const batchAmountRerollLimit = 150;

function runTests(testCase){

    describe(`Synchronous Usage`,function(){

        const readableObject = JSON.parse(JSON.stringify(testCase));
        delete readableObject.config.cryptoModule;

        describe(`${JSON.stringify(readableObject)}`,function(){

            let result = simplePass(Object.assign(testCase.passwordModifier, testCase.characterSets),testCase.config);

            if(testCase.config.strengthCheck){

                function testStrengthCheckedPassword(result){

                    describe('Strength Checked Password Attributes',function(){

                        it('Should return an object',function(){
                            assert.isObject(result);
                        });

                        const resultKeys = {
                            'password':'string',
                            'entropy':'number',
                            'possibleCombinations':'number',
                            'binaryStringLength':'number',
                            'binaryString':'string',
                            'averageCharacterBitLength':'number',
                            'uniqueCharactersPercentage':'number',
                        }

                        it('Should have the required strength check attributes',function(){
                            assert.hasAllKeys(result, Object.keys(resultKeys));
                        });

                        it('Should contain keys with values that exist',function(){
                            Object.values(result).forEach((value)=>{
                                assert.exists(value)
                            })
                        });

                        it('Should contain keys with values of the valid type',function(){
                            Object.entries(result).forEach(([key,value])=>{
                                assert.strictEqual(typeof(value), resultKeys[key]);
                            });
                        });

                    })

                }

                testStrengthCheckedPassword(result);
                result = result.password

            }

            it('Should Return String',function(){
                assert.isString(result);
            });

            it('Should be the desired length',function(){
                assert.strictEqual(result.length, testCase.passwordModifier.length)
            });

            it('Should contain at least one of each of our password modifier character sets',function(){

                const characterSetTypes = {}

                const characterSets = Object.keys(testCase.characterSets);

                const whitespaceCharacterSets = [
                    'whitespaceBeginning',
                    'whitespaceEnd',
                    'required_whitespaceBeginning',
                    'required_whitespaceEnd',
                    'whitespaceBetween',
                    'max_whitespaceBetween'
                ];

                characterSets.forEach((characterSet)=>{

                    if(whitespaceCharacterSets.includes(characterSet)){
                        characterSet = 'whitespace'
                    }

                    let reroll=batchAmountRerollLimit;

                    if(
                        characterSet === "whitespace"
                        && !characterSetTypes['whitespace']
                        && !result.includes(" ")
                    ){
                        while(reroll--){
                            result = simplePass(Object.assign(testCase.passwordModifier, testCase.characterSets),testCase.config);
                        }
                    }

                    result.split('').forEach((char)=>{

                        if(matchCharacterSetConstraint(char.charCodeAt(0),characterCodeConstraints[characterSet])){
                            characterSetTypes[characterSet]?characterSetTypes[characterSet]++:characterSetTypes[characterSet]=1;
                        }

                    });

                    if(result.includes(' ')){
                        characterSetTypes['whitespace']=1
                    }

                });

                characterSets.forEach((characterSet)=>{

                    if(whitespaceCharacterSets.includes(characterSet)){
                        characterSet="whitespace"
                    }

                    assert.isTrue((characterSetTypes[characterSet]>=1),`"${Object.keys(characterSetTypes)}" does not match "${characterSets}"`);

                });

            });

            if(testCase.passwordModifier.excludeCharacters){
                it('Should return a string excluding desired characters',function(){
                    assert.notInclude(result.split(), testCase.passwordModifier.excludeCharacters.split())
                });
            }

            if(testCase.passwordModifier.uniqueCharacters){

                it('Should contain only unique characters',function(){

                    const foundCharacters = {};

                    result.split('').forEach((character)=>{
                        foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                    });

                    Object.values(foundCharacters).forEach((value)=>{
                        assert.strictEqual(value, 1);
                    });

                });

            }

            if(testCase.passwordModifier.repeatingCharacter){

                it('Should at least one repeating character ',function(){

                    const foundCharacters = {};

                    result.split('').forEach((character)=>{
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

                if(testCase.passwordModifier.max_repeatingCharacter){

                    it(`Should at least contain ${testCase.passwordModifier.max_repeatingCharacter} repeating character `,function(){

                        const foundCharacters = {};

                        result.split('').forEach((character)=>{
                            foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                        });

                        assert.isAtLeast(
                            Object.values(foundCharacters).filter((value)=>{
                                if(value > 1){
                                    return value;
                                }
                            }).length,
                            testCase.passwordModifier.max_repeatingCharacter
                        );

                    });

                }

                if(testCase.passwordModifier.customRepeatingCharacters){

                    it('Should contain the desired characters the specified number of times',function(){

                        const foundCharacters = {};

                        const expectedCharacters = {};

                        testCase.passwordModifier.customRepeatingCharacters.split(' ').forEach((set)=>{

                            if(set.includes('\\')){

                                const literal = set.slice(1, 2);

                                // Remove the first instance of our literal character.
                                set = set.replace(literal, '');

                                const pieces = set.split(':');

                                if(pieces.length > 2) {
                                    throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                                }

                                if(
                                    !pieces[1]
                                    || pieces[1]<=1
                                ){
                                    pieces[1]=2
                                }

                                expectedCharacters[literal] = pieces[1];

                            }else{

                                let pieces = set.split(':');

                                if(pieces.length > 2) {
                                    throw new Error('Custom Repeating Characters contain more than one ":" (colon) literal.');
                                }

                                if(
                                    !pieces[1]
                                    || pieces[1] <= 0
                                ){
                                    pieces[1] = 2
                                }

                                // Push the set to the array.
                                expectedCharacters[pieces[0]] = parseInt(pieces[1]);

                            }

                        });

                        result.split('').forEach((character)=>{
                            if(testCase.passwordModifier.customRepeatingCharacters.includes(character)){
                                foundCharacters[character]?foundCharacters[character]++:foundCharacters[character]=1;
                            }
                        });

                        Object.entries(expectedCharacters).forEach(([key,value])=>{
                            assert.isTrue((foundCharacters[key]>=value))
                        });

                    });

                }

            }

            if(testCase.passwordModifier.preConfig){

                it('Should only include desired characters',function(){
                    assert.isNull(result.match(testCase.testOpts.notInclude))
                });

            }

            if(
                (
                    testCase.passwordModifier.whitespaceBeginning
                    && !testCase.passwordModifier.required_whiteSpaceBeginning
                )
                && result[0] !== " "
            ){

                let reroll = batchAmountRerollLimit;

                while(reroll--){
                    result = simplePass(Object.assign(testCase.passwordModifier, testCase.characterSets),testCase.config);
                    if(result[0] === " "){
                        break;
                    }
                }

                it(`Should eventually produce a password beginning with a whitespace (took: ${batchAmountRerollLimit-reroll} tries).`,function(){
                    assert.isTrue((result[0]===" "))
                })

            }

            if(
                (
                    testCase.passwordModifier.whitespaceEnd
                    && !testCase.passwordModifier.required_whitespaceEnd
                )
                && result[result.length-1] !== " "
            ){

                let reroll = batchAmountRerollLimit;
                while(reroll--){
                    result = simplePass(Object.assign(testCase.passwordModifier, testCase.characterSets),testCase.config);
                    if(result[result.length-1] === " "){
                        break;
                    }
                }

                it(`Should eventually produce a password ending with a whitespace (took: ${batchAmountRerollLimit-reroll} tries).`,function(){
                    assert.isTrue((result[result.length-1]===" "))
                })

            }

            if(testCase.passwordModifier.required_whitespaceBeginning){

                it('Should contain a whitespace at the beginning of the  password',function(){
                    assert.isTrue((result[0]===" "));
                });
            }

            if(testCase.passwordModifier.required_whitespaceEnd){

                it('Should contain a whitespace at the ending of the  password',function(){
                    assert.isTrue((result[result.length-1]===" "));
                });

            }

            if(testCase.passwordModifier.whitespaceBetween){

                it('Should contain a whitespace the password',function(){
                    assert.isTrue((result.includes(" ")));
                });

                it('Should not contain a whitespace at the beginning of the password',function(){
                    assert.isTrue((result[0] !== " "));
                });

                it('Should not contain a whitespace at the end of the password',function(){
                    assert.isTrue((result[result.length-1] !== " "));
                });

                if(testCase.passwordModifier.max_whitespaceBetween>1){

                    it(`Should return a string containing ${testCase.passwordModifier.max_whitespaceBetween} whitespace characters`,function(){

                        assert.strictEqual(
                            result.split('')
                            .filter((char)=>{
                                return char === ' ';
                            }).length,
                            testCase.passwordModifier.max_whitespaceBetween
                        );

                    });

                }

            }

        });

    });

}

function runErrorTests(testCase){

    describe("Errors",function(){

        it(`${testCase.errors.testTitle}`,function(){

            let passwordModifier = testCase.passwordModifier;

            if(testCase.characterSets){
                Object.assign(passwordModifier, testCase.characterSets)
            }

            assert.throws(
                ()=>{
                    simplePass(passwordModifier,testCase.config)
                },
                Error,
                testCase.errors.message
            )

        })

    });

}

testCases.default.forEach((testCase)=>{

    if(testCase.errors){
        runErrorTests(testCase);
        return;
    }

    runTests(testCase);
});
