/*!
 * keywee v1.2.1
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
};

/**
 * Deletes a key, an arrays of keys or all keys from an object.
 * @example
 * ```ts
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
 * ```
 * @param {Object} obj Source object.
 * @param {any | any[]} [keys] The key or an array of keys to remove.
 *
 * @returns {Boolean} Resultant object.
 */
var objFlush = function (obj, keys) {
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
};

/**
 * Returns an array of keys of an object.
 * @example
 * ```ts
 * const obj = {
 *   "foo": true,
 *   "bar": false,
 * };
 *
 * objKeys(obj);
 * => ['foo', 'bar']
 * ```
 * @param {Object} obj Source object.
 *
 * @returns {Array} Keys of the object.
 */
var objKeys = function (obj) {
    var keys = [];
    for (var key in obj) {
        if (hasKey(obj, key)) {
            keys.push(key);
        }
    }
    return keys;
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
            if (!hasKey(object, key))
                continue;
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
var objValues = function (obj) {
    var values = [];
    for (var key in obj) {
        if (hasKey(obj, key)) {
            values.push(obj[key]);
        }
    }
    return values;
};

/**
 * Converts a string to snake_case.
 * @example
 * ```ts
 * snakeCase('camelCase');
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
var snakeCase = function (input, options) {
    var separator = (options || {}).separator;
    var match = input.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g);
    return match
        ? match.map(function (chunk) { return chunk.toLowerCase(); }).join(separator || '_')
        : input;
};

exports.arrCross = arrCross;
exports.arrDiff = arrDiff;
exports.arrUnion = arrUnion;
exports.hasKey = hasKey;
exports.objFlush = objFlush;
exports.objKeys = objKeys;
exports.objPick = objPick;
exports.objSanitize = objSanitize;
exports.objValues = objValues;
exports.snakeCase = snakeCase;
//# sourceMappingURL=index.cjs.map
