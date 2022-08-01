import arrIndex from './arrIndex';

describe('unit: arrIndex', () => {
  it('returns the index of an element in the array', () => {
    expect(arrIndex([1, 2, 3], 2)).toBe(1);
  });

  it('returns -1 for a non-existent element in the array', () => {
    expect(arrIndex([1, 2, 3], 5)).toBe(-1);
  });
});
