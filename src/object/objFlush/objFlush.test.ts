import { objFlush } from './objFlush';

describe('unit: objFlush', () => {
  it('deletes a single key from an object', () => {
    expect(objFlush({ bar: false, foo: true }, 'foo')).toEqual({ bar: false });
  });

  it('deletes an array of keys from an object', () => {
    expect(
      objFlush({ bar: false, baz: 'one', foo: true }, ['foo', 'bar']),
    ).toEqual({
      baz: 'one',
    });
  });

  it('deletes all the keys from an object', () => {
    expect(objFlush({ bar: false, foo: true })).toEqual({});
  });
});
