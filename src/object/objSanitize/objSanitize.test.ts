import objSanitize from './objSanitize';

const sampleObj = {
  dob: { age: undefined, date: '1972-04-18T14:50:40.152Z' },
  gender: 'male',
  location: {
    country: 'Canada',
    state: '',
    street: { name: 'Concession Road 23', number: null },
  },
  name: { first: 'Zachary', last: undefined, title: 'Mr' },
  nat: null,
  phone: '',
  registered: { age: 4, date: '2017-11-02T20:15:10.481Z' },
};

describe('unit: objSanitize', () => {
  it('sanitizes an object', () => {
    expect(objSanitize(sampleObj)).toEqual({
      dob: { date: '1972-04-18T14:50:40.152Z' },
      gender: 'male',
      location: {
        country: 'Canada',
        state: '',
        street: { name: 'Concession Road 23' },
      },
      name: { first: 'Zachary', title: 'Mr' },
      phone: '',
      registered: { age: 4, date: '2017-11-02T20:15:10.481Z' },
    });
  });

  it('sanitizes an object with custom validator', () => {
    expect(
      objSanitize(sampleObj, {
        validate: (value) => typeof value !== 'string',
      }),
    ).toEqual({
      dob: {},
      location: {
        street: {},
      },
      name: {},
      registered: {
        age: 4,
      },
    });
  });

  it('sanitizes an object and removes empty strings', () => {
    expect(
      objSanitize(
        {
          bar: '',
          baz: ' ',
          foo: true,
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
          bar: {},
          foo: true,
        },
        { removeEmptyObjects: true },
      ),
    ).toEqual({
      foo: true,
    });
  });
});
