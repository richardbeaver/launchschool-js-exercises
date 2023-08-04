// Inventory Item Transactions

// Write a function that takes two arguments, an inventory item ID and a list
// of transactions, and returns an array containing only the transactions for
// the specified inventory item.

/* eslint indent:"off" */
// Example
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
  transactionsFor(101, transactions)
);
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]

//

/*
input: inventory item ID as a number, array of transactions w/each transaction
  represented as an object
output: array containing only transactions for input item ID number

- Filter input transaction list by whether each object's `id` property matches
  the item ID number input
- Return filtered list

*/

function transactionsFor(itemID, transactions) {
  return transactions.filter((transaction) => transaction.id === itemID);
}
