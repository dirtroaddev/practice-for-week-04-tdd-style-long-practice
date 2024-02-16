class Person {
  // Your code here
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, I am ${this.name}`;
  }

  visit = (visited) => {
    return `${this.name} visits ${visited}`;
  }

  switchVisit (otherVisited) {
    return this.visit(otherVisited);
  }

  update(obj) {
    
    if(typeof obj !== "Object") throw new TypeError();
    return obj.name;
  }
}

module.exports = Person;