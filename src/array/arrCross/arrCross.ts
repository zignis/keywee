/**
 * Returns the common elements from two arrays
 *
 * @example
 * arrCross([1, 2, 3, 4], [2, 3]);
 * => [2, 3]
 *
 * @param a - First array
 * @param b - Second array
 */
export const arrCross = <Type extends unknown[]>(
  a: unknown[],
  b: unknown[],
): Type => a.filter((element) => b.indexOf(element) !== -1) as Type;
