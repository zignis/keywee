import type { Vector } from '../types';
import { vecDot } from '../vecDot';

/**
 * Returns the magnitude of a vector
 *
 * @example
 * vecMag([3, 4]);
 * => 5
 *
 * @param a - A vector
 */
export const vecMag = (a: Vector): number => Math.sqrt(vecDot(a, a));
