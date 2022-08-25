import arrSum from './arrSum';

describe('unit: arrSum', () => {
  it('returns the sum of the elements of a numeric array', () => {
    expect(arrSum([1, 2, 3])).toBe(6);
  });
});
