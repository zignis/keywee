/**
 * Compares two objects for equality.
 * @example
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: 2 });
 * => true
 *
 * objEqual({ foo: 1, bar: 2 }, { foo: 1, bar: false });
 * => false
 *
 * @param {Object} obj First object.
 * @param {Object} relObj Second object.
 *
 * @returns {Boolean} A boolean value indicating the similar nature of the two objects.
 */
export default function objEqual<Type extends Record<any, any>>(obj: Type, relObj: Type): boolean;
//# sourceMappingURL=objEqual.d.ts.map