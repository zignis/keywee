import objPick from './objPick';

const sampleObj = {
  gender: 'male',
  name: { title: 'Mr', first: 'Zachary', last: 'Anderson' },
  location: {
    street: { number: 9151, name: 'Concession Road 23' },
    state: 'Alberta',
    country: 'Canada',
  },
  email: 'zachary@example.com',
  dob: { date: '1972-04-18T14:50:40.152Z', age: 50 },
  registered: { date: '2017-11-02T20:15:10.481Z', age: 4 },
  phone: 'E20 U97-4032',
  nat: 'CA',
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
      nat: sampleObj['nat'],
      id: null,
    });
  });

  it('upserts missing key with default value', () => {
    expect(
      objPick(sampleObj, ['nat', 'id'], {
        upsert: true,
        defaultValue: '99234',
      }),
    ).toEqual({
      nat: sampleObj['nat'],
      id: '99234',
    });
  });
});
