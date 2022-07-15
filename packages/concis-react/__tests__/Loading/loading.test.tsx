import React from 'react';
import Loading from '../../src/Loading/index';
import Enzyme from '../setup';
import renderTest from '../mountTest';
import ReactDOM from 'react-dom';

const { mount } = Enzyme;
let container: HTMLDivElement | null;

renderTest(Loading);

describe('loading', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container as HTMLDivElement);
    container = null;
  });

  it('test loading show correctly', () => {
    //测试基础加载
    const loading = mount(<Loading />);
    expect(loading.find('.concis-loading .loading-container svg')).toHaveLength(1);
    expect(loading.find('.concis-loading .text')).toHaveLength(0);
  });

  it('test dot loading show correctly', () => {
    //测试省略号加载
    const loading = mount(<Loading type="strip" />);
    expect(loading.find('.concis-strip-loading')).toHaveLength(1);
  });

  it('test mask loading has dialog', () => {
    //测试加载蒙层
    const loading = mount(<Loading mask />);
    expect(loading.find('.dialog')).toHaveLength(1);
  });

  it('test mask loading has dialog', () => {
    //测试加载蒙层
    const loading = mount(<Loading loadingText="test loading" />);
    expect(loading.find('.concis-loading .text').text()).toBe('test loading');
  });

  it('test diffenent size loading show correctly', () => {
    //测试不同大小loading、loading自定义样式
    const component = <Loading width="3em" height="3em" style={{ marginLeft: '100px' }} />;
    ReactDOM.render(component, container);
    const loadingDom = container?.querySelector('.concis-loading');
    expect(
      loadingDom?.getAttribute('style')?.includes('margin-left: 100px; width: 3em; height: 3em;'),
    );
    const svgDom = loadingDom?.querySelector('svg');
    expect(
      svgDom?.getAttribute('width') === '3em' && svgDom?.getAttribute('height') === '3em',
    ).toBe(true);
  });
});
