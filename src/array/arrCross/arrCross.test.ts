import { arrCross } from './arrCross';

describe('unit: arrCross', () => {
  it('picks all the intersecting elements from two arrays', () => {
    expect(arrCross<number[]>([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])).toEqual([
      1, 3, 5,
    ]);
  });
});
