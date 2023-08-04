// Ancestors

// Implement an ancestors method that returns the prototype chain (ancestors)
// of a calling object as an array of object names.

// Here's an example output:

// name property added to make objects easier to identify
let foo = {name: 'foo'};
let bar = Object.create(foo);
bar.name = 'bar';
let baz = Object.create(bar);
baz.name = 'baz';
let qux = Object.create(baz);
qux.name = 'qux';

// console.log(
//   qux.ancestors(),  // returns ['baz', 'bar', 'foo', 'Object.prototype']
//   baz.ancestors(),  // returns ['bar', 'foo', 'Object.prototype']
//   bar.ancestors(),  // returns ['foo', 'Object.prototype']
//   foo.ancestors(),  // returns ['Object.prototype']
// );

//


// Iterative Solution:
Object.prototype.ancestors = function() {
  let ancestors = [];

  let ancestor = Object.getPrototypeOf(this);

  while (ancestor !== null) {
    ancestors.push(ancestor.name ?? 'Object.prototype');
    ancestor = Object.getPrototypeOf(ancestor);
  }

  return ancestors;
};

// Recursive Solutions:
Object.prototype.ancestorsRecursive = function() {
  let ancestor = Object.getPrototypeOf(this);

  // if (!ancestor.hasOwnProperty('name')) return ['Object.prototype'];
  if (!Object.getPrototypeOf(ancestor)) return ['Object.prototype'];

  return [ancestor.name].concat(ancestor.ancestors());
};

console.log(
  qux.ancestors(),  // returns ['baz', 'bar', 'foo', 'Object.prototype']
  baz.ancestors(),  // returns ['bar', 'foo', 'Object.prototype']
  bar.ancestors(),  // returns ['foo', 'Object.prototype']
  foo.ancestors(),  // returns ['Object.prototype']
);

/* eslint no-extend-native: */
