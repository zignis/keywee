import { arrEject } from './arrEject';

describe('unit: arrEject', () => {
  it('removes single element from an array', () => {
    expect(arrEject<number[]>([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
  });

  it('removes multiple elements from an array', () => {
    expect(arrEject<number[]>([1, 2, 3, 4, 5], [2, 4])).toEqual([1, 3, 5]);
  });
});
