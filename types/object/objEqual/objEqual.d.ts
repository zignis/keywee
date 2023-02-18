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
export declare const objEqual: <Type extends Record<string | number | symbol, any>>(a: Type, b: Type) => boolean;
export { objEqual as objectEqual };
//# sourceMappingURL=objEqual.d.ts.map