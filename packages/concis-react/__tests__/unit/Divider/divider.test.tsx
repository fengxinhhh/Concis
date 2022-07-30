import React from 'react';
import Divider from '../../../src/Divider/index';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

mountTest(Divider);

describe('divider', () => {
  it('test divider text show correctly', () => {
    //测试显示正常
    const divider = mount(<Divider>test</Divider>);
    expect(divider.find('.concis-divider-line-text').length).toBe(1);
    expect(divider.find('.concis-divider-line-text').text()).toBe('test');
  });

  it('test divider text set font size correctly', () => {
    //测试设置文字大号显示正常
    const divider = mount(<Divider fontSize={18}>test</Divider>);
    expect(
      divider
        .find('.concis-divider-line-text')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('font-size: 18px'),
    );
  });

  it('test divider text align correctly', () => {
    //测试分割线文字对齐正常
    const component = mount(<Divider align={'left'}>test</Divider>);
    expect(
      component
        .find('.concis-divider-before-line-text')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('flex-basis: 24px; flex-grow: 0;'),
    ).toBe(true);
    component.setProps({
      align: 'right',
    });
    expect(
      component
        .find('.concis-divider-after-line-text')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('flex-basis: 24px; flex-grow: 0;'),
    ).toBe(true);
  });
});
