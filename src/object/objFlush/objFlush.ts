import { hasKey } from '../hasKey';

/**
 * Deletes a key, an arrays of keys or all keys from an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false,
 *   "one": 2
 * };
 *
 * objFlush(obj, 'foo');
 * =>
 * {
 *   "bar": false,
 *   "one": 2
 * }
 *
 * objFlush(obj, ['foo', 'bar']);
 * => {
 *   "one": 2
 * }
 *
 * objFlush(obj);
 * => {}
 * ```
 * @param {Object} obj Source object.
 * @param {any | any[]} [keys] The key or an array of keys to remove.
 *
 * @returns {Boolean} Resultant object.
 */
const objFlush = <Type extends Record<any, any>, Key extends keyof Type>(
  obj: Type,
  keys?: Key | Key[],
): Partial<Type> => {
  if (!keys) {
    for (const key in obj) {
      if (hasKey(obj, key)) {
        delete obj[key];
      }
    }
  } else if (Array.isArray(keys)) {
    let i = keys.length;
    while (i--) {
      if (hasKey(obj, keys[i])) {
        delete obj[keys[i]];
      }
    }
  } else if (hasKey(obj, keys)) {
    delete obj[keys];
  }

  return obj;
};

export default objFlush;
