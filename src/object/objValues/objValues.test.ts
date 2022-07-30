import objValues from './objValues';

describe('unit: objValues', () => {
  it('returns an array of values of an object', () => {
    expect(objValues({ bar: 'one', foo: true })).toEqual(['one', true]);
  });
});
