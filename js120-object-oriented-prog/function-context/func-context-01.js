// What is This?

// Read the following code carefully. What do you think is logged on line 7.
// Try to answer the question before you run the code.

let person = {
  firstName: 'Rick ',
  lastName: 'Sanchez',
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);

//

/*

Logs:
NaN

`this` in `this.firstName` and `this` in `this.lastName` do not refer to
the `firstName` and `lastName` properties of `person`. That is because we
are not executing a method, and therefore the execution context is the not
the `person` object. Outside of a function/method call, `this` is bound to
the global object.

So, `this.firstName` and `this.lastName` both evaluate to `undefined`, and
trying to add them results in `NaN`.

*/
