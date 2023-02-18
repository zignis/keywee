export declare const defaultAbbreviations: readonly ["", "k", "M", "B", "T", "P", "E"];
/**
 * Abbreviates a number
 *
 * @example
 * numAbbr(1e3);
 * => "1k"
 *
 * @param a - A number
 * @param suppliedAbbreviations - Optional custom abbreviations
 */
export declare const numAbbr: (a: number, suppliedAbbreviations?: string[]) => string;
export { numAbbr as numAbbreviate, numAbbr as numberAbbreviate };
//# sourceMappingURL=numAbbr.d.ts.map