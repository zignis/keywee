/**
 * Checks if a key or an array of keys exists on an object
 *
 * @example
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
 *
 * @param a - An object
 * @param keys - The keys to check
 */
export const hasKey = <
  Type extends Record<string | number | symbol, unknown>,
  Key extends keyof Type,
>(
  a: Type,
  keys: Key | Key[],
): boolean => {
  let hasKeys = true;

  if (Array.isArray(keys)) {
    let i = keys.length;

    while (i--) {
      if (!hasKey(a, keys[i] as Key)) {
        hasKeys = false;
        break;
      }
    }
  } else {
    if (!Object.prototype.hasOwnProperty.call(a, keys)) {
      hasKeys = false;
    }
  }

  return hasKeys;
};
