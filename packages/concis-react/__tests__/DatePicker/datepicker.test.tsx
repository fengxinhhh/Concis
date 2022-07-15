import React from 'react';
import ReactDOM from 'react-dom';
import TimePicker from '../../src/DatePicker/index';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { mount } = Enzyme;

mountTest(TimePicker);

let container: HTMLDivElement | null;

describe('DatePicker', () => {
  beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
  });
  afterEach(() => {
    document.body.removeChild(container as HTMLDivElement);
    container = null;
  });

  it('test default datePicker correctly', () => {
    //时间选择器交互和显示隐藏测试
    const mockFn = jest.fn();
    const component = mount(<TimePicker type="primary" handleChange={mockFn} />);
    expect(component.find('.concis-date-picker')).toHaveLength(1);
    act(() => {
      component.find('.result').simulate('click');
    });
    component.update();
    expect(component.find('.concis-date-picker .check-box')).toHaveLength(1);
    act(() => {
      component.find('.concis-date-picker .check-box .day-list .day').at(0).simulate('click');
    });
    component.update();
    // expect(mockFn).toBeCalled();
  });

  it('test input datePicker correctly', () => {
    //输入式时间选择器测试
    const component = mount(<TimePicker type="input" />);
    const input = component.find('input');
    expect(input).toHaveLength(1);
    act(() => {
      input.simulate('click');
    });
    input.update();
    expect(component.find('.check-box')).toHaveLength(1);
  });

  it('test input datePicker change callback correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<TimePicker type="input" handleChange={mockFn} />);
    const input = component.find('input');
    input.simulate('change', {
      target: {
        value: '2018-6-1',
      },
    });
    input.simulate('keydown', {
      keyCode: 13,
    });
    expect(mockFn).toBeCalled();
    act(() => {
      input.simulate('click');
    });
    component.update();
    //测试月份选择框正常
    component.find('.top-bar .month').simulate('click');
    expect(component.find('.month-toggle-box')).toHaveLength(1);
    component.find('.month-toggle-box .month').at(0).simulate('click');
    expect(component.find('.top-bar .month').text()).toBe('1');
    //测试选择日期正常
    const firstDay = component.find('.day-list .day').at(0);
    firstDay.simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('test range DatePicker show correctly', () => {
    //测试区间式选择器的正确性
    const mockFn = jest.fn();
    const component = mount(<TimePicker type="primary" showRange handleChange={mockFn} />);
    component.find('.concis-range-picker .rangePicker .concis-input input').at(0).simulate('focus');

    expect(component.find('.concis-range-picker .date-box')).toHaveLength(1);

    const startPickerDom = component.find('.left .day-list .box-list');
    const endPickerDom = component.find('.right .day-list .day-box');
    startPickerDom.at(0).simulate('click');
    endPickerDom.at(0).simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('test range clearly DatePicker show correctly', () => {
    //测试可清除式选择器显示icon
    const component = <TimePicker type="primary" showRange showClear />;
    ReactDOM.render(component, container);
    expect(container?.querySelector('.concis-range-picker .rangePicker')?.childNodes.length).toBe(
      4,
    );
  });
});
