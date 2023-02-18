import { hasKey } from '../hasKey';

/**
 * Deletes a single key or multiple keys from an object
 *
 * @example
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
 *
 * @param a - An object
 * @param keys - The key or an array of keys to remove.
 */
export const objFlush = <
  Type extends Record<string | number | symbol, unknown>,
  Key extends keyof Type,
>(
  a: Type,
  keys?: Key | Key[],
): Partial<Type> => {
  if (!keys) {
    for (const key in a) {
      if (hasKey(a, key)) {
        delete a[key];
      }
    }
  } else if (Array.isArray(keys)) {
    let i = keys.length;

    while (i--) {
      if (hasKey(a, keys[i] as Key)) {
        delete a[keys[i] as Key];
      }
    }
  } else if (hasKey(a, keys)) {
    delete a[keys];
  }

  return a;
};

export { objFlush as objectFlush };
