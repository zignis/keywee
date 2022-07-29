import arrUnion from './arrUnion';

describe('unit: arrUnion', () => {
  it('returns a union of both the arrays', () => {
    expect(arrUnion([1, 2, 3], [1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
