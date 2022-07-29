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
const arrDiff = (arr: any[], relArr: any[]): any[] => {
  return arr.filter((value) => relArr.indexOf(value) === -1);
};

export default arrDiff;
