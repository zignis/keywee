/**
 * Returns elements from the first array that are not present in the second array
 *
 * @example
 * arrDiff([1, 2, 3, 4], [2, 3]);
 * => [1, 4]
 *
 * @param a - First array
 * @param b - Second array
 */
export const arrDiff = <Type extends unknown[]>(
  a: unknown[],
  b: unknown[],
): Type => a.filter((element) => b.indexOf(element) === -1) as Type;

export {
  arrDiff as arrayDiff,
  // Users might actually confuse arrDiff with array diffing
  arrDiff as arrayDifference,
};
