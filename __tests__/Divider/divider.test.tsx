import React from 'react';
import ReactDOM from 'react-dom';
import Divider from '../../src/Divider/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';

const { mount } = Enzyme;

mountTest(Divider);

let container: HTMLDivElement | null;

describe('divider', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container as HTMLDivElement);
    container = null;
  });

  it('test divider text show correctly', () => {
    //测试显示正常
    const divider = mount(<Divider>test</Divider>);
    expect(divider.find('.line-text').length).toBe(1);
    expect(divider.find('.line-text').text()).toBe('test');
  });

  it('test divider text set font size correctly', () => {
    //测试设置文字大号显示正常
    const component = <Divider fontSize={16}>React View UI</Divider>;
    ReactDOM.render(component, container);
    const lineDom = container?.querySelector('.line-text');
    expect(lineDom?.getAttribute('style')?.includes('font-size: 16px')).toBe(true);
  });

  it('test divider text set border color correctly', () => {
    //测试分割线颜色显示正常
    const component = <Divider borderColor={'lightblue'}>React View UI</Divider>;
    ReactDOM.render(component, container);
    const lineDom = container?.querySelector('.line');
    expect(lineDom?.getAttribute('style')?.includes('border-color: lightblue')).toBe(true);
  });

  it('test divider text align correctly', () => {
    //测试分割线文字对齐正常
    const component = <Divider align={'left'}>React View UI</Divider>;
    ReactDOM.render(component, container);
    const lineDom = container?.querySelector('.line');
    expect(lineDom?.getAttribute('style')?.includes('justify-content: left')).toBe(true);
  });

  it('test divider dashed line show correctly', () => {
    //测试显示正常
    const divider = mount(<Divider dashed>test</Divider>);
    expect(divider.find('.dashed').length).toBe(1);
  });
});
