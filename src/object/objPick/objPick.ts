import { hasKey } from '../hasKey';

/**
 * Pick specific keys from an object.
 * @example
 *
 * const obj = {
 *   "one": true,
 *   "two": false,
 *   "foo": "bar"
 * };
 *
 * objPick(obj, ['two', 'foo']);
 *
 * =>
 * {
 *   "two": false,
 *   "foo": "bar"
 * }
 *
 *
 * @typedef {Object} Options
 * @property {Boolean} [upsert=false] Create new properties for missing keys.
 * @property {any} [defaultValue] Default value to use for upsert.
 *
 * @param {Object} obj Source object.
 * @param {any[]} keys Array of keys to objPick.
 * @param {Options} options Object objPick options.
 *
 * @returns {Object} Object with specified keys.
 */
export default function objPick<
  Type extends Record<any, any>,
  Key extends keyof Type,
>(
  obj: Type,
  keys: Key[] | string[],
  options?: {
    defaultValue?: any;
    upsert?: boolean;
  },
): Record<typeof keys[any], typeof obj[keyof typeof obj]> {
  var defaultValue = (options || {}).defaultValue;
  var upsert = (options || {}).upsert;
  var newObj: Record<any, any> = {};

  var i = keys.length;
  while (i--) {
    if (hasKey(obj, keys[i])) {
      newObj[keys[i]] = obj[keys[i]];
    } else if (upsert) {
      newObj[keys[i]] = defaultValue || null;
    }
  }

  return newObj;
}
