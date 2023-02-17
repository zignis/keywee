/**
 * Clamps a number to bounds
 *
 * @example
 * clamp(0, 64, 32);
 * => 32
 *
 * @param min - The lower bound
 * @param value - Un-clamped value
 * @param max - The upper bound
 */
export const clamp = (min: number, value: number, max: number): number =>
  Math.min(Math.max(value, min), max);
