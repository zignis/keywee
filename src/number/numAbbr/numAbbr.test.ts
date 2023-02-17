import { defaultAbbreviations, numAbbr } from './numAbbr';

const fixtures = (abbreviations: string[]): [number, string][] => [
  [0, `0${abbreviations[0]}`],
  [5, `5${abbreviations[0]}`],
  [10, `10${abbreviations[0]}`],
  [1e2, `100${abbreviations[0]}`],
  [1e3, `1${abbreviations[1]}`],
  [1600, `1.6${abbreviations[1]}`],
  [12e3, `12${abbreviations[1]}`],
  [10e4, `100${abbreviations[1]}`],
  [10e5, `1${abbreviations[2]}`],
  [10e6, `10${abbreviations[2]}`],
  [10e7, `100${abbreviations[2]}`],
  [10e8, `1${abbreviations[3]}`],
  [10e9, `10${abbreviations[3]}`],
  [10e10, `100${abbreviations[3]}`],
  [10e11, `1${abbreviations[4]}`],
  [10e12, `10${abbreviations[4]}`],
  [10e13, `100${abbreviations[4]}`],
  [10e14, `1${abbreviations[5]}`],
  [10e15, `10${abbreviations[5]}`],
  [10e16, `100${abbreviations[5]}`],
  [10e17, `1${abbreviations[6]}`],
  [10e18, `10${abbreviations[6]}`],
  [10e19, `100${abbreviations[6]}`],
];

describe('unit: numAbbr', () => {
  test.each(fixtures(defaultAbbreviations as unknown as string[]))(
    'abbreviates %d to %s',
    (num, expected) => {
      expect(numAbbr(num)).toBe(expected);
    },
  );

  test.each(fixtures(['', 'a', 'b', 'c', 'd', 'e', 'f']))(
    'abbreviates %d to %s',
    (num, expected) => {
      expect(numAbbr(num, ['', 'a', 'b', 'c', 'd', 'e', 'f'])).toBe(expected);
    },
  );
});
