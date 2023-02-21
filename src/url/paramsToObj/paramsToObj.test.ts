import { URLSearchParams } from 'url';
import { paramsToObj } from './paramsToObj';

describe('unit: paramsToObject', () => {
  it('parses url parameters', () => {
    expect(paramsToObj(new URLSearchParams('?foo=bar'))).toEqual({
      foo: 'bar',
    });

    expect(paramsToObj(new URLSearchParams('?foo=bar&baz=5'))).toEqual({
      baz: '5',
      foo: 'bar',
    });

    expect(paramsToObj(new URLSearchParams('?foo=bar&foo=baz'))).toEqual({
      foo: ['bar', 'baz'],
    });

    expect(
      paramsToObj(new URLSearchParams('?foo=bar&baz=null&john=5&foo=doe')),
    ).toEqual({
      baz: 'null',
      foo: ['bar', 'doe'],
      john: '5',
    });
  });

  it('parses numeric strings in url parameters', () => {
    expect(
      paramsToObj(new URLSearchParams('?foo=5'), { parseNumbers: true }),
    ).toEqual({
      foo: 5,
    });

    expect(
      paramsToObj(new URLSearchParams('?foo=bar&foo=5'), {
        parseNumbers: true,
      }),
    ).toEqual({
      foo: ['bar', 5],
    });
  });

  it('parses null strings in url parameters', () => {
    expect(
      paramsToObj(new URLSearchParams('?foo=null&baz=5'), { parseNulls: true }),
    ).toEqual({
      baz: '5',
      foo: null,
    });

    expect(
      paramsToObj(new URLSearchParams('?foo=5&foo=null'), {
        parseNulls: true,
      }),
    ).toEqual({
      foo: ['5', null],
    });
  });

  it('parses both numeric and null strings at the same time in url parameters', () => {
    expect(
      paramsToObj(new URLSearchParams('?foo=null&baz=5'), {
        parseNulls: true,
        parseNumbers: true,
      }),
    ).toEqual({
      baz: 5,
      foo: null,
    });

    expect(
      paramsToObj(new URLSearchParams('?foo=5&foo=null&baz=john'), {
        parseNulls: true,
        parseNumbers: true,
      }),
    ).toEqual({
      baz: 'john',
      foo: [5, null],
    });
  });
});
