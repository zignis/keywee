import { arrDiff } from './arrDiff';

describe('unit: arrDiff', () => {
  it('picks distinct elements from two arrays', () => {
    expect(arrDiff<number[]>([1, 2, 3, 4, 5], [1, 3, 5])).toEqual([2, 4]);
  });
});
