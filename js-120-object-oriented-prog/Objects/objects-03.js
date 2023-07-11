// Testing Object Equality

// In JavaScript, comparing two objects either with == or === checks for
// object identity. In other words, the comparison evaluates as true if it's
// the same object on either side of == or ===. This is a limitation, in a
// sense, because sometimes we need to check if two objects have the same
// key/value pairs. JavaScript doesn't give us a way to do that.

// Write a function `objectsEqual` that accepts two object arguments and
// returns true or false depending on whether the objects have the same
// key/value pairs.

console.log(objectsEqual({a: 'foo'}, {a: 'foo'})                     === true);
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'})           === false);
console.log(objectsEqual({}, {})                                     === true);
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}) === false);

console.log(objectsEqual({ a: { b: 'bar' }}, { a: { b: 'bar' }})     === true);
console.log(objectsEqual([1, 2, 3], [1, 2, 3])                       === true);

// These two have all the same enumberable and non-enumerable own properties:
console.log(objectsEqual([1, 2, 3], { 0: 1, 1: 2, 2: 3, length: 3 }) === true);

//

/*
input: two objects
output: boolean for whether the two objects contain the same key/value pairs

- If the two objects are references to the same object or have the same
  properties:
  - Return `true`

`sameProperties`:
1.
- Get list of all property names for both objects and sort them
- If the length of the lists of each objects property names are not equal:
  - Return `false`
- Return true if for every property name of object 1 and index in sorted list,
  the following conditions hold:
  - The key is equal to object 2's key at that index:
  - If object 1's value at that key is an object:
    - object 2's value is an object and the two values are equal objects
  - Else:
    - The two values are equal

2.
- Similar to 1. but using lists of all key/value entries to aid readability
  - ** The use of `Object.entries` means that we would not be checking
       non-enumerable properties of the argument objects being compared
    - The last test case does not pass using this solution, as the `length`
      property of an array is non-enumerable, and so will not be included in
      the list of key/value pairs for the array

*/

function objectsEqual(object1, object2) {
  return object1 === object2 || sameProperties(object1, object2);
}

// 1.
function sameProperties(object1, object2) {
  let objKeys1 = Object.getOwnPropertyNames(object1).sort();
  let objKeys2 = Object.getOwnPropertyNames(object2).sort();

  if (objKeys1.length !== objKeys2.length) return false;

  return objKeys1.every((key, idx) => {
    if (key !== objKeys2[idx]) return false;

    if (typeof object1[key] === 'object') {
      return typeof object2[key] === 'object' && objectsEqual(object1[key], object2[key]);
    }
    return object1[key] === object2[key];
  });
}

// 2.
function sameProperties2(object1, object2) {
  let objEntries1 = Object.entries(object1).sort();
  let objEntries2 = Object.entries(object2).sort();

  if (objEntries1.length !== objEntries2.length) return false;

  return objEntries1.every((entry, idx) => {
    let [ key1, value1 ] = entry;
    let [ key2, value2 ] = objEntries2[idx];

    if (key1 !== key2) return false;

    if (typeof value1 === 'object') {
      return typeof value2 === 'object' && objectsEqual(value1, value2);
    }
    return value1 === value2;
  });
}

// ================================

// Given Solution:
// Checking that keys match and values match - does not check for objects as
// input object values
function objectsEqual_Solution(a, b) {
  if (a === b) {
    return true;
  }
  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

/* eslint no-unused-vars:, camelcase: */
