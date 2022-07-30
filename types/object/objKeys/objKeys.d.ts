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
declare const objKeys: <Type extends Record<any, any>>(obj: Type) => (keyof Type)[];
export default objKeys;
//# sourceMappingURL=objKeys.d.ts.map