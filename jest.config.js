module.exports = {
  roots: ['<rootDir>'],
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader', // 支持less
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
