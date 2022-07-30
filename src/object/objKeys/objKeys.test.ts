import objKeys from './objKeys';

describe('unit: objKeys', () => {
  it('returns an array of keys of an object', () => {
    expect(objKeys({ bar: false, foo: true })).toEqual(['bar', 'foo']);
  });
});
