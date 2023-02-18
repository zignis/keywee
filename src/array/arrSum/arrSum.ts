/**
 * Returns the sum of elements of an array
 *
 * @example
 * arrSum([1, 2, 3]);
 * => 6
 *
 * @param a - A numeric array
 */
export const arrSum = (a: number[]): number =>
  a.reduce((previousValue, currentValue) => previousValue + currentValue, 0);

export { arrSum as arraySum };
