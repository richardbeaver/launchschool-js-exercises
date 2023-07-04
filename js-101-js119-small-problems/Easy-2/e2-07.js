// Exclusive Or

// The || operator returns a truthy value if either or both of its operands
// are truthy, a falsey value if both operands are falsey. The && operator
// returns a truthy value if both of its operands are truthy, and a falsey
// value if either operand is falsey. This works great until you need only
// one, but not both, of two conditions to be truthy: the so-called exclusive or.

// In this exercise, you will write a function named xor that takes two
// arguments, and returns true if exactly one of its arguments is truthy,
// false otherwise. Note that we are looking for a boolean result instead
// of a truthy/falsy value as returned by || and &&.

// Examples:
console.log(xor(5, 0) === true);          // true
console.log(xor(false, true) === true);   // true
console.log(xor(1, 1) === false);         // true
console.log(xor(true, true) === false);   // true

//

/*
- Problem

inputs: two arguments of any type
outputs: a boolean for whether only one of the two arguments is a truthy value

Rules:
- One argument must be truthy value and the other a falsey value for the
  function to return true

- Algorithm

1. Declare a variable `bool1` and initialize to the boolean evaluation of the
  first argument input
2. Decalre a variable `bool2` and initialize to the boolean evaluation of the
  second argument input
3. If `bool1` is true: return (not `bool2`)
4. Return `bool2`

1. Return the boolean coercion of the result of evaluating:
  ((arg1 and not arg2) or (not arg1 and arg2))

*/

// function xor(arg1, arg2) {
//   let bool1 = !!arg1;
//   let bool2 = !!arg2;

//   if (bool1) return !bool2;
//   return bool2;
// }

function xor(arg1, arg2) {
  return !!((arg1 && !arg2) || (!arg1 && arg2));
}
