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
export declare const objPick: <Type extends Record<string | number | symbol, unknown>, Key extends keyof Type>(a: Type, keys: Key[] | string[], options?: {
    defaultValue?: unknown;
    upsert?: boolean;
} | undefined) => Record<string | Key, Type[keyof Type]>;
//# sourceMappingURL=objPick.d.ts.map