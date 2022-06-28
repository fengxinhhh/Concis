import React from 'react';
import ReactDOM from 'react-dom';
import Input from '../../Input/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { mount } = Enzyme;

mountTest(Input);

let container: HTMLDivElement | null;

describe('Input', () => {
  it('test default Input Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<Input placeholder="请输入" width="200" handleIptChange={mockFn} />);
    expect(component.find('input')).toHaveLength(1);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: '123',
      },
    });
    expect(mockFn).toBeCalled();
  });

  it('test clearly Input Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<Input placeholder="请输入" showClear handleIptChange={mockFn} />);
    expect(component.find('.box span')).toHaveLength(1);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: '123',
      },
    });
    expect(mockFn).toBeCalled();
  });

  it('test password Input Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <Input type="password" placeholder="请输入" showTogglePwd handleIptChange={mockFn} />,
    );
    expect(component.find('.box span')).toHaveLength(1);
    expect(component.find('input').getDOMNode().getAttribute('type')).toBe('password');
    component.find('span').simulate('click');
    expect(component.find('input').getDOMNode().getAttribute('type')).toBe('text');
  });

  it('test number Input Component correctly', () => {
    const changeValFn = jest.fn();
    const changeNumFn = jest.fn();
    const component = mount(
      <Input
        type="num"
        placeholder="请输入"
        min={5}
        max={10}
        step={1.5}
        handleIptChange={changeValFn}
        handleNumChange={changeNumFn}
      />,
    );
    expect(component.find('input')).toHaveLength(1);
    expect(component.find('.numTags')).toHaveLength(1);
    const input = component.find('input');
    input.simulate('change', {
      target: 1,
    });
    expect(changeValFn).toBeCalled();
    component.find('.numTags span').at(0).simulate('click');
    expect(changeNumFn).toBeCalled();
    act(() => {
      component.setProps({
        type: 'password',
      });
    });
    expect(component.find('input').getDOMNode().getAttribute('type')).toBe('password');
  });
});
