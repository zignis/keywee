import objEqual from './objEqual';

describe('unit: objEqual', () => {
  it('returns true for similar objects', () => {
    expect(
      objEqual({ bar: false, foo: true }, { bar: false, foo: true }),
    ).toBeTruthy();
  });

  it('returns false for distinct objects', () => {
    expect(objEqual({ bar: false, foo: true }, { baz: null })).toBeFalsy();
  });
});
