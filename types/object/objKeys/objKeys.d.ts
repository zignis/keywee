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
export default function objKeys<Type extends Record<any, any>>(obj: Type): Array<keyof Type>;
//# sourceMappingURL=objKeys.d.ts.map