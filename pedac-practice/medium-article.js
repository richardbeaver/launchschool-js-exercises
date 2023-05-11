// https://medium.com/launch-school/solving-coding-problems-with-pedac-29141331f93f

/*
Process the Problem, Code with Intent

1. Understand the Problem
  - Identify expected input and ouput
  - Make the requirements explicit
  - Identify rules
  - Mental model of the problem (optional) (Summary view on the entire problem
    and *what* it requires, but not yet *how* to solve it)
      - Or can do this after going through Examples

  - ** Read problem statement carefully; every word and every detail matters
  - Get clarification on the problem; don't make assumptions
  - Get clarification on unfamiliar terms as they apply to the problem domain

2. Examples/Test Cases
  - Validate understanding of the problem
  - Can derive examples from rules in step 1 and edge cases
      - 0, 1, or multiple elements when dealing with collections
      - negative numbers or 0
      - the ends of ranges

3. Data Structure
  - How we represent data that we will work with when converting the input
    to output

4. Algorithm
  - Steps for converting input to output
  - Start with the mental model if we have one, else start with the data
    structure and think of how to build/manipulate it to get the output

  - Give steps in plain English
  - Enough detail that someone else could code it following our algorithm
  - But don't name specific syntax or methods (ex: for loop or `.forEach` method)
    - Could say: "iterate through items"/"for each item in x"
  - Mentally go through the Algorithm with test cases to check that it works

5. Code
  - Implementation of Algorithm

  - No new ideas here; if something doesn't work, go back to Algorithm
  - ** Test the code frequently
*/

// =========================================================

// Example Problem

// Suppose you have an arbitrary natural number (the target) and a set of
// one or more additional natural numbers (the factors). Write a program that
// computes the sum of all numbers from 1 up to the target number that are
// also multiples of one of the factors. 

// For instance, if the target is 20, and the factors are 3 and 5, that gives
// us the list of multiples 3, 5, 6, 9, 10, 12, 15, 18. The sum of these
// multiples is 78.

// If no factors are given, use 3 and 5 as the default factors.


/*
1. Understand the Problem

inputs: target number, the set of factors
output: sum of multiples

Using the example given, we can confirm this:
target number: 20
multiples of 3: 3, 6, 9, 12, 15, 18
multiples of 5: 5, 10, 15

Rules:
Implicit Requirements from any given examples/tests:
- multiples to be summed must be unique (We learn this from the example. It is
  not made explicit in the problem statement)
- target value is the limit but is not considered a multiple (20 is not
  included as a multiple of 5)
- all numbers are natural numbers
Possible Clarifying Questions:
- Possible values for the target? Negative numbers allowed?
- How will factors be provided to the program? (data structure of that input)
- What if only one number provided as factor? Assume 3 and 5 in that case, or
  just use the one factor?

A potential Mental Model:
Determine a list of all multiples of a set of factors up to a target value,
then filter the list of multiples to the unique values. Finally, compute and
return the sum of the unique multiples.

A second Mental Model example:
Incrementally build a list of numbers that are multiples of a set of one or
more factors. Add a multiple to the list only if it is not yet on the list.
Finally, compute and return the sum of the numbers on the list.

*/

/*
2. Examples/Test Cases

Example 1
Inputs -> target: 20, factors: [3, 5]
Output -> 78

Example 2
Inputs -> target: 20, factors: [3]
Output -> 63

Example 3
Inputs -> target: 20, factors: [5]
Output -> 30

Example 4
Inputs -> target: 20, factors: []
Output -> 78

Example 5
Inputs -> target: 1, factors: []
Output -> 0

Example 6 - edge case: 19 is the last number that would be checked here
Inputs -> target: 20, factors: [19]
Output -> 19
*/

/*
3. Data Structure

We need to collect values and then add them up
  - An array should be a good fit
*/

/*
4. Algorithm

- From first mental model:
Determine a list of all multiples of a set of factors up to a target value,
then filter the list of multiples to the unique values. Finally, compute and
return the sum of the unique multiples.

1. Create an empty array called `multiples` that will contain the multiples
  (Declare a variable `multiples` and initialize it to an empty array)
2. Check whether the list of factors is empty. If so, set the list to [3, 5]
3. For every `factor` in the `factors` list:
  1. Set `currentMultiple` to `factor` to keep track of the multiples of `factor`
  2. While `currentMultiple` < target:
    1. Append `currentMultiple` to `multiples`
    2. Add `factor` to `currentMultiple`
4. Filter duplicate numbers from `multiples`
5. Compute and return the sum of the numbers in `multiples`

===========

- Second mental model
Incrementally build a list of numbers that are multiples of a set of one or
more factors. Add a multiple to the list only if it is not yet on the list.
Finally, compute and return the sum of the numbers on the list.

1. Create an empty array called `multiples` that will contain the multiples
  (Declare a variable `multiples` and initialize it to an empty array)
2. Check whether the list of factors is empty. If so, set the list to [3, 5]
3. For every `factor` in the `factors` list:
  1. Set `currentMultiple` to `factor` to keep track of the multiples of `factor`
  2. While `currentMultiple` < target:
    1. Is the `currentMultiple` in `multiples` already?
      1. Yes - do nothing
      2. No - append `currentMultiple` to `multiples`
    2. Add `factor` to `currentMultiple`
4. Compute and return the sum of the numbers in `multiples`
*/

/*
5. Code
*/

// First mental model (using while loop)
function sumOfMultiples1(target, factors) {
  let multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach((factor) => {
    let currentMultiple = factor;
    while (currentMultiple < target) {
      multiples.push(currentMultiple);
      currentMultiple += factor;
    }
  });

  multiples = [...new Set(multiples)];

  return multiples.reduce((sum, value) => sum + value, 0);
}

// Second mental model (using for loop)
function sumOfMultiples2(target, factors) {
  let multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  factors.forEach((factor) => {
    for (let currentMultiple = factor; currentMultiple < target; currentMultiple += factor) {
      if (!multiples.includes(currentMultiple)) {
        multiples.push(currentMultiple);
      }
    }
  });

  return multiples.reduce((sum, value) => sum + value, 0);
}

// From own initial implementation
function sumOfMultiples3(target, factors) {
  let multiples = [];
  if (factors.length === 0) {
    factors = [3, 5];
  }

  for (let i = 1; i < target; i += 1) {
    if (factors.some((factor) => i % factor === 0)) {
      multiples.push(i);
    }
  }

  return multiples.reduce((sum, value) => sum + value, 0);
}

console.log(
  sumOfMultiples1(20, [3, 5]),  // returns 78
  sumOfMultiples1(20, [3]),     // returns 63
  sumOfMultiples1(20, [5]),     // returns 30
  sumOfMultiples1(20, []),      // returns 78
  sumOfMultiples1(1, []),       // returns 0
  sumOfMultiples1(20, [19]),    // returns 19
);

console.log(
  sumOfMultiples2(20, [3, 5]),  // returns 78
  sumOfMultiples2(20, [3]),     // returns 63
  sumOfMultiples2(20, [5]),     // returns 30
  sumOfMultiples2(20, []),      // returns 78
  sumOfMultiples2(1, []),       // returns 0
  sumOfMultiples2(20, [19]),    // returns 19
);

console.log(
  sumOfMultiples3(20, [3, 5]),  // returns 78
  sumOfMultiples3(20, [3]),     // returns 63
  sumOfMultiples3(20, [5]),     // returns 30
  sumOfMultiples3(20, []),      // returns 78
  sumOfMultiples3(1, []),       // returns 0
  sumOfMultiples3(20, [19]),    // returns 19
);
