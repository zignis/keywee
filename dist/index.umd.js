/*!
 * keywee v1.0.3
 * (c) HexM7
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.keywee = {}));
})(this, (function (exports) { 'use strict';

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
   * @param {any[]} keys Array of keys to objPick.
   * @param {Options} options Object objPick options.
   *
   * @returns {Object} Object with specified keys.
   */
  var objPick = function (obj, keys, options) {
      var _a = options || {}, upsert = _a.upsert, defaultValue = _a.defaultValue;
      var newObj = {};
      keys.forEach(function (key) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
              newObj[key] = obj[key];
          }
          else if (upsert) {
              newObj[key] = defaultValue || null;
          }
      });
      return newObj;
  };

  /**
   * Sanitize an object.
   * @example
   * ```ts
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
   * ```
   *
   * @typedef {Object} Options
   * @property {Function} [validate] Custom validator function.
   * @property {Boolean} [preserveOriginal=false] Preserve the original object.
   * @property {Boolean} [removeEmptyStrings=false] Remove empty strings.
   * @property {Boolean} [removeEmptyObjects=false] Remove empty nested objects.
   *
   * @param {Object} obj Source object.
   * @param {Options} [options] Object objSanitize options.
   *
   * @returns {Object} Sanitized object.
   */
  var objSanitize = function (obj, options) {
      var _a = options || {}, validate = _a.validate, preserveOriginal = _a.preserveOriginal, removeEmptyStrings = _a.removeEmptyStrings, removeEmptyObjects = _a.removeEmptyObjects;
      var objToModify = obj;
      var recurse = function (object) {
          for (var key in object) {
              var isInvalid = validate ? !validate(object[key]) : false;
              var isEmptyObject = removeEmptyObjects &&
                  object[key] &&
                  typeof object[key] === 'object' &&
                  Object.keys(object[key]).length === 0;
              var isEmptyStr = removeEmptyStrings &&
                  typeof object[key] === 'string' &&
                  !object[key].trim();
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
      };
      recurse(preserveOriginal ? objToModify : obj);
      return preserveOriginal ? objToModify : obj;
  };

  /**
   * Check if object has a specific key or an array of keys.
   * @example
   * ```ts
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
   * ```
   * @param {Object} obj Source object.
   * @param {any | any[]} keys The key or array of keys to check.
   *
   * @returns {Boolean} Result.
   */
  var hasKey = function (obj, keys) {
      var hasKeys = true;
      if (Array.isArray(keys)) {
          keys.forEach(function (key) {
              if (!hasKey(obj, key)) {
                  hasKeys = false;
              }
          });
      }
      else {
          if (!Object.prototype.hasOwnProperty.call(obj, keys)) {
              hasKeys = false;
          }
      }
      return hasKeys;
  };

  /**
   * Converts a string to snake_case.
   * @example
   * ```ts
   * toSnakeCase('camelCase');
   *
   * => camel_case
   * ```
   *
   * @typedef {Object} Options
   * @property {String} [separator="_"] Separator.
   *
   * @param {String} input Source string.
   * @param {Options} options Snake case options.
   *
   * @returns {String} Snake cased string.
   */
  var toSnakeCase = function (input, options) {
      var separator = (options || {}).separator;
      return input
          .replace(/([a-z])([A-Z]+)/g, function (_, s1, s2) { return s1 + ' ' + s2; })
          .replace(/([A-Z])([A-Z]+)([^a-zA-Z0-9]*)$/, function (_, s1, s2, s3) { return s1 + s2.toLowerCase() + s3; })
          .replace(/([A-Z]+)([A-Z][a-z])/g, function (_, s1, s2) { return s1.toLowerCase() + ' ' + s2; })
          .replace(/\W+/g, ' ')
          .split(/ |\B(?=[A-Z])/)
          .map(function (word) { return word.toLowerCase(); })
          .join(separator || '_');
  };

  exports.hasKey = hasKey;
  exports.objPick = objPick;
  exports.objSanitize = objSanitize;
  exports.toSnakeCase = toSnakeCase;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=index.umd.js.map
