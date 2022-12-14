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
export default function hasKey<Type extends Record<any, any>, Key extends keyof Type>(obj: Type, keys: Key | Key[]): boolean;
//# sourceMappingURL=hasKey.d.ts.map