// @ts-check
/* eslint-env node */

'use strict';

/**
 * An object with ESLint options.
 * @type {import('eslint').Linter.Config}
 */
var options = {
  extends: [
    'eslint:recommended',
    'plugin:sort/recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  overrides: [
    {
      files: ['**/*.+(spec|test).{ts,tsx,js,jsx}', '!src/**'],
      rules: {
        'no-restricted-syntax': ['off'],
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
  },
  plugins: ['sort', '@typescript-eslint'],
  root: true,
  rules: {
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'no-restricted-syntax': [
      'error',
      {
        message: 'let/const not allowed, use var instead',
        selector: 'VariableDeclaration:matches([kind=let], [kind=const])',
      },
      {
        message: 'object patterns are not allowed',
        selector: 'ObjectPattern',
      },
      {
        message: 'array patterns are not allowed',
        selector: 'ArrayPattern',
      },
      {
        message: 'template literal strings are not allowed',
        selector: 'TemplateLiteral',
      },
      'ArrowFunctionExpression',
    ],
    'no-var': 'off',
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort/destructuring-properties': 'error',
    'sort/export-members': 'error',
    'sort/exports': 'error',
    'sort/import-members': 'error',
    'sort/imports': 'error',
    'sort/object-properties': 'error',
    'sort/type-properties': 'error',
  },
};

module.exports = options;
