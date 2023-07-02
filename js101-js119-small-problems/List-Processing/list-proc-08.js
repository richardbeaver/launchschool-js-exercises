// Grocery List

// Write a function that takes a grocery list in a two-dimensional array and
// returns a one-dimensional array. Each element in the grocery list contains
// a fruit name and a number that represents the desired quantity of that
// fruit. The output array is such that each fruit name appears the number
// of times equal to its desired quantity.

// In the example below, we want to buy 3 apples, 1 orange, and 2 bananas.
// Thus, we return an array that contains 3 apples, 1 orange, and 2 bananas.

// Example:
console.log(
  buyFruit([['apple', 3], ['orange', 1], ['banana', 2]])
);
// ["apple", "apple", "apple", "orange", "banana", "banana"]

//

/*
input: 2-d array, with each sub-array containing a fruit name and quantity
output: array with each fruit name appearing the number of its quantity

- Create `result` variable (value: empty array)
- For each sub-array in input array:
  - Append the fruit name to `result` the number of times of its quantity
- Return `result`

*/

function buyFruit(groceryList) {
  let result = [];

  groceryList.forEach((entry) => {
    let [ name, quantity ] = entry;

    for (let count = 0; count < quantity; count += 1) {
      result.push(name);
    }
  });

  return result;
}
