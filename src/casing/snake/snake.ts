/**
 * Converts a string to snake_case.
 * @example
 * ```ts
 * toSnakeCase('camelCase');
 *
 * => camel_case
 * ```
 *
 * @typedef {Object} Options
 * @property {String} [separator="_"] Separator.
 *
 * @param {String} input Source string.
 * @param {Options} options Snake case options.
 *
 * @returns {String} Snake cased string.
 */
const toSnakeCase = (
  input: string,
  options?: {
    separator?: string;
  },
): string => {
  const { separator } = options || {};

  return input
    .replace(/([a-z])([A-Z]+)/g, (_, s1: string, s2: string) => s1 + ' ' + s2)
    .replace(
      /([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/,
      (_, s1: string, s2: string, s3: string) => s1 + s2.toLowerCase() + s3,
    )
    .replace(
      /([A-Z]+)([A-Z][a-z])/g,
      (_, s1: string, s2: string) => s1.toLowerCase() + ' ' + s2,
    )
    .replace(/\W+/g, ' ')
    .split(/ |\B(?=[A-Z])/)
    .map((word: string) => word.toLowerCase())
    .join(separator || '_');
};

export default toSnakeCase;
