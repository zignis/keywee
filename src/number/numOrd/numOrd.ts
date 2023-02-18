export const defaultOrdinals = ['th', 'st', 'nd', 'rd'] as const;

/**
 * Suffixes an ordinal to a number
 *
 * @example
 * numOrd(10);
 * => "10th"
 *
 * @param a - A number
 * @param suppliedOrdinals - Optional custom ordinals
 * @see https://gist.github.com/jlbruno/1535691/db35b4f3af3dcbb42babc01541410f291a8e8fac
 */
export const numOrd = (a: number, suppliedOrdinals?: string[]): string => {
  const ordinals = suppliedOrdinals || defaultOrdinals;
  const index = a % 100;

  return (
    a + (ordinals[(index - 20) % 10] || ordinals[index] || ordinals[0] || '')
  );
};

export { numOrd as numOrdinal, numOrd as numberOrd, numOrd as numberOrdinal };
