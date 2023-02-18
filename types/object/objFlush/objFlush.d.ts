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
export declare const objFlush: <Type extends Record<string | number | symbol, unknown>, Key extends keyof Type>(a: Type, keys?: Key | Key[] | undefined) => Partial<Type>;
export { objFlush as objectFlush };
//# sourceMappingURL=objFlush.d.ts.map