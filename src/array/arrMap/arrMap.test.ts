import arrMap from './arrMap';

describe('unit: arrMap', () => {
  it('creates a new array using a callback function', () => {
    expect(
      arrMap([1, 2, 3], function (element) {
        return element * 2;
      }),
    ).toEqual([2, 4, 6]);
  });
});
