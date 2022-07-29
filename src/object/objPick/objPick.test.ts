import objPick from './objPick';

const sampleObj = {
  dob: { age: 50, date: '1972-04-18T14:50:40.152Z' },
  email: 'zachary@example.com',
  gender: 'male',
  location: {
    country: 'Canada',
    state: 'Alberta',
    street: { name: 'Concession Road 23', number: 9151 },
  },
  name: { first: 'Zachary', last: 'Anderson', title: 'Mr' },
  nat: 'CA',
  phone: 'E20 U97-4032',
  registered: { age: 4, date: '2017-11-02T20:15:10.481Z' },
};

describe('unit: objPick', () => {
  it('picks specified keys from an object', () => {
    expect(objPick(sampleObj, ['gender', 'nat'])).toEqual({
      gender: sampleObj['gender'],
      nat: sampleObj['nat'],
    });
  });

  it('upserts missing key', () => {
    expect(objPick(sampleObj, ['nat', 'id'], { upsert: true })).toEqual({
      id: null,
      nat: sampleObj['nat'],
    });
  });

  it('upserts missing key with default value', () => {
    expect(
      objPick(sampleObj, ['nat', 'id'], {
        defaultValue: '99234',
        upsert: true,
      }),
    ).toEqual({
      id: '99234',
      nat: sampleObj['nat'],
    });
  });
});
