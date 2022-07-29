import { hasKey } from '../hasKey';

/**
 * Deletes a key or an arrays of keys from an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false
 * };
 *
 * objFlush(obj, 'foo');
 * =>
 * {
 *   "bar": false,
 * }
 *
 * objFlush(obj, ['foo', 'bar']);
 * => {}
 * ```
 * @param {Object} obj Source object.
 * @param {any | any[]} keys The key or array of keys to remove.
 *
 * @returns {Boolean} Result object.
 */
const objFlush = <Type extends Record<any, any>, Key extends keyof Type>(
  obj: Type,
  keys: Key | Key[],
): Partial<Type> => {
  if (Array.isArray(keys)) {
    keys.forEach((key) => {
      if (hasKey(obj, key)) {
        delete obj[key];
      }
    });
  } else if (hasKey(obj, keys)) {
    delete obj[keys];
  }

  return obj;
};

export default objFlush;
