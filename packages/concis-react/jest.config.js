module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader', // 支持less
  },
  testRegex: '(/src/*/__test__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?|ts)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^concis$': '<rootDir>/src/index.ts',
  },
};
