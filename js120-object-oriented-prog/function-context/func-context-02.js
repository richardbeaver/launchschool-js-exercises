// The Franchise

// The method franchise.allMovies is supposed to return the following array:
[
  'How to Train Your Dragon 1',
  'How to Train Your Dragon 2',
  'How to Train Your Dragon 3'
];

// Explain why this method will not return the desired object? Try fixing this
// problem by taking advantage of JavaScript lexical scoping rules.

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    return [1, 2, 3].map(function(number) {
      return this.name + ' ' + number;
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

let franchise = {
  name: 'How to Train Your Dragon',
  allMovies: function() {
    let self = this;

    return [1, 2, 3].map(function(number) {
      return self.name + ' ' + number;
    });
  },
};

/* eslint no-unused-expressions:, no-unused-vars: */
