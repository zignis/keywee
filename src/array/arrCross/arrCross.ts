/**
 * Returns common elements from the both the arrays.
 * @example
 * ```ts
 * arrCross([1, 2, 3, 4], [2, 3]);
 *
 * => [2, 3]
 * ```
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Intersecting elements of the arrays.
 */
const arrCross = (arr: any[], relArr: any[]): any[] => {
  return arr.filter((value) => relArr.indexOf(value) !== -1);
};

export default arrCross;
