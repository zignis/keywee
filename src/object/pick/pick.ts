/**
 * Pick specific keys from an object.
 * @example
 * ```ts
 * const obj = {
 *   "one": true,
 *   "two": false,
 *   "foo": "bar"
 * };
 *
 * objPick(obj, ['two', 'foo']);
 *
 * =>
 * {
 *   "two": false,
 *   "foo": "bar"
 * }
 * ```
 *
 * @typedef {Object} Options
 * @property {Boolean} [upsert=false] Create new properties for missing keys.
 * @property {any} [defaultValue] Default value to use for upsert.
 *
 * @param {Object} obj Source object.
 * @param {any[]} keys Array of keys to pick.
 * @param {Options} options Object pick options.
 *
 * @returns {Object} Object with specified keys.
 */
const objPick = <Type extends Record<any, any>, Key extends keyof Type>(
  obj: Type,
  keys: Key[] | string[],
  options?: {
    upsert?: boolean;
    defaultValue?: any;
  },
): Record<typeof keys[any], typeof obj[keyof typeof obj]> => {
  const { upsert, defaultValue } = options || {};
  const newObj: Record<any, any> = {};

  keys.forEach((key) => {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      newObj[key] = obj[key];
    } else if (upsert) {
      newObj[key] = defaultValue || null;
    }
  });

  return newObj;
};

export default objPick;
