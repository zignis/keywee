import { hasKey } from '../hasKey';
import { objEqual } from '../objEqual';
import { objKeys } from '../objKeys';

/**
 * Returns an array of similar keys having different values along the two given objects.
 * @example
 * ```ts
 * objDiff({ foo: 1, bar: 2 }, { foo: true, bar: 2 });
 * => ['foo']
 *
 * objDiff({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => false
 * ```
 * @param {Object} obj First object.
 * @param {Object} relObj Second object.
 *
 * @returns {Array|Boolean} Array of modified keys or false if the two objects are intact.
 */
export default function objDiff<
  Type extends Record<any, any>,
  Key extends keyof Type,
>(obj: Type, relObj: Type): Key[] | false {
  if (objEqual(obj, relObj)) {
    return false;
  }

  var keys = objKeys(obj);
  var modifiedKeys: Key[] = [];
  var i = keys.length;

  while (i--) {
    if (hasKey(relObj, keys[i]) && !objEqual(obj[keys[i]], relObj[keys[i]])) {
      modifiedKeys.push(keys[i] as Key);
    }
  }

  return modifiedKeys.length ? modifiedKeys : false;
}
