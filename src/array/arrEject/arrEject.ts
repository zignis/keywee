type ArrayElement<ArrayType extends unknown[]> = ArrayType[number];

const ejectElement = (element: unknown, array: unknown[]): void => {
  const index = array.indexOf(element);

  if (index > -1) {
    array.splice(index, 1);
  }
};

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
export const arrEject = <Type extends unknown[]>(
  a: unknown[],
  elements: ArrayElement<Type> | ArrayElement<Type>[],
  mutate = true,
): Type => {
  const operand = mutate ? a : [...a];

  if (Array.isArray(elements)) {
    for (const element of elements) {
      ejectElement(element, operand);
    }
  } else {
    ejectElement(elements, operand);
  }

  return operand as Type;
};

export { arrEject as arrayEject, arrEject as arrayDelete };
