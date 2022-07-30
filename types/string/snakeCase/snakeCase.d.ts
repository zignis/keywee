/**
 * Converts a string to snake_case.
 * @example
 * ```ts
 * snakeCase('camelCase');
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
declare const snakeCase: (input: string, options?: {
    separator?: string;
} | undefined) => string;
export default snakeCase;
//# sourceMappingURL=snakeCase.d.ts.map