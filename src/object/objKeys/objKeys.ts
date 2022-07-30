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
const objKeys = <Type extends Record<any, any>>(
  obj: Type,
): Array<keyof Type> => {
  const keys: Array<keyof Type> = [];

  for (const key in obj) {
    if (hasKey(obj, key)) {
      keys.push(key);
    }
  }

  return keys;
};

export default objKeys;
