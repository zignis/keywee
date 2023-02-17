import { hasKey } from '../hasKey';
import { objEqual } from '../objEqual';

/**
 * Returns an array of identical keys with different values across two objects
 *
 * @example
 * objDiff({ foo: 1, bar: 2 }, { foo: true, bar: 2 });
 * => ['foo']
 *
 * objDiff({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => false
 *
 * @param a - First object
 * @param b - Second object
 */
export const objDiff = <
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Type extends Record<string | number | symbol, any>,
  Key extends keyof Type,
>(
  a: Type,
  b: Type,
): Key[] | false => {
  if (objEqual(a, b)) {
    return false;
  }

  const modifiedKeys: Key[] = [];
  const keys = Object.keys(a);
  let i = keys.length;

  while (i--) {
    if (
      hasKey(b, keys[i] as Key) &&
      !objEqual(a[keys[i] as Key], b[keys[i] as Key])
    ) {
      modifiedKeys.push(keys[i] as Key);
    }
  }

  return modifiedKeys.length ? modifiedKeys : false;
};
