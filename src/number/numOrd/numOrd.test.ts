import { defaultOrdinals, numOrd } from './numOrd';

const fixtures = (ordinals: string[]): [number, string][] => [
  [0, `0${ordinals[0]}`],
  [1, `1${ordinals[1]}`],
  [2, `2${ordinals[2]}`],
  [3, `3${ordinals[3]}`],
  [4, `4${ordinals[0]}`],
  [11, `11${ordinals[0]}`],
  [12, `12${ordinals[0]}`],
  [13, `13${ordinals[0]}`],
  [14, `14${ordinals[0]}`],
  [21, `21${ordinals[1]}`],
  [22, `22${ordinals[2]}`],
  [23, `23${ordinals[3]}`],
  [24, `24${ordinals[0]}`],
];

describe('unit: numOrd', () => {
  test.each(fixtures(defaultOrdinals as unknown as string[]))(
    'suffixes an appropriate ordinal (%s) to %d',
    (num, expected) => {
      expect(numOrd(num)).toEqual(expected);
    },
  );

  test.each(fixtures(['a', 'b', 'c', 'd']))(
    'suffixes a custom ordinal (%s) to %d',
    (num, expected) => {
      expect(numOrd(num, ['a', 'b', 'c', 'd'])).toEqual(expected);
    },
  );
});
