import hasKey from './hasKey';

describe('unit: hasKey', () => {
  it('checks for a valid key', () => {
    expect(hasKey({ foo: true, bar: false }, 'foo')).toBeTruthy();
  });

  it('checks for valid keys', () => {
    expect(hasKey({ bar: false, foo: true }, ['foo', 'bar'])).toBeTruthy();
  });

  it('checks for an invalid key', () => {
    // Suppress TS key warning
    expect(hasKey({ bar: false } as any, 'foo')).toBeFalsy();
  });

  it('checks for invalid keys', () => {
    // Suppress TS key warning
    expect(
      hasKey({ bar: false, foo: true } as any, ['foo', 'one']),
    ).toBeFalsy();
  });
});
