// Moving

// Modify the following code using only one new method so that the outputs
// of the examples below are correct.

//

// Use `walkMixin` to add the functionality of "walking" to a class
const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

class Person {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "strolls";
  }
}

Object.assign(Person.prototype, walkMixin);

class Cat {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "saunters";
  }
}

Object.assign(Cat.prototype, walkMixin);

class Cheetah {
  constructor(name) {
    this.name = name;
  }
  gait() {
    return "runs";
  }
}

Object.assign(Cheetah.prototype, walkMixin);

//

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"
