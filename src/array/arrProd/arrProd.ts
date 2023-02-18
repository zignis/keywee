/**
 * Returns the product of elements of an array
 *
 * @example
 * arrProd([2, 4, 8]);
 * => 64
 *
 * @param a - A numeric array
 */
export const arrProd = (a: number[]): number =>
  a.reduce((previousValue, currentValue) => previousValue * currentValue, 1);

export { arrProd as arrayProd, arrProd as arrayProduct };
