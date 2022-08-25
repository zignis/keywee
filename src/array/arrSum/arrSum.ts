import { arrReduce } from '../arrReduce';

/**
 * Returns the sum of all the elements in the given numeric array.
 * @example
 *
 * arrSum([1, 2, 3]);
 * => 6
 *
 * @param {Array} arr A numeric array.
 * @returns {Number} The sum of all the elements of the array.
 */
export default function arrSum(arr: number[]): number {
  return arrReduce(
    arr,
    function (previousValue, currentValue) {
      return previousValue + currentValue;
    },
    0,
  );
}
