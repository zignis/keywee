import toFixed from './toFixed';

describe('unit: toFixed', () => {
  it('rounds a float to two decimal places', () => {
    expect(toFixed(Math.PI, 2)).toBe(3.14);
  });
});
