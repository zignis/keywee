import { hasKey } from '../hasKey';

/**
 * Returns an array of values of an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false,
 * };
 *
 * objValues(obj);
 * => [true, false]
 * ```
 * @param {Object} obj Source object.
 *
 * @returns {Array} Values of the object.
 */
const objValues = <
  Type extends Record<any, any>,
  Key extends keyof Type,
  Value extends Type[Key],
>(
  obj: Type,
): Value[] => {
  const values: Value[] = [];

  for (const key in obj) {
    if (hasKey(obj, key)) {
      values.push(obj[key]);
    }
  }

  return values;
};

export default objValues;
