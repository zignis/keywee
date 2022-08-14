/**
 * Converts a string to snake_case.
 * @example
 *
 * snakeCase('camelCase');
 *
 * => 'camel_case'
 *
 * @typedef {Object} Options
 * @property {String} [separator="_"] Separator.
 *
 * @param {String} input Source string.
 * @param {Options} options Snake case options.
 *
 * @returns {String} Snake cased string.
 */
export default function snakeCase(input: string, options?: {
    separator?: string;
}): string;
//# sourceMappingURL=snakeCase.d.ts.map