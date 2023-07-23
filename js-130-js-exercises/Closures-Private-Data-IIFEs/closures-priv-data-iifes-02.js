// myBind() Improved

// Our earlier implementation of the Function.prototype.bind was simplistic.
// Function.prototype.bind has another trick up its sleeve besides hard-binding
// functions to context objects. It's called partial function application.
// Read (this assignment) and the MDN documentation to learn more about partial
// function application.

// Alter the myBind function written in the previous exercise to support
// partial function application of additional arguments to the original
// function.

//

function myBind(func, context, ...partialArgs) {
  return function(...moreArgs) {
    return func.call(context, ...partialArgs, ...moreArgs);
  };
}

//

function addNumbers(a, b) {
  return a + b;
}

const addFive = myBind(addNumbers, null, 5);

addFive(10); // 15
