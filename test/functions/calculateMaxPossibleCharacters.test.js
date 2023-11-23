'use strict';

import {assert} from "chai";
import calculateMaxPossibleCharacters from "../../javascript/module/functions/calculateMaxPossibleCharacters.js";
import whitespaceAttributes from "../../javascript/module/data/lists/whitespaceAttributes.js";


describe('calculateMaxPossibleCharacters(characterSetObject:characterSetObject):number', function () {


    const characterSets = {
        single:{
            names:['lowercase'],
            expected:26,
        },
        singleWithExclusions:{
            names:['lowercase'],
            excluded:'aabbcdef', // Note ability to filter out repeated characters.
            expected:20,
        },
        multi:{
            names:[
                'lowercase',
                'lowercase_extended_a'
            ],
            expected:89,
        },
        multiWithExclusions:{
            names:[
                'lowercase',
                'lowercase_extended_a'
            ],
            excluded:'aabbcdef',
            expected:83,
        },
        containsWhitespace:{
            name:[
                'lowercase',
            ].concat(whitespaceAttributes),
            expected:27,
        }
    }

    describe('Standard Usage',function(){

        describe('Single character set',function(){

            const result = calculateMaxPossibleCharacters({
                characterSets:characterSets.single.names
            })

            it('Should return a number',function(){
                assert.isNumber(result)
            });

            it('Should contain the expected amount of characters',function(){
                assert.strictEqual(result, characterSets.single.expected)
            });


        });

        describe('Single character set with character exclusions',function(){

            const result = calculateMaxPossibleCharacters({
                characterSets:characterSets.singleWithExclusions.names,
                excludeCharacters:characterSets.singleWithExclusions.excluded
            });

            it('Should return a number',function(){
                assert.isNumber(result)
            });

            it('Should contain the expected amount of characters',function(){
                assert.strictEqual(result, characterSets.singleWithExclusions.expected)
            });

        })

        describe('Multi  character set',function(){

            const result = calculateMaxPossibleCharacters({
                characterSets:characterSets.multi
                .names
            })

            it('Should return a number',function(){
                assert.isNumber(result)
            });

            it('Should contain the expected amount of characters',function(){
                assert.strictEqual(result, characterSets.multi.expected)
            });


        });

        describe('Multi character set with character exclusions',function(){

            const result = calculateMaxPossibleCharacters({
                characterSets:characterSets.multiWithExclusions.names,
                excludeCharacters:characterSets.multiWithExclusions.excluded
            });

            it('Should return a number',function(){
                assert.isNumber(result)
            });

            it('Should contain the expected amount of characters',function(){
                assert.strictEqual(result, characterSets.multiWithExclusions.expected)
            });

        });

        describe('Contains whitespace character sets',function(){

            const result = calculateMaxPossibleCharacters({
                characterSets:characterSets.single.names
            })

            it('Should return a number',function(){
                assert.isNumber(result)
            });

            it('Should contain the expected amount of characters',function(){
                assert.strictEqual(result, characterSets.single.expected)
            });


        });

    });

});
