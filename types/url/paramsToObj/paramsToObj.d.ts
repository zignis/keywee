import type { URLSearchParams } from 'url';
/**
 * Converts url parameters to object
 *
 * @example
 * paramsToObj(new URLSearchParams("?foo=bar&bar=doe&foo=5&john=null"));
 * => {
 *   foo: ["bar", "5"],
 *   bar: "doe",
 *   john: "null"
 * }
 *
 * paramsToObj(
 *   new URLSearchParams('?foo=5&bar=null', {
 *     parseNulls: true,
 *     parseNumbers: true,
 *   }),
 * );
 * => {
 *   foo: 5,
 *   bar: null
 * }
 *
 * @param params - Search params
 * @param options - Optional options
 * @param options.parseNumbers - Whether to parse numeric string parameter values
 * @param options.parseNulls - Whether to parse null string parameter values
 */
export declare const paramsToObj: <Type = any>(params: URLSearchParams, options?: {
    parseNulls?: boolean;
    parseNumbers?: boolean;
}) => Type;
//# sourceMappingURL=paramsToObj.d.ts.map