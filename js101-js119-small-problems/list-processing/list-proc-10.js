// Inventory Item Availability

// Building on the previous exercise, write a function that returns true or
// false based on whether or not an inventory item is available. As before,
// the function takes two arguments: an inventory item and a list of
// transactions. The function should return true only if the sum of the
// quantity values of the item's transactions is greater than zero. Notice
// that there is a movement property in each transaction object. A movement
// value of 'out' will decrease the item's quantity.

// You may (and should) use the transactionsFor function from the previous
// exercise.

/* eslint indent:"off" */
// Examples:
let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                     { id: 105, movement: 'in',  quantity: 10 },
                     { id: 102, movement: 'out', quantity: 17 },
                     { id: 101, movement: 'in',  quantity: 12 },
                     { id: 103, movement: 'out', quantity: 20 },
                     { id: 102, movement: 'out', quantity: 15 },
                     { id: 105, movement: 'in',  quantity: 25 },
                     { id: 101, movement: 'out', quantity: 18 },
                     { id: 102, movement: 'in',  quantity: 22 },
                     { id: 103, movement: 'out', quantity: 15 }, ];

console.log(
  isItemAvailable(101, transactions),     // false
  isItemAvailable(103, transactions),     // false
  isItemAvailable(105, transactions),     // true
);

//

/*
input: inventory item ID as a number, array of transactions w/each transaction
  represented as an object
output: boolean for whether an inventory item is available (sum of quantity
  values of item's transactions is positive, accounting for transactions
  moving 'in' or 'out')

- Get list of all transactions for given item ID
- Create `availableQuantity` variable (value: `0`)
- For each transaction:
  - If `movement` property is `'in'`:
    - Increment `availableQuantity` by `quantity` property
  - Else:
    - Decrement `availableQuantity` by `quantity` property
- Return whether `availableQuantity` > 0

*/

// 1.
function isItemAvailable(itemID, transactions) {
  let itemTransactions = transactionsFor(itemID, transactions);

  let quantity = 0;
  itemTransactions.forEach((transaction) => {
    if (transaction.movement === 'in') {
      quantity += transaction.quantity;
    } else {
      quantity -= transaction.quantity;
    }
  });

  return quantity > 0;
}


// 2.
function isItemAvailableReduce(itemID, transactions) {
  let itemTransactions = transactionsFor(itemID, transactions);

  let quantity = itemTransactions.reduce((sum, transaction) => {
    if (transaction.movement === "in") {
      return sum + transaction.quantity;
    } else {
      return sum - transaction.quantity;
    }
  }, 0);

  return quantity > 0;
}

//

function transactionsFor(itemID, transactions) {
  return transactions.filter((transaction) => transaction.id === itemID);
}

/* eslint no-unused-vars: */
