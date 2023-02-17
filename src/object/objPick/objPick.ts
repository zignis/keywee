import { hasKey } from '../hasKey';

/**
 * Returns a new object with the specified keys from a source object
 *
 * @example
 * const obj = {
 *   "one": true,
 *   "two": false,
 *   "foo": "bar"
 * };
 *
 * const newObj = objPick(obj, ['two', 'foo']);
 * =>
 * {
 *   "two": false,
 *   "foo": "bar"
 * }
 *
 * @param a - An object
 * @param keys - An array of keys to pick
 * @param options - Optional options
 * @param options.upsert - Whether to create new properties for missing keys
 * @param options.defaultValue - Default value to use when upsert-ing
 */
export const objPick = <
  Type extends Record<string | number | symbol, unknown>,
  Key extends keyof Type,
>(
  a: Type,
  keys: Key[] | string[],
  options?: {
    defaultValue?: unknown;
    upsert?: boolean;
  },
): Record<typeof keys[number], typeof a[keyof typeof a]> => {
  const { defaultValue, upsert } = options || {};
  const newObj: Record<string | number | symbol, unknown> = {};
  let i = keys.length;

  while (i--) {
    if (hasKey(a, keys[i] as Key)) {
      newObj[keys[i] as Key] = a[keys[i] as Key];
    } else if (upsert) {
      newObj[keys[i] as Key] = defaultValue || null;
    }
  }

  return newObj as Record<typeof keys[number], typeof a[keyof typeof a]>;
};
