import arrEject from './arrEject';

describe('unit: arrEject', () => {
  it('removes specified elements from an array', () => {
    expect(arrEject([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 4, 5]);
  });
});
