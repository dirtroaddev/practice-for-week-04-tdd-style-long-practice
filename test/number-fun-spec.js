// Your code here
const chai = require("chai");
const expect = chai.expect;
const { returnsThree, reciprocal } = require("../problems/number-fun.js");


describe("Returns three", () => {
    it("Returns three", () => {
        expect(returnsThree()).to.equal(3);
    });
});

describe("Reciprocal", () => {

    it("Reciprocal returns correctly", () => {
        expect(reciprocal(10)).to.equal(0.1);
        expect(reciprocal(100)).to.equal(0.01);
    });
    

    it('Throws the correct error', () => {
        expect(() => reciprocal(101)).to.throw(RangeError);
        expect(() => reciprocal(-2)).to.throw(RangeError);
    });
    
});