import objFlush from './objFlush';

describe('unit: objFlush', () => {
  it('removes a single key from an object', () => {
    expect(objFlush({ bar: false, foo: true }, 'foo')).toEqual({ bar: false });
  });

  it('removes an array of keys from an object', () => {
    expect(
      objFlush({ bar: false, baz: 'one', foo: true }, ['foo', 'bar']),
    ).toEqual({
      baz: 'one',
    });
  });

  it('removes all keys from an object', () => {
    expect(objFlush({ bar: false, foo: true })).toEqual({});
  });
});
