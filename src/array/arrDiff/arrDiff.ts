import { arrFilter } from '../arrFilter';
import { arrIndex } from '../arrIndex';

/**
 * Returns distinct elements from the first array that are not present in the second array.
 * @example
 * ```ts
 * arrDiff([1, 2, 3, 4], [2, 3]);
 *
 * => [1, 4]
 * ```
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Distinct elements from the first array that are not present in the second array.
 */
export default function arrDiff(arr: any[], relArr: any[]): any[] {
  return arrFilter(arr, function (element) {
    return arrIndex(relArr, element) === -1;
  });
}
