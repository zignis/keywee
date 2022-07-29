import objSanitize from './sanitize';

const sampleObj = {
  gender: 'male',
  name: { title: 'Mr', first: 'Zachary', last: undefined },
  location: {
    street: { number: null, name: 'Concession Road 23' },
    state: '',
    country: 'Canada',
  },
  dob: { date: '1972-04-18T14:50:40.152Z', age: undefined },
  registered: { date: '2017-11-02T20:15:10.481Z', age: 4 },
  phone: '',
  nat: null,
};

describe('unit: objSanitize', () => {
  it('sanitizes an object', () => {
    expect(objSanitize(sampleObj)).toEqual({
      gender: 'male',
      name: { title: 'Mr', first: 'Zachary' },
      location: {
        street: { name: 'Concession Road 23' },
        state: '',
        country: 'Canada',
      },
      dob: { date: '1972-04-18T14:50:40.152Z' },
      registered: { date: '2017-11-02T20:15:10.481Z', age: 4 },
      phone: '',
    });
  });

  it('sanitizes an object with custom validator', () => {
    expect(
      objSanitize(sampleObj, {
        validate: (value) => typeof value !== 'string',
      }),
    ).toEqual({
      name: {},
      location: {
        street: {},
      },
      dob: {},
      registered: {
        age: 4,
      },
    });
  });

  it('sanitizes an object and removes empty strings', () => {
    expect(
      objSanitize(
        {
          foo: true,
          bar: '',
          baz: ' ',
        },
        { removeEmptyStrings: true },
      ),
    ).toEqual({
      foo: true,
    });
  });

  it('sanitizes an object and removes empty objects', () => {
    expect(
      objSanitize(
        {
          foo: true,
          bar: {},
        },
        { removeEmptyObjects: true },
      ),
    ).toEqual({
      foo: true,
    });
  });
});
