// TODO: Implement deep comparison

/**
 * Compares two objects for equality
 *
 * @example
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => true
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: false });
 * => false
 *
 * @param a - First object
 * @param b - Second object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const objEqual = <Type extends Record<string | number | symbol, any>>(
  a: Type,
  b: Type,
): boolean => {
  if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
    if (Object.keys(a).length - Object.keys(b).length !== 0) {
      return false;
    }

    for (const objKey in a) {
      if (!(objKey in b) || !objEqual(a[objKey], b[objKey])) {
        return false;
      }
    }

    for (const relObjKey in b) {
      if (!(relObjKey in a) || !objEqual(b[relObjKey], a[relObjKey])) {
        return false;
      }
    }

    return true;
  } else {
    return a === b;
  }
};
