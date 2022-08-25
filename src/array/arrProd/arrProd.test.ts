import arrProd from './arrProd';

describe('unit: arrProd', () => {
  it('returns the product of the elements of a numeric array', () => {
    expect(arrProd([2, 4, 8])).toBe(64);
  });
});
