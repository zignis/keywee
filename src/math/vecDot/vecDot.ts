import { arrMap, arrReduce } from '../../array';
import type { Vector } from '../types';

/**
 * Returns the dot product of two vectors.
 * @example
 *
 * vecDot([1, 2], [3, 4]);
 *
 * => 11
 *
 * @param {Vector} vec A vector.
 * @param {Vector} relVec Another vector.
 *
 * @returns {number} Dot product of both the vectors.
 */
export default function vecDot(vec: Vector, relVec: Vector): number {
  return arrReduce(
    arrMap(vec, function (_, index) {
      return vec[index]! * relVec[index]!;
    }),
    function (previousValue, currentValue) {
      return previousValue + currentValue;
    },
  );
}
