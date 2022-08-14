import { strTrim } from '../../string';
import { hasKey } from '../hasKey';
import { objKeys } from '../objKeys';

/**
 * Sanitize an object.
 * @example
 *
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
 *
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
export default function objSanitize<Type extends Record<any, any>>(
  obj: Type,
  options?: {
    preserveOriginal?: boolean;
    removeEmptyObjects?: boolean;
    removeEmptyStrings?: boolean;
    validate?: (value: typeof obj[keyof typeof obj]) => boolean;
  },
): Partial<Type> {
  var preserveOriginal = (options || {}).preserveOriginal;
  var removeEmptyObjects = (options || {}).removeEmptyObjects;
  var removeEmptyStrings = (options || {}).removeEmptyStrings;
  var validate = (options || {}).validate;
  var objToModify: Type = obj;

  function recurse(object: Record<any, any>): any {
    for (var key in object) {
      if (!hasKey(object, key)) continue;

      var isInvalid = validate ? !validate(object[key]) : false;

      var isEmptyObject =
        removeEmptyObjects &&
        object[key] &&
        typeof object[key] === 'object' &&
        objKeys(object[key]).length === 0;

      var isEmptyStr =
        removeEmptyStrings &&
        typeof object[key] === 'string' &&
        !strTrim(object[key]);

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
  }

  recurse(preserveOriginal ? objToModify : obj);

  return preserveOriginal ? objToModify : obj;
}
