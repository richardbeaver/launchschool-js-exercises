// Bubble Sort

// Bubble Sort is one of the simplest sorting algorithms available. It is
// not an efficient algorithm, so developers rarely use it in real code.
// However, it is an excellent exercise for student developers. In this
// exercise, you will write a function that sorts an array using the bubble
// sort algorithm.

// A bubble sort works by making multiple passes (iterations) through an array.
// On each pass, the two values of each pair of consecutive elements are
// compared. If the first value is greater than the second, the two elements
// are swapped. This process is repeated until a complete pass is made without
// performing any swaps. At that point, the array is completely sorted.

// We can stop iterating the first time we make a pass through the array
// without making any swaps because this means that the entire array is sorted.

// For further information — including pseudo-code that demonstrates the
// algorithm, as well as a minor optimization technique — see the Bubble
// Sort Wikipedia page.

// Write a function that takes an array as an argument and sorts that array
// using the bubble sort algorithm described above. The sorting should be
// done "in-place" — that is, the function should mutate the array. You may
// assume that the array contains at least two elements.

// Examples:
let array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

let array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

let array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]

//

/*
input: an array of at least two elements, elements can be any data type where
  values can be generally compared (examples use numbers and strings)
output: no return value, sorts input array in-place

- Create `swapPerformed` variable to track whether a swap was performed in
  the current iteration (use false as default; algorithm ends when iteration
  completed and variable still false)
- Start a loop:
  - Set `swapPerformed` to false
  - For each index, `idx`, in [0, length of input array - 1):
    - If element at index `idx` is greater than element at index (`idx` + 1):
      - Swap the two elements
      - Set `swapPerformed` to `true`
  - If `swapPerformed` is false:
    - Break loop

*/

function bubbleSort(array) {
  let swapPerformed;
  do {
    swapPerformed = false;

    for (let idx = 0; idx < array.length - 1; idx += 1) {
      if (array[idx] <= array[idx + 1]) continue;

      [array[idx], array[idx + 1]] = [array[idx + 1], array[idx]];
      swapPerformed = true;
    }
  } while (swapPerformed);
}
