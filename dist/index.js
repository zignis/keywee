/*!
 * keywee v1.0.4
 * (c) HexM7
 * Released under the MIT License.
 */

'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/**
 * Returns common elements from the both the arrays.
 * @example
 * ```ts
 * arrCross([1, 2, 3, 4], [2, 3]);
 *
 * => [2, 3]
 * ```
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Intersecting elements of the arrays.
 */
var arrCross = function (arr, relArr) {
    return arr.filter(function (value) { return relArr.indexOf(value) !== -1; });
};

/**
 * Returns distinct elements from the first array that are not present in the second array.
 * @example
 * ```ts
 * arrDiff([1, 2, 3, 4], [2, 3]);
 *
 * => [1, 4]
 * ```
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Distinct elements from the first array that are not present in the second array.
 */
var arrDiff = function (arr, relArr) {
    return arr.filter(function (value) { return relArr.indexOf(value) === -1; });
};

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

/**
 * Clones distinct elements from the second array to the first array.
 * @example
 * ```ts
 * arrUnion([1, 2, 3, 4, 5], [1, 3, 5, 7]);
 *
 * => [1, 2, 3, 4, 5, 7]
 * ```
 *
 * @param {Array} arr An array.
 * @param {Array} relArr Another array.
 *
 * @returns {Array} Union of both the arrays.
 */
var arrUnion = function (arr, relArr) {
    return __spreadArray(__spreadArray([], arr, true), arrDiff(relArr, arr), true);
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
 * Deletes a key or an arrays of keys from an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false
 * };
 *
 * objFlush(obj, 'foo');
 * =>
 * {
 *   "bar": false,
 * }
 *
 * objFlush(obj, ['foo', 'bar']);
 * => {}
 * ```
 * @param {Object} obj Source object.
 * @param {any | any[]} keys The key or array of keys to remove.
 *
 * @returns {Boolean} Result object.
 */
var objFlush = function (obj, keys) {
    if (Array.isArray(keys)) {
        keys.forEach(function (key) {
            if (hasKey(obj, key)) {
                delete obj[key];
            }
        });
    }
    else if (hasKey(obj, keys)) {
        delete obj[keys];
    }
    return obj;
};

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
    var _a = options || {}, defaultValue = _a.defaultValue, upsert = _a.upsert;
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
    var _a = options || {}, preserveOriginal = _a.preserveOriginal, removeEmptyObjects = _a.removeEmptyObjects, removeEmptyStrings = _a.removeEmptyStrings, validate = _a.validate;
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

exports.arrCross = arrCross;
exports.arrDiff = arrDiff;
exports.arrUnion = arrUnion;
exports.hasKey = hasKey;
exports.objFlush = objFlush;
exports.objPick = objPick;
exports.objSanitize = objSanitize;
exports.toSnakeCase = toSnakeCase;
//# sourceMappingURL=index.js.map
