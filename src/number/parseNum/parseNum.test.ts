import { parseNum } from './parseNum';

describe('unit: parseNum', () => {
  it('parses an integer string', () => {
    expect(parseNum('0')).toEqual(0);
    expect(parseNum('5')).toEqual(5);
    expect(parseNum('5.')).toEqual(5);
    expect(parseNum('1e3')).toEqual(1000);

    expect(parseNum('0', true)).toEqual(0);
    expect(parseNum('5', true)).toEqual(5);
    expect(parseNum('5.', true)).toEqual(5);
    expect(parseNum('1e3', true)).toEqual(1000);
  });

  it('parses a floating string', () => {
    expect(parseNum('0.5')).toEqual(0.5);

    expect(parseNum('0.5', true)).toEqual(0.5);
  });

  it('returns the original value when it cannot be casted to a number', () => {
    expect(parseNum('')).toEqual('');
    expect(parseNum(' ')).toEqual(' ');
    expect(parseNum('a')).toEqual('a');
    expect(parseNum('5m')).toEqual('5m');
  });

  it('returns null value when the returnNull option is enabled and the value cannot be casted to a number', () => {
    expect(parseNum('', true)).toBeNull();
    expect(parseNum('5m', true)).toBeNull();
  });
});
