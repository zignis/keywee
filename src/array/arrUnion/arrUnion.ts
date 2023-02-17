/**
 * Returns a unique union of elements of two arrays
 *
 * @example
 * arrUnion([1, 2, 3, 4, 5], [1, 3, 5, 7]);
 * => [1, 2, 3, 4, 5, 7]
 *
 * @param a - First array
 * @param b - Second array
 */
export const arrUnion = <Type extends unknown[]>(
  a: unknown[],
  b: unknown[],
): Type => [...new Set([...a, ...b])] as Type;
