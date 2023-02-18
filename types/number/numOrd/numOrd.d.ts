export declare const defaultOrdinals: readonly ["th", "st", "nd", "rd"];
/**
 * Suffixes an ordinal to a number
 *
 * @example
 * numOrd(10);
 * => "10th"
 *
 * @param a - A number
 * @param suppliedOrdinals - Optional custom ordinals
 * @see https://gist.github.com/jlbruno/1535691/db35b4f3af3dcbb42babc01541410f291a8e8fac
 */
export declare const numOrd: (a: number, suppliedOrdinals?: string[]) => string;
export { numOrd as numOrdinal, numOrd as numberOrd, numOrd as numberOrdinal };
//# sourceMappingURL=numOrd.d.ts.map