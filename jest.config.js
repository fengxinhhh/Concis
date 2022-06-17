module.exports = {
  transform: {
    '^.+\\.(ts|tsx|js|jsx)?$': 'ts-jest',
    '\\.(less|css)$': 'jest-less-loader', // 支持less
  },

  // 具体配置项, 默认全局扫描 *.spec.js *.test.tsx?

  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',

  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};
