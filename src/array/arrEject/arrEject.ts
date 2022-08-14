import { arrIndex } from '../arrIndex';

/**
 * Removes elements from an array.
 * @example
 *
 * arrEject([1, 2, 3, 4], 2);
 *
 * => [1, 3, 4]
 *
 *
 * @param {Array} arr An array.
 * @param {any} elem Element to remove from the array.
 *
 * @returns {Array} Array with ejected elements.
 */
export default function arrEject<Type extends any[]>(
  arr: Type,
  elem: typeof arr[number],
): Type {
  var index = arrIndex(arr, elem);

  if (index > -1) {
    arr.splice(index, 1);
  }

  return arr;
}
