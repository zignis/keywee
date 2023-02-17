import { vecMag } from './vecMag';

describe('unit: vecMag', () => {
  it('returns the magnitude of a vector', () => {
    expect(vecMag([3, 4])).toBe(5);
  });
});
