/* eslint-disable */

// Neutralizer

// We wrote a neutralize function that removes negative words from sentences.
// However, it fails to remove all of them. What does happen? How would you
// fix this problem?

function neutralize(sentence) {
  let words = sentence.split(" ");

  words.forEach(word => {
    if (isNegative(word)) {
      const index = words.indexOf(word);
      words.splice(index, 1);
    }
  });
  return words.join(" ");
};

function isNegative(word) {
  return ["dull", "boring", "annoying", "chaotic"].includes(word);
}

console.log(
  neutralize("These dull boring cards are part of a chaotic board game.")
);

//

/*

Within the callback passed to `forEach`, we are attempting to modify the `words`
array while iterating over it. `forEach` uses an index count to iterate
through each element in the `words` array. When we delete an element, every
element after that is moved up. Therefore, `forEach` will skip over an element
if the element before it is removed.

We find the word `"dull"` at index `1` of our array of words from the input
string, and remove it. This shifts all subsequent elements one position to the
left, including moving `"boring"` up to index `1`. On the next iteration,
`forEach` will be at index `2`, skipping `"boring"`.

We could fix this problem by using a `for` or `while` loop and making sure to
not increment the index counter on iterations that we remove an element. Or, we
could simply instead filter the `words` array with the `filter` method, then
`join` and return the resulting new array of filtered words.

*/

function neutralize_Resolved(sentence) {
  let words = sentence.split(" ");

  return words.filter(word => !isNegative(word)).join(" ");
};
