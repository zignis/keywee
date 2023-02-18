declare type ArrayElement<ArrayType extends unknown[]> = ArrayType[number];
/**
 * Removes one or more elements from an array
 *
 * @example
 * arrEject([1, 2, 3, 4], 2);
 * => [1, 3, 4]
 *
 * @param a - An array
 * @param elements - A single element or an array of elements to eject
 * @param mutate - Whether to mutate the original array
 */
export declare const arrEject: <Type extends unknown[]>(a: unknown[], elements: ArrayElement<Type> | ArrayElement<Type>[], mutate?: boolean) => Type;
export { arrEject as arrayEject, arrEject as arrayDelete };
//# sourceMappingURL=arrEject.d.ts.map