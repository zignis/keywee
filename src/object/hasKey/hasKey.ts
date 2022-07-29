/**
 * Check if object has a specific key or an array of keys.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false
 * };
 *
 * hasKey(obj, 'foo');
 * => true
 *
 * hasKey(obj, ['foo', 'bar']);
 * => true
 * ```
 * @param {Object} obj Source object.
 * @param {any | any[]} keys The key or array of keys to check.
 *
 * @returns {Boolean} Result.
 */
const hasKey = <Type extends Record<any, any>, Key extends keyof Type>(
  obj: Type,
  keys: Key | Key[],
): boolean => {
  let hasKeys = true;

  if (Array.isArray(keys)) {
    keys.forEach((key) => {
      if (!hasKey(obj, key)) {
        hasKeys = false;
      }
    });
  } else {
    if (!Object.prototype.hasOwnProperty.call(obj, keys)) {
      hasKeys = false;
    }
  }

  return hasKeys;
};

export default hasKey;
