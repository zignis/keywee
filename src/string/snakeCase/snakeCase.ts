/**
 * Converts a string to snake_case
 *
 * @example
 * snakeCase("camelCase");
 * => "camel_case"
 *
 * @param a - A string
 * @param separator - An optional separator to use instead of underscore
 */
export const snakeCase = (a: string, separator?: string): string => {
  const matches = a.match(
    /[A-Z]{2,}(?=[A-Z][a-z]+\d*|\b)|[A-Z]?[a-z]+\d*|[A-Z]|\d+/g,
  );

  return matches
    ? matches.map((chunk) => chunk.toLowerCase()).join(separator || '_')
    : a;
};

export { snakeCase as toSnakeCase };
