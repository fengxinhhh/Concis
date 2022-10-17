describe('test web-react pkg', () => {
  it('test pc dist cjs module correctly', () => {
    const concis = require('../packages/concis-react/web-react/cjs');
    expect(Object.keys(concis)).toMatchSnapshot();
  });

  it('test pc dist esm module correctly', () => {
    const concis = require('../packages/concis-react/web-react/es');
    expect(Object.keys(concis)).toMatchSnapshot();
  });

  it('test pc dist umd module correctly', () => {
    const concis = require('../packages/concis-react/web-react/umd');
    expect(Object.keys(concis)).toMatchSnapshot();
  });
});

export {};
