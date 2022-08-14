import type { Vector } from '../types';
import { vecDot } from '../vecDot';

export default function vecMag(vec: Vector): number {
  return Math.sqrt(vecDot(vec, vec));
}
