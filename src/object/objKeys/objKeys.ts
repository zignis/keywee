import { hasKey } from '../hasKey';

/**
 * Returns an array of keys of an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false,
 * };
 *
 * objKeys(obj);
 * => ['foo', 'bar']
 * ```
 * @param {Object} obj Source object.
 *
 * @returns {Array} Keys of the object.
 */
export default function objKeys<Type extends Record<any, any>>(
  obj: Type,
): Array<keyof Type> {
  var keys: Array<keyof Type> = [];

  for (var key in obj) {
    if (hasKey(obj, key)) {
      keys.push(key);
    }
  }

  return keys;
}
