import arrDiff from './arrDiff';

describe('unit: arrDiff', () => {
  it(
    [
      'picks distinct elements from the first',
      'array that are not present in the second array',
    ].join(' '),
    () => {
      expect(arrDiff([1, 2, 3, 4, 5], [1, 3, 5])).toEqual([2, 4]);
    },
  );
});
