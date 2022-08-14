import clamp from './clamp';

describe('unit: clamp', () => {
  it('clamps to the lower boundary', () => {
    expect(clamp(50, 25, 100)).toBe(50);
  });

  it('value remains unchanged when it lies in the specified range', () => {
    expect(clamp(25, 50, 100)).toBe(50);
  });

  it('clamps to the upper boundary', () => {
    expect(clamp(50, 125, 100)).toBe(100);
  });
});
