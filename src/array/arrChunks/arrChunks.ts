/**
 * Splits a parent array into smaller chunks
 *
 * @example
 * arrChunks([1, 2, 3, 4], 2);
 * => [[1, 2], [3, 4]]
 *
 * @param a - An array
 * @param size - Individual chunk size
 */
export const arrChunks = <Type extends unknown[]>(
  a: Type,
  size: number,
): Type[] => {
  const chunks: Type[] = [];

  for (let i = 0; i < a.length; i += size) {
    chunks.push(a.slice(i, i + size) as Type);
  }

  return chunks;
};
