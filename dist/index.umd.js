/*!
 * KeyWee v1.7.0
 * (c) HexM7
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.keywee = {}));
})(this, (function (exports) { 'use strict';

  /**
   *  Returns a new array with the elements from the given array that pass the test implemented by the provided function.
   * @example
   *
   * arrFilter(
   *   [1, 2, 3, 4, 5],
   *   function(element) {
   *     return element % 2 === 0;
   *   },
   * );
   *
   * => [2, 4]
   *
   * @param {Array} arr An array.
   * @param {Function} func Function that returns a boolean value.
   * @param {*} [thisArg] Value to use as `this` when executing function.
   *
   * @returns {Array} A new array with the elements that passed the test implemented by the function.
   */
  function arrFilter(arr, func, thisArg) {
      var obj = Object(arr);
      var len = obj.length >>> 0;
      var res = [];
      for (var i = 0; i < len; i++) {
          if (i in obj) {
              var val = obj[i];
              if (func.call(thisArg, val, i, obj))
                  res.push(val);
          }
      }
      return res;
  }

  /**
   * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
   * @example
   *
   * arrIndex([1, 2, 3, 4, 5], 4);
   *
   * => 3
   *
   * @param {Array} arr An array.
   * @param {*} element The element to search for.
   * @param {number} [from] The index to start the search at.
   *
   * @returns {number} The index of the element in the array.
   */
  function arrIndex(arr, element, from) {
      var len = arr.length >>> 0;
      var fromIndex = Number(from) || 0;
      fromIndex = fromIndex < 0 ? Math.ceil(fromIndex) : Math.floor(fromIndex);
      if (fromIndex < 0)
          fromIndex += len;
      for (; fromIndex < len; fromIndex++) {
          if (fromIndex in arr && arr[fromIndex] === element)
              return fromIndex;
      }
      return -1;
  }

  /**
   * Returns common elements from the both the arrays.
   * @example
   *
   * arrCross([1, 2, 3, 4], [2, 3]);
   *
   * => [2, 3]
   *
   *
   * @param {Array} arr An array.
   * @param {Array} relArr Another array.
   *
   * @returns {Array} Intersecting elements of the arrays.
   */
  function arrCross(arr, relArr) {
      return arrFilter(arr, function (element) {
          return arrIndex(relArr, element) !== -1;
      });
  }

  /**
   * Returns distinct elements from the first array that are not present in the second array.
   * @example
   *
   * arrDiff([1, 2, 3, 4], [2, 3]);
   *
   * => [1, 4]
   *
   *
   * @param {Array} arr An array.
   * @param {Array} relArr Another array.
   *
   * @returns {Array} Distinct elements from the first array that are not present in the second array.
   */
  function arrDiff(arr, relArr) {
      return arrFilter(arr, function (element) {
          return arrIndex(relArr, element) === -1;
      });
  }

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
  function arrEject(arr, elem) {
      var index = arrIndex(arr, elem);
      if (index > -1) {
          arr.splice(index, 1);
      }
      return arr;
  }

  /**
   * Creates a new array populated with the results of calling a provided function on every element in the calling array.
   * @example
   *
   * arrMap([1, 2, 3], function(element) {
   *   return element * 2;
   * });
   *
   * => [2, 4, 6]
   *
   * @param {Array} arr An array.
   * @param {Function} func Function that returns a value.
   * @param {*} [thisArg] Value to use as `this` when executing function.
   *
   * @returns {Array} A new array with the elements produced by the function.
   */
  function arrMap(arr, func, thisArg) {
      var array = [];
      for (var i = 0; i < arr.length; i++) {
          array.push(func.call(thisArg, arr[i], i, arr));
      }
      return array;
  }

  /**
   * Executes the callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
   * @example
   *
   * const result = arrReduce(
   *   [1, 2, 3, 4],
   *   function(previous, current) {
   *     return previous + current;
   *   },
   *   0,
   * );
   *
   * => 10
   *
   * @param {Array} arr An array.
   * @param {Function} cb The reducer function.
   * @param {*} [initialVal] An optional initial value.
   *
   * @returns {*} The collective result of reducer callback.
   */
  function arrReduce(arr, cb, initialVal) {
      var accumulator = initialVal;
      for (var i = 0; i < arr.length; i++) {
          if (accumulator !== undefined) {
              accumulator = cb.call(undefined, accumulator, arr[i], i, arr);
          }
          else {
              accumulator = arr[i];
          }
      }
      return accumulator;
  }

  /**
   * Returns the product of all the elements in the given numeric array.
   * @example
   *
   * arrProd([2, 4, 8]);
   * => 64
   *
   * @param {Array} arr A numeric array.
   * @returns {Number} The product of all the elements of the array.
   */
  function arrProd(arr) {
      return arrReduce(arr, function (previousValue, currentValue) {
          return previousValue * currentValue;
      }, 1);
  }

  /**
   * Returns the sum of all the elements in the given numeric array.
   * @example
   *
   * arrSum([1, 2, 3]);
   * => 6
   *
   * @param {Array} arr A numeric array.
   * @returns {Number} The sum of all the elements of the array.
   */
  function arrSum(arr) {
      return arrReduce(arr, function (previousValue, currentValue) {
          return previousValue + currentValue;
      }, 0);
  }

  /**
   * Clones distinct elements from the second array to the first array.
   * @example
   *
   * arrUnion([1, 2, 3, 4, 5], [1, 3, 5, 7]);
   *
   * => [1, 2, 3, 4, 5, 7]
   *
   * @param {Array} arr An array.
   * @param {Array} relArr Another array.
   *
   * @returns {Array} Union of both the arrays.
   */
  function arrUnion(arr, relArr) {
      return arr.concat(arrDiff(relArr, arr));
  }

  /**
   * Returns a number whose value is bound to the given range.
   * @example
   *
   * clamp(0, 64, 32);
   * => 32
   *
   * @param {number} min The lower boundary of the output range.
   * @param {number} value The base value of the output range.
   * @param {number} max The upper boundary of the output range,
   *
   * @returns {number} A number in the suitable range.
   */
  function clamp(min, value, max) {
      return Math.min(Math.max(value, min), max);
  }

  /**
   * Returns the dot product of two vectors.
   * @example
   *
   * vecDot([1, 2], [3, 4]);
   *
   * => 11
   *
   * @param {Vector} vec A vector.
   * @param {Vector} relVec Another vector.
   *
   * @returns {number} Dot product of both the vectors.
   */
  function vecDot(vec, relVec) {
      return arrReduce(arrMap(vec, function (_, index) {
          return vec[index] * relVec[index];
      }), function (previousValue, currentValue) {
          return previousValue + currentValue;
      });
  }

  function vecMag(vec) {
      return Math.sqrt(vecDot(vec, vec));
  }

  /**
   * Round a float to a fixed number for decimal points.
   * @example
   *
   * toFixed(5.025, 2);
   * => 5.02
   *
   * @param {number} num Source number.
   * @param {number} digits Number of digits to round.
   *
   * @returns {number} Rounded float.
   */
  function toFixed(num, digits) {
      if (digits === void 0) { digits = 2; }
      var power = Math.pow(10, digits);
      return Math.round(num * power) / power;
  }

  /**
   * Check if object has a specific key or an array of keys.
   * @example
   *
   * const obj = {
   *   "foo": true,
   *   "bar": false
   * };
   *
   * hasKey(obj, 'foo');
   * => true
   *
   * hasKey(obj, ['foo', 'bar']);
   * => true
   *
   * @param {Object} obj Source object.
   * @param {any|any[]} keys The key or array of keys to check.
   *
   * @returns {Boolean} Result.
   */
  function hasKey(obj, keys) {
      var hasKeys = true;
      if (Array.isArray(keys)) {
          var i = keys.length;
          while (i--) {
              if (!hasKey(obj, keys[i])) {
                  hasKeys = false;
                  break;
              }
          }
      }
      else {
          if (!Object.prototype.hasOwnProperty.call(obj, keys)) {
              hasKeys = false;
          }
      }
      return hasKeys;
  }

  /**
   * Returns an array of keys of an object.
   * @example
   *
   * const obj = {
   *   "foo": true,
   *   "bar": false,
   * };
   *
   * objKeys(obj);
   * => ['foo', 'bar']
   *
   * @param {Object} obj Source object.
   *
   * @returns {Array} Keys of the object.
   */
  function objKeys(obj) {
      var keys = [];
      for (var key in obj) {
          if (hasKey(obj, key)) {
              keys.push(key);
          }
      }
      return keys;
  }

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
  function objEqual(obj, relObj) {
      if (typeof obj == 'object' &&
          obj != null &&
          typeof relObj == 'object' &&
          relObj != null) {
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
      }
      else {
          return obj === relObj;
      }
  }

  /**
   * Returns an array of similar keys having different values along the two given objects.
   * @example
   *
   * objDiff({ foo: 1, bar: 2 }, { foo: true, bar: 2 });
   * => ['foo']
   *
   * objDiff({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
   * => false
   *
   * @param {Object} obj First object.
   * @param {Object} relObj Second object.
   *
   * @returns {Array|Boolean} Array of modified keys or false if the two objects are intact.
   */
  function objDiff(obj, relObj) {
      if (objEqual(obj, relObj)) {
          return false;
      }
      var keys = objKeys(obj);
      var modifiedKeys = [];
      var i = keys.length;
      while (i--) {
          if (hasKey(relObj, keys[i]) && !objEqual(obj[keys[i]], relObj[keys[i]])) {
              modifiedKeys.push(keys[i]);
          }
      }
      return modifiedKeys.length ? modifiedKeys : false;
  }

  /**
   * Deletes a key, an arrays of keys or all keys from an object.
   * @example
   *
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
   * @param {Object} obj Source object.
   * @param {any|any[]} [keys] The key or an array of keys to remove.
   *
   * @returns {Boolean} Resultant object.
   */
  function objFlush(obj, keys) {
      if (!keys) {
          for (var key in obj) {
              if (hasKey(obj, key)) {
                  delete obj[key];
              }
          }
      }
      else if (Array.isArray(keys)) {
          var i = keys.length;
          while (i--) {
              if (hasKey(obj, keys[i])) {
                  delete obj[keys[i]];
              }
          }
      }
      else if (hasKey(obj, keys)) {
          delete obj[keys];
      }
      return obj;
  }

  /**
   * Pick specific keys from an object.
   * @example
   *
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
   *
   *
   * @typedef {Object} Options
   * @property {Boolean} [upsert=false] Create new properties for missing keys.
   * @property {any} [defaultValue] Default value to use for upsert.
   *
   * @param {Object} obj Source object.
   * @param {any[]} keys Array of keys to objPick.
   * @param {Options} options Object objPick options.
   *
   * @returns {Object} Object with specified keys.
   */
  function objPick(obj, keys, options) {
      var defaultValue = (options || {}).defaultValue;
      var upsert = (options || {}).upsert;
      var newObj = {};
      var i = keys.length;
      while (i--) {
          if (hasKey(obj, keys[i])) {
              newObj[keys[i]] = obj[keys[i]];
          }
          else if (upsert) {
              newObj[keys[i]] = defaultValue || null;
          }
      }
      return newObj;
  }

  /**
   * Converts a string to snake_case.
   * @example
   *
   * snakeCase('camelCase');
   *
   * => 'camel_case'
   *
   * @typedef {Object} Options
   * @property {String} [separator="_"] Separator.
   *
   * @param {String} input Source string.
   * @param {Options} options Snake case options.
   *
   * @returns {String} Snake cased string.
   */
  function snakeCase(input, options) {
      var separator = (options || {}).separator;
      var match = input.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g);
      return match
          ? arrMap(match, function (chunk) {
              return chunk.toLowerCase();
          }).join(separator || '_')
          : input;
  }

  /**
   * Removes whitespace from both ends of a string.
   * @example
   *
   * strTrim(' string with whitespace ');
   *
   * => 'string with whitespace'
   *
   * @param {String} input Source string.
   *
   * @returns {String} Trimmed string.
   */
  function strTrim(input) {
      return input.replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '');
  }

  /**
   * Sanitize an object.
   * @example
   *
   * objSanitize({
   *   "1": null,
   *   "2": "two",
   *   "3": undefined
   * });
   *
   * =>
   * {
   *   "2": "two"
   * }
   *
   * objSanitize({
   *   "foo": 1,
   *   "bar": "one"
   * }, {
   *   validate: (value) => typeof value !== 'string',
   * });
   *
   * =>
   * {
   *   "foo": 1
   * }
   *
   * @typedef {Object} Options
   * @property {Function} [validate] Custom validator function.
   * @property {Boolean} [preserveOriginal=false] Preserve the original object.
   * @property {Boolean} [removeEmptyStrings=false] Remove empty strings.
   * @property {Boolean} [removeEmptyObjects=false] Remove empty nested objects.
   *
   * @param {Object} obj Source object.
   * @param {Options} [options] Object sanitize options.
   *
   * @returns {Object} Sanitized object.
   */
  function objSanitize(obj, options) {
      var preserveOriginal = (options || {}).preserveOriginal;
      var removeEmptyObjects = (options || {}).removeEmptyObjects;
      var removeEmptyStrings = (options || {}).removeEmptyStrings;
      var validate = (options || {}).validate;
      var objToModify = obj;
      function recurse(object) {
          for (var key in object) {
              if (!hasKey(object, key))
                  continue;
              var isInvalid = validate ? !validate(object[key]) : false;
              var isEmptyObject = removeEmptyObjects &&
                  object[key] &&
                  typeof object[key] === 'object' &&
                  objKeys(object[key]).length === 0;
              var isEmptyStr = removeEmptyStrings &&
                  typeof object[key] === 'string' &&
                  !strTrim(object[key]);
              if (object[key] === null ||
                  object[key] === undefined ||
                  isEmptyStr ||
                  isEmptyObject ||
                  isInvalid) {
                  delete object[key];
              }
              else if (typeof object[key] === 'object') {
                  recurse(object[key]);
              }
          }
      }
      recurse(preserveOriginal ? objToModify : obj);
      return preserveOriginal ? objToModify : obj;
  }

  /**
   * Sorts the keys of an object alphabetically.
   * @example
   *
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
   *
   * @typedef {Object} Options
   * @property {Boolean} [reverse=false] Reverse the sort order.
   *
   * @param {Object} obj Source object.
   * @param {Options} [options] Object sort options.
   *
   * @returns {Object} Object with sorted keys.
   */
  function objSort(obj, options) {
      var reverse = (options || {}).reverse;
      var newObj = obj;
      var keys = objKeys(obj);
      if (reverse) {
          keys.reverse();
      }
      else {
          keys.sort();
      }
      var i = keys.length;
      while (i--) {
          newObj[keys[i]] = obj[keys[i]];
      }
      return newObj;
  }

  /**
   * Returns an array of values of an object.
   * @example
   *
   * const obj = {
   *   "foo": true,
   *   "bar": false,
   * };
   *
   * objValues(obj);
   * => [true, false]
   *
   * @param {Object} obj Source object.
   *
   * @returns {Array} Values of the object.
   */
  function objValues(obj) {
      var values = [];
      for (var key in obj) {
          if (hasKey(obj, key)) {
              values.push(obj[key]);
          }
      }
      return values;
  }

  exports.arrCross = arrCross;
  exports.arrDiff = arrDiff;
  exports.arrEject = arrEject;
  exports.arrFilter = arrFilter;
  exports.arrIndex = arrIndex;
  exports.arrMap = arrMap;
  exports.arrProd = arrProd;
  exports.arrReduce = arrReduce;
  exports.arrSum = arrSum;
  exports.arrUnion = arrUnion;
  exports.clamp = clamp;
  exports.hasKey = hasKey;
  exports.objDiff = objDiff;
  exports.objEqual = objEqual;
  exports.objFlush = objFlush;
  exports.objKeys = objKeys;
  exports.objPick = objPick;
  exports.objSanitize = objSanitize;
  exports.objSort = objSort;
  exports.objValues = objValues;
  exports.snakeCase = snakeCase;
  exports.strTrim = strTrim;
  exports.toFixed = toFixed;
  exports.vecDot = vecDot;
  exports.vecMag = vecMag;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
