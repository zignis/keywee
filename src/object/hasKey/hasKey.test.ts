import { hasKey } from './hasKey';

describe('unit: hasKey', () => {
  it('checks for a valid key', () => {
    expect(hasKey({ bar: false, foo: true }, 'foo')).toBeTruthy();
  });

  it('checks for an array of valid keys', () => {
    expect(hasKey({ bar: false, foo: true }, ['foo', 'bar'])).toBeTruthy();
  });

  it('checks for an invalid key', () => {
    // @ts-expect-error Intentional
    expect(hasKey({ bar: false }, 'foo')).toBeFalsy();
  });

  it('checks for invalid keys', () => {
    expect(
      // @ts-expect-error Intentional
      hasKey({ bar: false, foo: true }, ['foo', 'one']),
    ).toBeFalsy();
  });
});
