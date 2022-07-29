/*!
 * keywee v1.0.1
 * (c) HexM7
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

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
 * @param {Options} [options] Object sanitize options.
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

exports.objPick = objPick;
exports.objSanitize = objSanitize;
//# sourceMappingURL=index.js.map
