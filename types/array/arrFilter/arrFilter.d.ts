/**
 *  Returns a new array with the elements from the given array that pass the test implemented by the provided function.
 * @example
 *
 * arrFilter(
 *   [1, 2, 3, 4, 5],
 *   function(element) {
 *     return element % 2 === 0;
 *   },
 * );
 *
 * => [2, 4]
 *
 * @param {Array} arr An array.
 * @param {Function} func Function that returns a boolean value.
 * @param {*} [thisArg] Value to use as `this` when executing function.
 *
 * @returns {Array} A new array with the elements that passed the test implemented by the function.
 */
export default function arrFilter(arr: any[], func: (element: typeof arr[any], index: number, array: typeof arr) => boolean, thisArg?: any): Partial<typeof arr>;
//# sourceMappingURL=arrFilter.d.ts.map