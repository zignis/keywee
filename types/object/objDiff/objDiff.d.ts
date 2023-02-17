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
export declare const objDiff: <Type extends Record<string | number | symbol, any>, Key extends keyof Type>(a: Type, b: Type) => false | Key[];
//# sourceMappingURL=objDiff.d.ts.map