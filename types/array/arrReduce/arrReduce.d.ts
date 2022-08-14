/**
 * Executes the callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
 * @example
 *
 * const result = arrReduce(
 *   [1, 2, 3, 4],
 *   function(previous, current) {
 *     return previous + current;
 *   },
 *   0,
 * );
 *
 * => 10
 *
 * @param {Array} arr An array.
 * @param {Function} cb The reducer function.
 * @param {*} [initialVal] An optional initial value.
 *
 * @returns {*} The collective result of reducer callback.
 */
export default function arrReduce(arr: any[], cb: (previousValue: typeof arr[number], currentValue: typeof arr[number], currentIndex: number, array: typeof arr) => any, initialVal?: typeof arr[number]): any;
//# sourceMappingURL=arrReduce.d.ts.map