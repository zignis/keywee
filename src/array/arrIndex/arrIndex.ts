/**
 * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
 * @example
 * ```ts
 * arrIndex([1, 2, 3, 4, 5], 4);
 *
 * => 3
 * ```
 * @param {Array} arr An array.
 * @param {*} element The element to search for.
 * @param {Number} [from] The index to start the search at.
 *
 * @returns {Number} The index of the element in the array.
 */
export default function arrIndex(
  arr: any[],
  element: typeof arr[any],
  from?: number,
): number {
  var len = arr.length >>> 0;

  var fromIndex = Number(from) || 0;
  fromIndex = fromIndex < 0 ? Math.ceil(fromIndex) : Math.floor(fromIndex);
  if (fromIndex < 0) fromIndex += len;

  for (; fromIndex < len; fromIndex++) {
    if (fromIndex in arr && arr[fromIndex] === element) return fromIndex;
  }
  return -1;
}
