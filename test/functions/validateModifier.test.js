'use strict';

import {assert} from "chai";
import validateModifier from "../../javascript/module/functions/validateModifier.js";


describe('validateModifier (modifier: passwordModifier,cFig: typeof config,): void',function(){

    describe('Standard usage',function(){

        const passwordModifier = {
            length: 22,
            lowercase: true,
            uppercase: true,
            numbers: true,
            punctuation: true
        }

        const results = validateModifier(passwordModifier);

        it('Should return true',function(){
            assert.isTrue(results);
        });

    });

});
