/* eslint-disable */

// Range

// We are assigned the task to implement a range function that returns an array
// of integers beginning and ending with specified start and end numbers. When
// only a single argument is provided, that argument should be used as the
// ending number and the starting number should be 0.

// Check our code below. Why do the example invocations fail with an error
// saying Maximum call stack size exceeded? Can you fix the code, so it runs
// without error and satisfies the requirements?

function range(start, end = -1) {
  let range = [];

  for (let element = start; element <= end; element++) {
    range.push(element);
  }

  return range;
}

function range(end) {
  return range(0, end);
}

// Examples

console.log(range(10, 20));
console.log(range(5));

//

/*

Here, we are trying to use function overloading to define two `range` functions
that take in different numbers of parameters. However, Javscript does not
support function overloading.

If we log some marking value at the beginning of execution of both functions,
we will see that only the second `range` function is ever called. In the body
of that function, we are attempting to call the first `range` function by
passing 2 parameters. However, the code is only calling the same function again.
With no terminating condition, we enter an infinite loop and exceed the call
stack.

To fix this, we could remove the second `range` function that takes only one
parameter entirely. And, in the first one, add an `if` statement that
reassigns the `start` and `end` parameters if the `end` parameter value is
the same as our default `-1`:

  if (end === -1) {
    end = start;
    start = 0;
  }

Now, if given only one argument, the function will behave the same as what we
were trying to accomplish with overloaded functions.

Or, we could swap the places of the parameters, with the first argument value
being assigned to `end`, give `start` a default value of `0`, and keep the rest
of the function as it is:

function range(end, start = 0) {
  ...
}

*/
