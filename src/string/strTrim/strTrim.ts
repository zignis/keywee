/**
 * Removes whitespace from both ends of a string.
 * @example
 * ```ts
 * strTrim(' string with whitespace ');
 *
 * => 'string with whitespace'
 * ```
 * @param {String} input Source string.
 *
 * @returns {String} Trimmed string.
 */
export default function strTrim(input: string): string {
  return input.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
}
