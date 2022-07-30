import { objKeys } from '../objKeys';

/**
 * Sorts the keys of an object alphabetically.
 * @example
 * ```ts
 * const obj = {
 *   "c": 1,
 *   "a": 2,
 *   "b": 3
 * };
 *
 * const newObj = objSort(obj);
 * console.log(newObj);
 * =>
 * {
 *   "a": 2,
 *   "b": 3,
 *   "c": 1
 * }
 * ```
 * @typedef {Object} Options
 * @property {Boolean} [reverse=false] Reverse the sort order.
 *
 * @param {Object} obj Source object.
 * @param {Options} [options] Object sort options.
 *
 * @returns {Object} Object with sorted keys.
 */
const objSort = <Type extends Record<any, any>>(
  obj: Type,
  options?: {
    reverse?: boolean;
  },
): Type => {
  const { reverse } = options || {};
  const newObj: Type = obj;
  const keys = objKeys(obj);

  if (reverse) {
    keys.reverse();
  } else {
    keys.sort();
  }

  var i = keys.length;
  while (i--) {
    newObj[keys[i]] = obj[keys[i]];
  }

  return newObj;
};

export default objSort;
