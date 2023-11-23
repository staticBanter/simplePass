'use strict';

import {assert} from "chai";
import range from "../../javascript/module/functions/range.js";

describe('range(start:number,end:number,options?:RangeOptions):Array<number> & Array<Array<number>>',function(){

    const start = 0;
    const end = 10;

    describe('No Options',function(){

        const results = range(start,end);
        const match = [0,1,2,3,4,5,6,7,8,9,10];

        it('Should return an array',function(){
            assert.isArray(results);
        });

        it('Should be the same length as its match',function(){
            assert.strictEqual(results.length, match.length);
        });

        it('Should contain only numbers',function(){
            results.forEach((result)=>{
                assert.isNumber(result);
            });
        });

        it('Should contain the same members as its match',function(){
            assert.sameMembers(results, match)
        });

    });

    describe('Increments option',function(){

        const results = range(start,end,{
            increment:3
        });
        const match = [0,3,6,9];

        it('Should return an array',function(){
            assert.isArray(results);
        });

        it('Should be the same length as its match',function(){
            assert.strictEqual(results.length, match.length);
        });

        it('Should contain only numbers',function(){
            results.forEach((result)=>{
                assert.isNumber(result);
            });
        });

        it('Should contain the same members as its match',function(){
            assert.sameMembers(results, match)
        });

        describe('Combined with forced end inclusion option',function(){

            const results = range(start,end,{
                increment:3,
                forceInclusiveEnd:true,
            });
            const match = [0,3,6,9,10];

            it('Should include the end number even if its off step with increments',function(){
                assert.sameMembers(results, match);
            });

        });

    });

    describe('Exclude option',function(){

        const results = range(start,end,{
            exclude:[3,4,5]
        });
        const match = [0,1,2,6,7,8,9,10];

        it('Should return an array',function(){
            assert.isArray(results);
        });

        it('Should be the same length as its match',function(){
            assert.strictEqual(results.length, match.length);
        });

        it('Should contain only numbers',function(){
            results.forEach((result)=>{
                assert.isNumber(result);
            });
        });

        it('Should contain the same members as its match',function(){
            assert.sameMembers(results, match)
        });

    });

    describe('Singles Option',function(){

        const results = range(start,end,{
            singles:true,
        });

        const match = [[0],[1],[2],[3],[4],[5],[6],[7],[8],[9],[10]];

        it('Should return an array',function(){
            assert.isArray(range(start,end));
        });

        it('Should be the same length as its match',function(){
            assert.strictEqual(results.length, match.length);
        });

        it('Should contain only arrays',function(){
            results.forEach((result)=>{
                assert.isArray(result);
            });
        });

        it('Should only contain arrays containing a single element',function(){
            results.forEach((result)=>{
                assert.strictEqual(result.length, 1)
            });
        });

        it('Should only contain arrays containing a single element number',function(){
            results.forEach((result)=>{
                assert.isNumber(result[0]);
            })
        });

        it('Should contain the same members as its match',function(){
            assert.sameDeepMembers(results, match);
        })

    })

    describe('Mix all options',function(){

        const end = 11;
        const increment = 3
        const results = range(start,end,{
            increment:increment,
            exclude:[3,4,5],
            forceInclusiveEnd:true,
            singles:true,
        });

        const match = [[0],[6],[9],[11]];

        it('Should return an array',function(){
            assert.isArray(range(start,end));
        });

        it('Should be the same length as its match',function(){
            assert.strictEqual(results.length, match.length);
        });

        it('Should contain only arrays',function(){
            results.forEach((result)=>{
                assert.isArray(result);
            });
        });

        it('Should only contain arrays containing a single element',function(){
            results.forEach((result)=>{
                assert.strictEqual(result.length, 1)
            });
        });

        it('Should only contain arrays containing a single element number',function(){
            results.forEach((result)=>{
                assert.isNumber(result[0]);
            })
        });

        it('Should contain the same members as its match',function(){
            assert.sameDeepMembers(results, match);
        })

    })

});
