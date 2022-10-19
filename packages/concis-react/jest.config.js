module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader', // 支持less
  },
  testRegex: '(/src/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^concis$': '<rootDir>/src/index.ts',
  },
};
