/* eslint-disable */

// Grade Analysis

// Professor Graham wrote some simple code to help him determine the average
// and median scores on each of his quarterly exams, but some of the test
// cases are failing. Figure out why, and write the code necessary for the
// program to work as expected.

function average(nums) {
  let sum = nums.reduce((total, num) => total + num);

  return sum / nums.length;
}

function median(nums) {
  nums.sort();

  let median;
  let length = nums.length;
  if (length % 2 === 0) {
    median = average([nums[(length / 2) - 1], nums[length / 2]]);
  } else {
    median = nums[Math.floor(length / 2)];
  }

  return median;
}

// Tests

let quarter1ExamScores = [89, 72, 100, 93, 64, 97, 82, 87, 90, 94];
let quarter2ExamScores = [76, 91, 89, 90, 91, 67, 99, 82, 91, 87];
let quarter3ExamScores = [99, 91, 88, 72, 76, 64, 94, 79, 86, 88];
let quarter4ExamScores = [100, 94, 73, 88, 82, 91, 97, 99, 80, 84];

// should all log 'true':
console.log(average(quarter1ExamScores) === 86.8);
console.log(average(quarter2ExamScores) === 86.3);
console.log(average(quarter3ExamScores) === 83.7);
console.log(average(quarter4ExamScores) === 88.8);

console.log(median(quarter1ExamScores) === 89.5);
console.log(median(quarter2ExamScores) === 89.5);
console.log(median(quarter3ExamScores) === 87);
console.log(median(quarter4ExamScores) === 89.5);

//

/*

The default behavior for the `Array.prototype.sort` method, when comparing
elements, is to compare the string conversions of the elements. When trying to
sort an array of numbers, this means elements will be sorted by individual
digits rather than their numerical value.

In the two failing test cases (passing `quarter1ExamScores` and
`quarter4ExamScores` to the `median` function), the input arrays contain a
value of `100`. When sorting by string values, `100` is being placed at the
front of the array rather than the end, which results in an incorrect median
value.

Instead, a callback should be passed to the `sort` method so that is sorts
elements by their numerical value: `(a, b) => a - b`.

*/
