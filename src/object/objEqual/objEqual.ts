import { objKeys } from '../objKeys';

/**
 * Compares two objects for equality.
 * @example
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => true
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: false });
 * => false
 *
 * @param {Object} obj First object.
 * @param {Object} relObj Second object.
 *
 * @returns {Boolean} A boolean value indicating the similar nature of the two objects.
 */
export default function objEqual<Type extends Record<any, any>>(
  obj: Type,
  relObj: Type,
): boolean {
  if (
    typeof obj == 'object' &&
    obj != null &&
    typeof relObj == 'object' &&
    relObj != null
  ) {
    if (objKeys(obj).length - objKeys(relObj).length !== 0) {
      return false;
    }

    for (var objKey in obj) {
      if (!(objKey in relObj) || !objEqual(obj[objKey], relObj[objKey])) {
        return false;
      }
    }

    for (var relObjKey in relObj) {
      if (!(relObjKey in obj) || !objEqual(relObj[relObjKey], obj[relObjKey])) {
        return false;
      }
    }

    return true;
  } else {
    return obj === relObj;
  }
}
