import simplePass from "../simplePass/simplePass.js";
const assert = chai.assert;

describe('simplePass | Genereate A Lowercase Password Of Defualt Length',function(){

    const password = simplePass();

    it('should create a password containing only lowercase characters', function(){
        assert.match(password,/[a-z]/g);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(password,8);
    });

    it('should create a password NOT containing any uppercase characters', function(){
        assert.notMatch(password,/[A-Z]/g);
    });

    it('should create a password NOT containing any numbers', function(){
        assert.notMatch(password,/[0-9]/g);
    });

    it('should create a password NOT containing any puncutation',function(){
        assert.notMatch(password,/[^A-Za-z0-9]/g)
    });

});

describe('simplePass | Genereate An Uppercase Password Of Defualt Length',function(){

    const password = simplePass({
        length:8,
        uppercase:true,
    });

    it('should create a password containing only uppercase characters', function(){
        assert.match(password,/[A-Z]/g);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(password,8);
    });

    it('should create a password NOT containing any lowercase characters', function(){
        assert.notMatch(password,/[a-z]/g);
    });

    it('should create a password NOT containing any numbers', function(){
        assert.notMatch(password,/[0-9]/g);
    });

    it('should create a password NOT containing any puncutation',function(){
        assert.notMatch(password,/[^A-Za-z0-9]/g)
    });

});

describe('simplePass | Genereate A Number Password Of Defualt Length',function(){

    const password = simplePass({
        length:8,
        numbers:true,
    });

    it('should create a password containing only numbers', function(){
        assert.match(password,/[0-9]/g);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(password,8);
    });

    it('should create a password NOT containing any lowercase characters', function(){
        assert.notMatch(password,/[a-z]/g);
    });

    it('should create a password NOT containing any uppercase characters', function(){
        assert.notMatch(password,/[A-Z]/g);
    });

    it('should create a password NOT containing any puncutation',function(){
        assert.notMatch(password,/[^A-Za-z0-9]/g)
    });

});

describe('simplePass | Genereate A Punctuation Password Of Defualt Length',function(){

    const password = simplePass({
        length:8,
        punctuation:true,
    });

    it('should create a password containing only punctuation', function(){
        assert.match(password,/[^A-Za-z0-9]/g);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(password,8);
    });

    it('should create a password NOT containing any lowercase characters', function(){
        assert.notMatch(password,/[a-z]/g);
    });

    it('should create a password NOT containing any uppercase characters', function(){
        assert.notMatch(password,/[A-Z]/g);
    });

    it('should create a password NOT containing any numbers',function(){
        assert.notMatch(password,/[0-9]/g)
    });

});


/**
 * * Note: sometimes this functions fails because there is not conformance check on the passwords
 */
describe('simplePass | Genereate A Random Password Of Defualt Length',function(){

    const password = simplePass({
        length:8,
        lowercase:true,
        uppercase:true,
        numbers:true,
        punctuation:true,
    });

    it('should create a password containing punctuation', function(){
        assert.match(password,/[^A-Za-z0-9]/g);
    });

    it('should create a password of default length (8)', function(){
        assert.lengthOf(password,8);
    });

    it('should create a password containing lowercase characters', function(){
        assert.match(password,/[a-z]/g);
    });

    it('should create a password containing uppercase characters', function(){
        assert.match(password,/[A-Z]/g);
    });

    it('should create a password containing numbers',function(){
        assert.match(password,/[0-9]/g)
    });

});

mocha.run();