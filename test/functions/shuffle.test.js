'use strict';

import {assert} from "chai";
import shuffle from "../../javascript/module/functions/shuffle.js"

describe('shuffle(array:Array<any>):Array<any>',function(){


    describe('Standard usage',function(){

        const items = [1,'a',2,'b',3]
        const results = shuffle([1,'a',2,'b',3])

        it('Should return an array',function(){
            assert.isArray(results);
        });

        it('Should return a non empty array',function(){
            assert.isAtLeast(results.length, 1);
        });

        it('Should return the same items in a different order',function(){
            assert.notSameOrderedMembers(items, results);
        });

    });

});
