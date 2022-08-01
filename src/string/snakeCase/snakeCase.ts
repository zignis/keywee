import { arrMap } from '../../array';

/**
 * Converts a string to snake_case.
 * @example
 * ```ts
 * snakeCase('camelCase');
 *
 * => 'camel_case'
 * ```
 * @typedef {Object} Options
 * @property {String} [separator="_"] Separator.
 *
 * @param {String} input Source string.
 * @param {Options} options Snake case options.
 *
 * @returns {String} Snake cased string.
 */
export default function snakeCase(
  input: string,
  options?: {
    separator?: string;
  },
): string {
  var separator = (options || {}).separator;
  var match = input.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g,
  );

  return match
    ? arrMap(match, function (chunk) {
        return chunk.toLowerCase();
      }).join(separator || '_')
    : input;
}
