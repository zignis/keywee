import { arrReduce } from '../arrReduce';

/**
 * Returns the product of all the elements in the given numeric array.
 * @example
 *
 * arrProd([2, 4, 8]);
 * => 64
 *
 * @param {Array} arr A numeric array.
 * @returns {Number} The product of all the elements of the array.
 */
export default function arrProd(arr: number[]): number {
  return arrReduce(
    arr,
    function (previousValue, currentValue) {
      return previousValue * currentValue;
    },
    1,
  );
}
