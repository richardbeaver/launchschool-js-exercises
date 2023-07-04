// 1000 Lights

// You have a bank of switches before you, numbered from 1 to count. Every
// switch is connected to exactly one light that is initially off. You walk
// down the row of switches and toggle every one of them, that is, you flip
// every switch. All the lights are now on. You walk back to the beginning of
// the row and start another pass. On this second pass, you toggle switches
// 2, 4, 6, and so on. Now, every other light is on. On the third pass, you
// go back to the beginning again, this time toggling switches 3, 6, 9, and
// so on. You continue to repeat this process until you have made count passes.

// Write a program that takes one argument—the total number of switches—and
// returns an array of the lights that are on after count passes.

// Examples:
console.log(
  lightsOn(5),        // [1, 4]
  // Detailed result of each round for `5` lights
  // Round 1: all lights are on
  // Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
  // Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
  // Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
  // Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

  lightsOn(100),      // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
);

//

/*
input: `switches`: number of switches (also number of passes over switches to
  be done)
output: array of numbers of all switches that are on after all passes

- All switches initially turned off
- First switch is #1, not #0
- For the `n`-th round, every switch that is a multiple of `n` gets changed
- We do the same number of passes over the switches as the number of switches


- Create an array with `switches` number of elements, all `false`
- For `i` in [0, switches):
  - Negate boolean value of switch at every multiple of `i`
- Return array of indexes of all "switch" values that are `true`


- Also, the resulting array seems to be the squares of all numbers in
  [1, floor of square root of `count`]

*/

function lightsOn(switches) {
  let switchStates = Array(switches).fill(false);

  for (let passNumber = 1; passNumber <= switches; passNumber += 1) {
    for (let idx = passNumber - 1; idx < switches; idx += passNumber) {
      switchStates[idx] = !switchStates[idx];
    }
  }

  // =============

  // Ways of filtering, then mapping to a result that still needs to use
  // the origianl index
  // Here, we need to return an array of numbers related to index of only
  // the elements that are `true` values:


  // Create our own array and modify it as we iterate with `forEach`; then,
  // return the resulting array (could use a `for` loop this way as well)
  let onSwitchIdxs = [];
  switchStates.forEach((state, idx) => {
    if (state) {
      onSwitchIdxs.push(idx + 1);
    }
  });
  return onSwitchIdxs;


  // Map the boolean `state` of the switch and its index to an array so that
  // we keep access to both values to use for filtering and for after filtering
  return switchStates
    .map((state, idx) => [state, idx])
    .filter((arr) => arr[0])
    .map((arr) => arr[1] + 1);


  // Map each `true` state to the value we need (which is always a truthy value
  // in this case), and then filter out everything else
  return switchStates
    .map((state, idx) => (state ? idx + 1 : false))
    .filter((state) => state);


  // Use `reduce` to build an array of only elements that were true; this allows
  // us to use the index of each element as we iterate to update the accumulator
  return switchStates.reduce((acc, state, idx) => {
    if (state) {
      acc.push(idx + 1);
    }
    return acc;
  }, []);


  // Use the `flatMap` method to map `true` values to the number value we need
  // and remove values we don't want by returning an empty array, as the
  // resulting 2-D array will be flattened
  return switchStates.flatMap((state, idx) => {
    if (state) {
      return idx + 1;
    }
    return [];
  });
}

/* eslint max-lines-per-function:, no-unreachable: */
