import { arrProd } from './arrProd';

describe('unit: arrProd', () => {
  it('returns the product of elements of an array', () => {
    expect(arrProd([2, 4, 8])).toBe(64);
  });
});
