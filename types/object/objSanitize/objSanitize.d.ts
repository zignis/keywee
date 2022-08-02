/**
 * Sanitize an object.
 * @example
 * ```ts
 * objSanitize({
 *   "1": null,
 *   "2": "two",
 *   "3": undefined
 * });
 *
 * =>
 * {
 *   "2": "two"
 * }
 *
 * objSanitize({
 *   "foo": 1,
 *   "bar": "one"
 * }, {
 *   validate: (value) => typeof value !== 'string',
 * });
 *
 * =>
 * {
 *   "foo": 1
 * }
 * ```
 * @typedef {Object} Options
 * @property {Function} [validate] Custom validator function.
 * @property {Boolean} [preserveOriginal=false] Preserve the original object.
 * @property {Boolean} [removeEmptyStrings=false] Remove empty strings.
 * @property {Boolean} [removeEmptyObjects=false] Remove empty nested objects.
 *
 * @param {Object} obj Source object.
 * @param {Options} [options] Object sanitize options.
 *
 * @returns {Object} Sanitized object.
 */
export default function objSanitize<Type extends Record<any, any>>(obj: Type, options?: {
    preserveOriginal?: boolean;
    removeEmptyObjects?: boolean;
    removeEmptyStrings?: boolean;
    validate?: (value: typeof obj[keyof typeof obj]) => boolean;
}): Partial<Type>;
//# sourceMappingURL=objSanitize.d.ts.map