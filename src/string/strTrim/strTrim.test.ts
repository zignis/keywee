import strTrim from './strTrim';

describe('unit: strTrim', () => {
  it('removes the whitespace from both ends of the string', () => {
    expect(strTrim(' string ')).toBe('string');
  });

  it('removes the leading whitespace from the string', () => {
    expect(strTrim(' string')).toBe('string');
  });

  it('removes the trailing whitespace from the string', () => {
    expect(strTrim('string ')).toBe('string');
  });

  it('preserves whitespace in between the strings', () => {
    expect(strTrim(' foo bar ')).toBe('foo bar');
  });
});
