import { objKeys } from '../objKeys';
import objSort from './objSort';

describe('unit: objSort', () => {
  it('returns an object with sorted keys', () => {
    // Use objKeys to check the order of keys alphabetically
    expect(objKeys(objSort({ a: 'one', b: 'three', c: 'two' }))).toEqual(
      objKeys({
        a: 'one',
        b: 'two',
        c: 'three',
      }),
    );
  });
});
