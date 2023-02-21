/*!
 * KeyWee v1.11.2
 * (c) zignis (https://github.com/zignis/keywee)
 * Released under the MIT License.
 */

'use strict';

/**
 * Splits a parent array into smaller chunks
 *
 * @example
 * arrChunks([1, 2, 3, 4], 2);
 * => [[1, 2], [3, 4]]
 *
 * @param a - An array
 * @param size - Individual chunk size
 */
var arrChunks = function (a, size) {
    var chunks = [];
    for (var i = 0; i < a.length; i += size) {
        chunks.push(a.slice(i, i + size));
    }
    return chunks;
};

/**
 * Returns the common elements from two arrays
 *
 * @example
 * arrCross([1, 2, 3, 4], [2, 3]);
 * => [2, 3]
 *
 * @param a - First array
 * @param b - Second array
 */
var arrCross = function (a, b) { return a.filter(function (element) { return b.indexOf(element) !== -1; }); };

/**
 * Returns elements from the first array that are not present in the second array
 *
 * @example
 * arrDiff([1, 2, 3, 4], [2, 3]);
 * => [1, 4]
 *
 * @param a - First array
 * @param b - Second array
 */
var arrDiff = function (a, b) { return a.filter(function (element) { return b.indexOf(element) === -1; }); };

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

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var ejectElement = function (element, array) {
    var index = array.indexOf(element);
    if (index > -1) {
        array.splice(index, 1);
    }
};
/**
 * Removes one or more elements from an array
 *
 * @example
 * arrEject([1, 2, 3, 4], 2);
 * => [1, 3, 4]
 *
 * @param a - An array
 * @param elements - A single element or an array of elements to eject
 * @param mutate - Whether to mutate the original array
 */
var arrEject = function (a, elements, mutate) {
    var e_1, _a;
    if (mutate === void 0) { mutate = true; }
    var operand = mutate ? a : __spreadArray([], __read(a), false);
    if (Array.isArray(elements)) {
        try {
            for (var elements_1 = __values(elements), elements_1_1 = elements_1.next(); !elements_1_1.done; elements_1_1 = elements_1.next()) {
                var element = elements_1_1.value;
                ejectElement(element, operand);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (elements_1_1 && !elements_1_1.done && (_a = elements_1.return)) _a.call(elements_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
    }
    else {
        ejectElement(elements, operand);
    }
    return operand;
};

/**
 * Returns the product of elements of an array
 *
 * @example
 * arrProd([2, 4, 8]);
 * => 64
 *
 * @param a - A numeric array
 */
var arrProd = function (a) {
    return a.reduce(function (previousValue, currentValue) { return previousValue * currentValue; }, 1);
};

/**
 * Returns the sum of elements of an array
 *
 * @example
 * arrSum([1, 2, 3]);
 * => 6
 *
 * @param a - A numeric array
 */
var arrSum = function (a) {
    return a.reduce(function (previousValue, currentValue) { return previousValue + currentValue; }, 0);
};

/**
 * Returns a unique union of elements of two arrays
 *
 * @example
 * arrUnion([1, 2, 3, 4, 5], [1, 3, 5, 7]);
 * => [1, 2, 3, 4, 5, 7]
 *
 * @param a - First array
 * @param b - Second array
 */
var arrUnion = function (a, b) { return __spreadArray([], __read(new Set(__spreadArray(__spreadArray([], __read(a), false), __read(b), false))), false); };

/**
 * Clamps a number to bounds
 *
 * @example
 * clamp(0, 64, 32);
 * => 32
 *
 * @param min - The lower bound
 * @param value - Un-clamped value
 * @param max - The upper bound
 */
var clamp = function (min, value, max) {
    return Math.min(Math.max(value, min), max);
};

/**
 * Returns the dot product of two vectors
 *
 * @example
 * vecDot([1, 2], [3, 4]);
 * => 11
 *
 * @param a - First vector
 * @param b - Second vector
 */
var vecDot = function (a, b) {
    return a
        .map(function (_, index) { return (a[index] || 0) * (b[index] || 0); })
        .reduce(function (previousValue, currentValue) { return previousValue + currentValue; });
};

/**
 * Returns the magnitude of a vector
 *
 * @example
 * vecMag([3, 4]);
 * => 5
 *
 * @param a - A vector
 */
var vecMag = function (a) { return Math.sqrt(vecDot(a, a)); };

var defaultAbbreviations = ['', 'k', 'M', 'B', 'T', 'P', 'E'];
/**
 * Abbreviates a number
 *
 * @example
 * numAbbr(1e3);
 * => "1k"
 *
 * @param a - A number
 * @param suppliedAbbreviations - Optional custom abbreviations
 */
var numAbbr = function (a, suppliedAbbreviations) {
    var abbreviations = suppliedAbbreviations || defaultAbbreviations;
    var positive = Math.sign(a) >= 0;
    a = Math.abs(a);
    var level = (Math.log10(a) / 3) | 0;
    if (level == 0) {
        return "".concat(!positive ? '-' : '').concat(a);
    }
    var abbreviation = abbreviations[level];
    if (!abbreviation) {
        throw new RangeError('Number out of range');
    }
    var result = String(Number((a / Math.pow(10, level * 3)).toFixed(1)));
    return "".concat(!positive ? '-' : '').concat(result).concat(abbreviation);
};

var defaultOrdinals = ['th', 'st', 'nd', 'rd'];
/**
 * Suffixes an ordinal to a number
 *
 * @example
 * numOrd(10);
 * => "10th"
 *
 * @param a - A number
 * @param suppliedOrdinals - Optional custom ordinals
 * @see https://gist.github.com/jlbruno/1535691/db35b4f3af3dcbb42babc01541410f291a8e8fac
 */
var numOrd = function (a, suppliedOrdinals) {
    var ordinals = suppliedOrdinals || defaultOrdinals;
    var index = a % 100;
    return (a + (ordinals[(index - 20) % 10] || ordinals[index] || ordinals[0] || ''));
};

/**
 * Converts a string to an integer or a floating value
 *
 * @example
 * parseNum('64');
 * => 64
 *
 * parseNum('2.14');
 * => 2.14
 *
 * @param value - The string to parse
 * @param returnNull - Whether to return null if the input cannot be parsed to a number
 */
var parseNum = function (value, returnNull) {
    return Number.isNaN(Number(value)) || Number.isNaN(Number.parseInt('' + value))
        ? returnNull
            ? null
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                value
        : +('' + value);
};

/**
 * Checks if a key or an array of keys exists on an object
 *
 * @example
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
 * @param a - An object
 * @param keys - The keys to check
 */
var hasKey = function (a, keys) {
    var hasKeys = true;
    if (Array.isArray(keys)) {
        var i = keys.length;
        while (i--) {
            if (!hasKey(a, keys[i])) {
                hasKeys = false;
                break;
            }
        }
    }
    else {
        if (!Object.prototype.hasOwnProperty.call(a, keys)) {
            hasKeys = false;
        }
    }
    return hasKeys;
};

// TODO: Implement deep comparison
/**
 * Compares two objects for equality
 *
 * @example
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => true
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: false });
 * => false
 *
 * @param a - First object
 * @param b - Second object
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
var objEqual = function (a, b) {
    if (typeof a == 'object' && a != null && typeof b == 'object' && b != null) {
        if (Object.keys(a).length - Object.keys(b).length !== 0) {
            return false;
        }
        for (var objKey in a) {
            if (!(objKey in b) || !objEqual(a[objKey], b[objKey])) {
                return false;
            }
        }
        for (var relObjKey in b) {
            if (!(relObjKey in a) || !objEqual(b[relObjKey], a[relObjKey])) {
                return false;
            }
        }
        return true;
    }
    else {
        return a === b;
    }
};

/**
 * Returns an array of identical keys with different values across two objects
 *
 * @example
 * objDiff({ foo: 1, bar: 2 }, { foo: true, bar: 2 });
 * => ['foo']
 *
 * objDiff({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => false
 *
 * @param a - First object
 * @param b - Second object
 */
var objDiff = function (a, b) {
    if (objEqual(a, b)) {
        return false;
    }
    var modifiedKeys = [];
    var keys = Object.keys(a);
    var i = keys.length;
    while (i--) {
        if (hasKey(b, keys[i]) &&
            !objEqual(a[keys[i]], b[keys[i]])) {
            modifiedKeys.push(keys[i]);
        }
    }
    return modifiedKeys.length ? modifiedKeys : false;
};

/**
 * Deletes a single key or multiple keys from an object
 *
 * @example
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
 * @param a - An object
 * @param keys - The key or an array of keys to remove.
 */
var objFlush = function (a, keys) {
    if (!keys) {
        for (var key in a) {
            if (hasKey(a, key)) {
                delete a[key];
            }
        }
    }
    else if (Array.isArray(keys)) {
        var i = keys.length;
        while (i--) {
            if (hasKey(a, keys[i])) {
                delete a[keys[i]];
            }
        }
    }
    else if (hasKey(a, keys)) {
        delete a[keys];
    }
    return a;
};

/**
 * Returns a new object with the specified keys from a source object
 *
 * @example
 * const obj = {
 *   "one": true,
 *   "two": false,
 *   "foo": "bar"
 * };
 *
 * const newObj = objPick(obj, ['two', 'foo']);
 * =>
 * {
 *   "two": false,
 *   "foo": "bar"
 * }
 *
 * @param a - An object
 * @param keys - An array of keys to pick
 * @param options - Optional options
 * @param options.upsert - Whether to create new properties for missing keys
 * @param options.defaultValue - Default value to use when upsert-ing
 */
var objPick = function (a, keys, options) {
    var _a = options || {}, defaultValue = _a.defaultValue, upsert = _a.upsert;
    var newObj = {};
    var i = keys.length;
    while (i--) {
        if (hasKey(a, keys[i])) {
            newObj[keys[i]] = a[keys[i]];
        }
        else if (upsert) {
            newObj[keys[i]] = defaultValue || null;
        }
    }
    return newObj;
};

/**
 * Converts a string to snake_case
 *
 * @example
 * snakeCase("camelCase");
 * => "camel_case"
 *
 * @param a - A string
 * @param separator - An optional separator to use instead of underscore
 */
var snakeCase = function (a, separator) {
    var matches = a.match(/[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g);
    return matches
        ? matches.map(function (chunk) { return chunk.toLowerCase(); }).join(separator || '_')
        : a;
};

/**
 * Capitalizes the first letter of a phrase
 *
 * @example
 * strCap("lower case");
 * => "Lower case"
 *
 * @param a - A string
 */
var strCap = function (a) {
    return a.charAt(0).toUpperCase() + a.slice(1);
};

/**
 * Truncates a long string
 *
 * @example
 * strTrunc("A very long string", 5);
 * => "A very..."
 *
 * @param a - A long string
 * @param limit - Limit of characters
 * @param delimiter - Optional delimiter (terminating suffix)
 */
var strTrunc = function (a, limit, delimiter) {
    if (delimiter === void 0) { delimiter = '...'; }
    return a.length > limit ? "".concat(a.substring(0, limit + 1)).concat(delimiter) : a;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Converts url parameters to object
 *
 * @example
 * paramsToObj(new URLSearchParams("?foo=bar&bar=doe&foo=5&john=null"));
 * => {
 *   foo: ["bar", "5"],
 *   bar: "doe",
 *   john: "null"
 * }
 *
 * paramsToObj(
 *   new URLSearchParams('?foo=5&bar=null', {
 *     parseNulls: true,
 *     parseNumbers: true,
 *   }),
 * );
 * => {
 *   foo: 5,
 *   bar: null
 * }
 *
 * @param params - Search params
 * @param options - Optional options
 * @param options.parseNumbers - Whether to parse numeric string parameter values
 * @param options.parseNulls - Whether to parse null string parameter values
 */
var paramsToObj = function (params, options) {
    var iterator = params.entries();
    var object = {};
    for (var itr = iterator.next(); !itr.done; itr = iterator.next()) {
        var _a = __read(itr.value, 2), key = _a[0], rawValue = _a[1];
        var value = (options === null || options === void 0 ? void 0 : options.parseNulls) && rawValue === 'null'
            ? null
            : (options === null || options === void 0 ? void 0 : options.parseNumbers)
                ? parseNum(rawValue)
                : rawValue;
        if (object[key]) {
            if (Array.isArray(object[key])) {
                object[key].push(value);
            }
            else {
                object[key] = [object[key], value];
            }
        }
        else {
            object[key] = value;
        }
    }
    return object;
};

exports.arrChunks = arrChunks;
exports.arrCross = arrCross;
exports.arrDiff = arrDiff;
exports.arrEject = arrEject;
exports.arrProd = arrProd;
exports.arrSum = arrSum;
exports.arrUnion = arrUnion;
exports.arrayChunks = arrChunks;
exports.arrayCross = arrCross;
exports.arrayDelete = arrEject;
exports.arrayDiff = arrDiff;
exports.arrayDifference = arrDiff;
exports.arrayEject = arrEject;
exports.arrayIntersect = arrCross;
exports.arrayMerge = arrUnion;
exports.arrayProd = arrProd;
exports.arrayProduct = arrProd;
exports.arraySum = arrSum;
exports.arrayToChunks = arrChunks;
exports.arrayUnion = arrUnion;
exports.clamp = clamp;
exports.defaultAbbreviations = defaultAbbreviations;
exports.defaultOrdinals = defaultOrdinals;
exports.hasKey = hasKey;
exports.numAbbr = numAbbr;
exports.numAbbreviate = numAbbr;
exports.numOrd = numOrd;
exports.numOrdinal = numOrd;
exports.numberAbbreviate = numAbbr;
exports.numberOrd = numOrd;
exports.numberOrdinal = numOrd;
exports.objDiff = objDiff;
exports.objDifference = objDiff;
exports.objEqual = objEqual;
exports.objFlush = objFlush;
exports.objHasKey = hasKey;
exports.objPick = objPick;
exports.objectDiff = objDiff;
exports.objectDifference = objDiff;
exports.objectEqual = objEqual;
exports.objectFlush = objFlush;
exports.objectHasKey = hasKey;
exports.objectPick = objPick;
exports.paramsToObj = paramsToObj;
exports.paramsToObject = paramsToObj;
exports.parseNum = parseNum;
exports.parseNumber = parseNum;
exports.snakeCase = snakeCase;
exports.strCap = strCap;
exports.strCapitalize = strCap;
exports.strTrunc = strTrunc;
exports.strTruncate = strTrunc;
exports.stringCap = strCap;
exports.stringCapitalize = strCap;
exports.stringTrunc = strTrunc;
exports.stringTruncate = strTrunc;
exports.toNumber = parseNum;
exports.toSnakeCase = snakeCase;
exports.vecDot = vecDot;
exports.vecMag = vecMag;
exports.vectorDot = vecDot;
exports.vectorMag = vecMag;
//# sourceMappingURL=index.cjs.map
