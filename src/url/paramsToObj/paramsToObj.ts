/* eslint-disable @typescript-eslint/no-explicit-any */

import type { URLSearchParams } from 'url';
import { parseNum } from '../../number';

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
export const paramsToObj = <Type = any>(
  params: URLSearchParams,
  options?: {
    parseNulls?: boolean;
    parseNumbers?: boolean;
  },
): Type => {
  const iterator = params.entries();
  const object: any = {};

  for (let itr = iterator.next(); !itr.done; itr = iterator.next()) {
    const [key, rawValue] = itr.value;
    const value =
      options?.parseNulls && rawValue === 'null'
        ? null
        : options?.parseNumbers
        ? parseNum(rawValue)
        : rawValue;

    if (object[key]) {
      if (Array.isArray(object[key])) {
        object[key].push(value);
      } else {
        object[key] = [object[key], value];
      }
    } else {
      object[key] = value;
    }
  }

  return object as Type;
};
