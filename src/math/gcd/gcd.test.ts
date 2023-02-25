import { gcd } from './gcd';

describe('unit: gcd', () => {
  it('returns the gcd of two numbers', () => {
    expect(gcd(24, 12)).toEqual(12);
    expect(gcd(7, 3)).toEqual(1);
  });
});
