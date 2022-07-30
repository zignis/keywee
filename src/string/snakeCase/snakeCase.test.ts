import snakeCase from './snakeCase';

const samples = [
  ['flatcase', 'flatcase'],
  ['UPPERFLATCASE', 'upperflatcase'],
  ['kebab-case', 'kebab_case'],
  ['camelCase', 'camel_case'],
  ['PascalCase', 'pascal_case'],
];

describe('unit: snakeCase', () => {
  test.each(samples)('snake_case: %s -> %s', (fixture, result) =>
    expect(snakeCase(fixture)).toBe(result),
  );
});
