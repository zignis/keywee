/**
 * Returns the greatest common divisor of two numbers
 *
 * @example
 * gcd(24, 12);
 * => 12
 *
 * @param a - First number
 * @param b - Second number
 */
export const gcd = (a: number, b: number): number =>
  b === 0 ? a : gcd(b, a % b);
