/**
 * Capitalizes the first letter of a phrase
 *
 * @example
 * strCap("lower case");
 * => "Lower case"
 *
 * @param a - A string
 */
export const strCap = (a: string): string =>
  a.charAt(0).toUpperCase() + a.slice(1);
