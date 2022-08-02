import objDiff from './objDiff';

describe('unit: objDiff', () => {
  it('returns an array of similar keys with distinct values', () => {
    expect(
      objDiff({ bar: false, foo: true }, { bar: true, foo: true }),
    ).toEqual(['bar']);
  });

  it('returns false for intact objects', () => {
    expect(
      objDiff({ bar: false, foo: true }, { bar: false, foo: true }),
    ).toBeFalsy();
  });
});
