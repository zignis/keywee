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
 * @param {any|any[]} keys The key or array of keys to check.
 *
 * @returns {Boolean} Result.
 */
export default function hasKey<
  Type extends Record<any, any>,
  Key extends keyof Type,
>(obj: Type, keys: Key | Key[]): boolean {
  var hasKeys = true;

  if (Array.isArray(keys)) {
    var i = keys.length;
    while (i--) {
      if (!hasKey(obj, keys[i] as Key)) {
        hasKeys = false;
        break;
      }
    }
  } else {
    if (!Object.prototype.hasOwnProperty.call(obj, keys)) {
      hasKeys = false;
    }
  }

  return hasKeys;
}
