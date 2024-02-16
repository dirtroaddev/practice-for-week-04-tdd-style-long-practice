// Your code here

const chai = require("chai");
const expect = chai.expect;
const reverseString  = require('../problems/reverse-string.js');



describe('reverse String', function() {

    it("String should be reversed", () => {
        expect(reverseString("test")).to.equal("tset")
    })

    it("Correct type error is thrown", () => {
        expect(() => reverseString(1)).to.throw(TypeError);
    });
});
