import arrReduce from './arrReduce';

describe('unit: arrReduce', () => {
  it('returns the sum of the elements of a numeric array', () => {
    expect(
      arrReduce(
        [1, 2, 3],
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ),
    ).toBe(6);
  });
});
