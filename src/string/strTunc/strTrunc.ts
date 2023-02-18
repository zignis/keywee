/**
 * Truncates a long string
 *
 * @example
 * strTrunc("A very long string", 5);
 * => "A very..."
 *
 * @param a - A long string
 * @param limit - Limit of characters
 * @param delimiter - Optional delimiter (terminating suffix)
 */
export const strTrunc = (a: string, limit: number, delimiter = '...'): string =>
  a.length > limit ? `${a.substring(0, limit + 1)}${delimiter}` : a;

export {
  strTrunc as strTruncate,
  strTrunc as stringTrunc,
  strTrunc as stringTruncate,
};
