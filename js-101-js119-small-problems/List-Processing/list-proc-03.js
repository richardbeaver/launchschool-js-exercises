// Multiply All Pairs

// Write a function that takes two array arguments, each containing a list
// of numbers, and returns a new array containing the products of all
// combinations of number pairs that exist between the two arrays. The
// returned array should be sorted in ascending numerical order.

// You may assume that neither argument will be an empty array.

// Example:
console.log(
  multiplyAllPairs([2, 4], [4, 3, 1, 2])    // [2, 4, 4, 6, 8, 8, 12, 16]
);

//

/*
input: two arrays of numbers
output: new array containing products of all combinations of pairs in the two
  input arrays, sorted in ascending numerical order

- Create a variable `products` (value: empty array) to hold all products
  of multiplications
- For each element in first array:
  - For each element in second array:
    - Multiply the two elements, and append each result to `products` array
- Sort and return `products` array

*/

function multiplyAllPairs(array1, array2) {
  let products = [];

  array1.forEach((num1) => {
    array2.forEach((num2) => {
      products.push(num1 * num2);
    });
  });

  return products.sort((num1, num2) => num1 - num2);
}
