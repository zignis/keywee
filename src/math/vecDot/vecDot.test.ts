import vecDot from './vecDot';

describe('unit: vecDot', () => {
  it('returns the dot product of two vectors', () => {
    expect(vecDot([1, 2], [3, 4])).toBe(11);
  });
});
