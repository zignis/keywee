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
export declare const hasKey: <Type extends Record<string | number | symbol, unknown>, Key extends keyof Type>(a: Type, keys: Key | Key[]) => boolean;
export { hasKey as objHasKey, hasKey as objectHasKey };
//# sourceMappingURL=hasKey.d.ts.map