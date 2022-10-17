import React from 'react';
import { act } from 'react-dom/test-utils';
import Button from '../../../src/Button/index';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { shallow, mount } = Enzyme;

mountTest(Button);

describe(`button`, () => {
  it('button children show correctly', () => {
    // 按钮文字内容测试
    const component = shallow(<Button>testButton</Button>);
    const button = component.find('.concis-button');
    const p = button.find('button');
    expect(p.text()).toBe('testButton');
  });
  it('click callback correctly', () => {
    // 按钮点击回调测试
    const mockFn = jest.fn();
    const component = shallow(<Button handleClick={mockFn} />);
    const button = component.find('.concis-button');
    button.simulate('click');
    const mockFnCallLength = mockFn.mock.calls.length;
    expect(mockFnCallLength).toBe(0);

    act(() => {
      // 测禁用按钮
      component.setProps({
        disabled: true,
      });
    });

    button.simulate('click');
    expect(mockFn.mock.calls.length).toBe(mockFnCallLength);
  });

  it('button type set show correctly color', () => {
    // 测试按钮type被赋值className
    const component = mount(<Button type="primary" />);
    expect(component.find('.concis-button .concis-button-primary').length).toBe(1);
  });

  // it('button loading show correctly', () => {
  //   // 测试加载按钮显示
  //   const component = mount(<Button type="primary" loading />);
  //   expect(component.find('concis-button-loading')).not.toBeUndefined();
  // });
});
