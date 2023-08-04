// Exclusive Or

// The || operator returns a truthy value if either or both of its operands
// are truthy, a falsey value if both operands are falsey. The && operator
// returns a truthy value if both of its operands are truthy, and a falsey
// value if either operand is falsey. This works great until you need only
// one, but not both, of two conditions to be truthy: the so-called exclusive
// or.

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

Algorithm

1.
- If first input is truthy
  - Return whether second input is falsely
- Else
  - Return whether second input is truthy

2.
- Return the boolean coercion of the result of evaluating:
  ((arg1 and not arg2) or (not arg1 and arg2))

*/

// 1.
function xor(arg1, arg2) {
  if (arg1) {
    return !arg2;
  }
  return !!arg2;
}

// 2.
function xor(arg1, arg2) {
  return !!((arg1 && !arg2) || (!arg1 && arg2));
}
