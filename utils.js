// `assertDefined` modified from suggestion in the issue discussion
// at https://github.com/Microsoft/TypeScript/issues/23405#issuecomment-991881339

/**
 * JSDoc types lack a non-undefined assertion.
 * https://github.com/Microsoft/TypeScript/issues/23405#issuecomment-873331031
 *
 * Throws if the supplied value is _undefined_ (_null_ is allowed).\
 * Returns (via casting) the supplied value as a T with _undefined_ removed from its type space.
 * This informs the compiler that the value cannot be _undefined_.
 * @template T
 * @param {T} value
 * @param {string} [expectMessage]
 * @param {string} [valueName]
 * @returns {T extends undefined ? never : T}
 *
 * @example
 * const arr = [1, 2, 3];
 * const idx = 99;
 * // throws Error:
 * const var = assertDefined(
 *   arr[idx],
 *   `Index of ${idx.toString()} outside range for array: ${arr.toString()}.`,
 *   "idx"
 * );
 */
export function assertDefined(value, expectMessage, valueName) {
  if (value === undefined) {
    throw new Error(
      `Encountered unexpected undefined value${valueName ? ` for '${valueName}'` : ""}.` +
        (expectMessage ? ` Expected: ${expectMessage}` : "")
    );
  }
  return /** @type {*} */ (value);
}
