// @ts-check
/* eslint-env node */

/**
 * @type {import('@jest/types').Config.InitialOptions}
 */
const options = {
  resolver: 'ts-jest-resolver',
  transform: {
    '^.+\\.(t|j)s$': '@swc/jest',
  },
};

module.exports = options;
