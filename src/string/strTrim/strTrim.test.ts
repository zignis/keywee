import strTrim from './strTrim';

describe('unit: strTrim', () => {
  it('removes the whitespace from both ends of the string', () => {
    expect(strTrim(' string ')).toBe('string');
  });
});
