import { strCap } from './strCap';

describe('unit: strCap', () => {
  it('capitalizes a phrase', () => {
    expect(strCap('lower case string')).toEqual('Lower case string');
  });

  it('capitalizes a phrase with single letter', () => {
    expect(strCap('a')).toEqual('A');
  });
});
