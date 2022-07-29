import toSnakeCase from './snake';

const samples = [
  ['flatcase', 'flatcase'],
  ['UPPERFLATCASE', 'upperflatcase'],
  ['kebab-case', 'kebab_case'],
  ['camelCase', 'camel_case'],
  ['PascalCase', 'pascal_case'],
];

describe('unit: toSnakeCase', () => {
  test.each(samples)('snake_case: %s -> %s', (fixture, result) =>
    expect(toSnakeCase(fixture)).toBe(result),
  );
});
