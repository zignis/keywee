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
declare const objFlush: <Type extends Record<any, any>, Key extends keyof Type>(obj: Type, keys: Key | Key[]) => Partial<Type>;
export default objFlush;
//# sourceMappingURL=objFlush.d.ts.map