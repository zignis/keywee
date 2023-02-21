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
export const parseNum = <ReturnType extends boolean = false>(
  value: string | number,
  returnNull?: ReturnType,
): ReturnType extends false ? string | number : number | null =>
  Number.isNaN(Number(value)) || Number.isNaN(Number.parseInt('' + value))
    ? returnNull
      ? null
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (value as any)
    : +('' + value);

export { parseNum as parseNumber, parseNum as toNumber };
