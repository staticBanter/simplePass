import simplePass from "../build/simplePass.js";
const assert = chai.assert;

describe('simplePass | Genereate Lowercase Passwords',function(){

    it('should create a password containing only lowercase characters', function(){
        assert.match(simplePass(),/[a-z]/);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(simplePass(),8);
    });

    it('should create a password NOT containing any uppercase characters', function(){
        assert.notMatch(simplePass(),/[A-Z]/);
    });

    it('should create a password NOT containing any numbers', function(){
        assert.notMatch(simplePass(),/[0-9]/);
    });

});

mocha.run();