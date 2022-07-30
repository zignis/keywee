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
declare const objFlush: <Type extends Record<any, any>, Key extends keyof Type>(obj: Type, keys?: Key | Key[] | undefined) => Partial<Type>;
export default objFlush;
//# sourceMappingURL=objFlush.d.ts.map