// Running Totals

// Write a function that takes an array of numbers and returns an array with
// the same number of elements, but with each element's value being the
// running total from the original array.

// Examples:
console.log(
  runningTotal([2, 5, 13]),             // [2, 7, 20]
  runningTotal([14, 11, 7, 15, 20]),    // [14, 25, 32, 47, 67]
  runningTotal([3]),                    // [3]
  runningTotal([]),                     // []
);

/* eslint no-unused-vars:"off", no-undef:"off" */
//

/*
input: array of numbers
output: array of running total of input numbers

1.
- Create a `result` variable (value: an empty array)
- Using `forEach`:
  - In callback:
    - If `result` is empty:
      - Append to `result` the number in the current iteration
    - Else
      - Append to `result` the value of adding the last element in `result`
        with the number in the current iteration

2.
- Create a `total` variable (value: '0')
- Using `map`:
  - In callback, increment `total` by the value of the number in the current
    iteration
  - Return value of `total`

3.
- Using `reduce`:
  - Start with an accumulator of an empty array
  - In callback:
    - If accumulator is empty
      - Append the current number (the first number in input)
    - Else
      - Append last value of the accumulator plus the value of the number
        in the current iteration
    - Return accumulator

*/

// 1.
function runningTotalForEach(numbers) {
  let result = [];

  numbers.forEach((number) => {
    if (result.length === 0) {
      result.push(number);
    } else {
      result.push(result.at(-1) + number);
    }
  });

  return result;
}

// 2.
function runningTotalMap(numbers) {
  let total = 0;

  return numbers.map((number) => {
    total += number;
    return total;
  });
}

// 3.
function runningTotalReduce(numbers) {
  return numbers.reduce((resultArr, number) => {
    if (resultArr.length === 0) {
      resultArr.push(number);
    } else {
      resultArr.push(resultArr.at(-1) + number);
    }

    return resultArr;
  }, []);
}
