import { strTrunc } from './strTrunc';

describe('unit: strTrunc', () => {
  it('truncates an overflowing string', () => {
    expect(strTrunc('A very long string', 5)).toEqual('A very...');
  });

  it('skips an under-flowing string', () => {
    expect(strTrunc('A short string', 100)).toEqual('A short string');
  });

  it('truncates string with custom delimiter', () => {
    expect(strTrunc('A very long string', 5, '_')).toEqual('A very_');
  });
});
