// The Franchise

// The method franchise.allMovies is supposed to return the following array:
[
  "How to Train Your Dragon 1",
  "How to Train Your Dragon 2",
  "How to Train Your Dragon 3",
];

// Explain why this method will not return the desired object? Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    return [1, 2, 3].map(function (number) {
      return this.name + " " + number;
    });
  },
};

//

/*

This does not work because the `map` method will execute the passed in callback
function as a stand-alone function, resulting in its execution context being
the global object. On each execution, `this.name` will refer to the global
object's `name` property, which is `undefined`.

A solution that takes advantage of JS' lexical scoping rules is to use a
`self` variable initialized to the value of `this` inside the `allMovies`
method. At this point, the value of `this`, and thus `self`, is the `franchise`
object.

A variable in an outer scope is available inside an inner scope. So, instead
of `this.name`, we can access `self.name` in the callback passed to `map`.
This ensures that the callback's execution context in each iteration is the
`franchise` object, resulting in the desired output.

*/

franchise = {
  name: "How to Train Your Dragon",
  allMovies: function () {
    // 1.

    // Using a `self` variable outside of the callback definition
    // let self = this;
    // return [1, 2, 3].map(function (number) {
    //   return self.name + " " + number;
    // });

    // 2.

    // Binding `map` to the calling object by passing `this` as an optional
    // `thisArg` argument of the `map` method
    // return [1, 2, 3].map(function (number) {
    //   return this.name + " " + number;
    // }, this);

    // 3.

    // Hard-binding `this` to the function expression passed to `map`
    // return [1, 2, 3].map(
    //   function (number) {
    //     return this.name + " " + number;
    //   }.bind(this)
    // );

    // 4.

    // Using an arrow function to ensure `this` is kept bound to the current
    // execution context
    return [1, 2, 3].map((number) => this.name + " " + number);
  },
};

/* eslint no-unused-expressions:, no-unused-vars: */
