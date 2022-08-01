import arrFilter from './arrFilter';

describe('unit: arrFilter', () => {
  it('filters an array for even numbers', () => {
    expect(
      arrFilter([1, 2, 3, 4, 5], function (element) {
        return element % 2 === 0;
      }),
    ).toEqual([2, 4]);
  });
});
