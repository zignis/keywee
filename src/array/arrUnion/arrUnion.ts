import { arrDiff } from '../arrDiff';

/**
 * Clones distinct elements from the second array to the first array.
 * @example
 *
 * arrUnion([1, 2, 3, 4, 5], [1, 3, 5, 7]);
 *
 * => [1, 2, 3, 4, 5, 7]
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Union of both the arrays.
 */
export default function arrUnion(arr: any[], relArr: any[]): any[] {
  return arr.concat(arrDiff(relArr, arr));
}
