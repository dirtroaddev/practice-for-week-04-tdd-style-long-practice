// Your code here
const chai = require("chai");
const Person = require("../problems/person");
const expect = chai.expect;



describe("Person", function ()  {
    let newPerson;
    
    beforeEach(() => {
        newPerson = new Person("john_doe", 28);
    
    });

    describe("Person constructor function", function () {
        it('Shoult have a "word" property', function() {
            expect(newPerson).to.have.property("name");
        });

        it("Should have an age property", function() {
            expect(newPerson).to.have.property("age");
        });

        
    });


    describe("Methods", function () {
        it("Should return a greeting with the user name", function() {
            expect(newPerson.sayHello()).to.equal("Hello, I am john_doe");
        });

        it("Should return a visit message", function() {
            expect(newPerson.visit("erin")).to.equal("john_doe visits erin");
        });

        it("Should return a new visited message", function() {
            expect(newPerson.switchVisit("tim")).to.equal("john_doe visits tim");
        });

        it("Should throw a type error", function() {
            expect(() => newPerson.update(2)).to.throw(TypeError);
        });
    });

});