/**
 * Converts a string to an integer or a floating value
 *
 * @example
 * parseNum('64');
 * => 64
 *
 * parseNum('2.14');
 * => 2.14
 *
 * @param value - The string to parse
 * @param returnNull - Whether to return null if the input cannot be parsed to a number
 */
export declare const parseNum: <ReturnType_1 extends boolean = false>(value: string | number, returnNull?: ReturnType_1 | undefined) => ReturnType_1 extends false ? string | number : number | null;
export { parseNum as parseNumber, parseNum as toNumber };
//# sourceMappingURL=parseNum.d.ts.map