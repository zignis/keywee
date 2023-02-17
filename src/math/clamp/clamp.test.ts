import { clamp } from './clamp';

describe('unit: clamp', () => {
  it('clamps to the lower bound', () => {
    expect(clamp(50, 25, 100)).toBe(50);
  });

  it('skips when the value is between the bounds', () => {
    expect(clamp(25, 50, 100)).toBe(50);
  });

  it('clamps to the upper bound', () => {
    expect(clamp(50, 125, 100)).toBe(100);
  });
});
