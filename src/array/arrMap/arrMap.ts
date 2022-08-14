/**
 * Creates a new array populated with the results of calling a provided function on every element in the calling array.
 * @example
 *
 * arrMap([1, 2, 3], function(element) {
 *   return element * 2;
 * });
 *
 * => [2, 4, 6]
 *
 * @param {Array} arr An array.
 * @param {Function} func Function that returns a value.
 * @param {*} [thisArg] Value to use as `this` when executing function.
 *
 * @returns {Array} A new array with the elements produced by the function.
 */
export default function arrMap(
  arr: any[],
  func: (element: typeof arr[any], index: number, array: typeof arr) => any,
  thisArg?: any,
): Partial<typeof arr> {
  var array = [];

  for (var i = 0; i < arr.length; i++) {
    array.push(func.call(thisArg, arr[i], i, arr));
  }

  return array;
}
