import type { Vector } from '../types';

/**
 * Returns the dot product of two vectors
 *
 * @example
 * vecDot([1, 2], [3, 4]);
 * => 11
 *
 * @param a - First vector
 * @param b - Second vector
 */
export const vecDot = (a: Vector, b: Vector): number =>
  a
    .map((_, index) => (a[index] || 0) * (b[index] || 0))
    .reduce((previousValue, currentValue) => previousValue + currentValue);
