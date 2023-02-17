import { arrChunks } from './arrChunks';

describe('unit: arrChunks', () => {
  it('splits an array with one element into a single chunk', () => {
    expect(arrChunks<number[]>([1], 2)).toEqual([[1]]);
  });

  it('splits an array with even number of elements into chunks', () => {
    expect(arrChunks<number[]>([1, 2, 3, 4], 2)).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it('splits an with odd number of elements array into chunks', () => {
    expect(arrChunks<number[]>([1, 2, 3, 4, 5], 2)).toEqual([
      [1, 2],
      [3, 4],
      [5],
    ]);
  });
});
