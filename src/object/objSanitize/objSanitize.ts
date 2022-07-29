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
 *
 * @typedef {Object} Options
 * @property {Function} [validate] Custom validator function.
 * @property {Boolean} [preserveOriginal=false] Preserve the original object.
 * @property {Boolean} [removeEmptyStrings=false] Remove empty strings.
 * @property {Boolean} [removeEmptyObjects=false] Remove empty nested objects.
 *
 * @param {Object} obj Source object.
 * @param {Options} [options] Object objSanitize options.
 *
 * @returns {Object} Sanitized object.
 */

const objSanitize = <Type extends Record<any, any>>(
  obj: Type,
  options?: {
    preserveOriginal?: boolean;
    removeEmptyObjects?: boolean;
    removeEmptyStrings?: boolean;
    validate?: (value: typeof obj[keyof typeof obj]) => boolean;
  },
): Partial<Type> => {
  const { preserveOriginal, removeEmptyObjects, removeEmptyStrings, validate } =
    options || {};
  const objToModify: Type = obj;

  const recurse = (object: Record<any, any>): any => {
    for (const key in object) {
      const isInvalid = validate ? !validate(object[key]) : false;

      const isEmptyObject =
        removeEmptyObjects &&
        object[key] &&
        typeof object[key] === 'object' &&
        Object.keys(object[key]).length === 0;

      const isEmptyStr =
        removeEmptyStrings &&
        typeof object[key] === 'string' &&
        !object[key].trim();

      if (
        object[key] === null ||
        object[key] === undefined ||
        isEmptyStr ||
        isEmptyObject ||
        isInvalid
      ) {
        delete object[key];
      } else if (typeof object[key] === 'object') {
        recurse(object[key]);
      }
    }
  };

  recurse(preserveOriginal ? objToModify : obj);

  return preserveOriginal ? objToModify : obj;
};

export default objSanitize;
