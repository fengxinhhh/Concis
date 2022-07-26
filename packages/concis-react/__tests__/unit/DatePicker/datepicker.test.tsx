import React from 'react';
import DatePicker from '../../../src/DatePicker/DatePicker';
import MonthPicker from '../../../src/DatePicker/MonthPicker';
import YearPicker from '../../../src/DatePicker/YearPicker';
import RangeDatePicker from '../../../src/DatePicker/rangeDatePicker';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { act } from 'react-dom/test-utils';

const { mount } = Enzyme;

mountTest(DatePicker);

describe('DatePicker', () => {
  it('test DatePicker correctly', async () => {
    const mockFn = jest.fn();
    const component = mount(
      <DatePicker
        disableCheck={(date: Date) => date.getDate() > 13}
        align="top"
        showClear={true}
        handleChange={mockFn}
      />,
    );
    expect(component.find('.concis-date-picker')).toHaveLength(1);
    // expect(
    //   component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 0'),
    // ).toBe(true);
    // act(() => {
    //   component.find('input').simulate('focus');
    // });
    // component.update();
    // setTimeout(async () => {
    //   await expect(
    //     component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 1'),
    //   ).toBe(true);
    // }, 0);
    // component.find('.concis-date-picker table tr td:not(.day-empty)').at(0).simulate('click');
    // expect(mockFn).toBeCalled();
    // expect(
    //   component.find('.concis-input input').getDOMNode()?.getAttribute('value')?.split('-')[2],
    // ).toBe('01');
  });
  it('test MonthPicker correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <MonthPicker
        disableCheck={(date: Date) => date.getMonth() > 5}
        align="top"
        showClear={true}
        handleChange={mockFn}
      />,
    );
    expect(component.find('.concis-month-picker')).toHaveLength(1);
    expect(
      component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 0'),
    ).toBe(true);
    act(() => {
      component.find('input').simulate('focus');
    });
    component.update();
    setTimeout(async () => {
      await expect(
        component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 1'),
      ).toBe(true);
    }, 0);
    component.find('.concis-month-picker table tr').at(0).find('td').at(0).simulate('click');
    expect(mockFn).toBeCalled();
    expect(
      component.find('.concis-input input').getDOMNode()?.getAttribute('value')?.split('-')[1],
    ).toBe('01');
  });
  it('test YearPicker correctly', () => {
    const mockFn = jest.fn();
    const component = mount(
      <YearPicker
        disableCheck={(date: Date) => date.getFullYear() > 2022}
        align="top"
        showClear={true}
        handleChange={mockFn}
      />,
    );
    expect(component.find('.concis-year-picker')).toHaveLength(1);
    expect(
      component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 0'),
    ).toBe(true);
    act(() => {
      component.find('input').simulate('focus');
    });
    component.update();
    setTimeout(async () => {
      await expect(
        component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 1'),
      ).toBe(true);
    }, 0);
    component.find('.concis-year-picker table tr').at(0).find('td').at(0).simulate('click');
    expect(mockFn).toBeCalled();
    expect(component.find('.concis-input input').getDOMNode()?.getAttribute('value')).toBe(
      String(new Date().getFullYear()),
    );
  });
  it('test range DatePicker show correctly', () => {
    //测试区间式选择器的正确性
    const mockFn = jest.fn();
    const component = mount(<RangeDatePicker handleChange={mockFn} />);
    component.find('.concis-range-picker .rangePicker .concis-input input').at(0).simulate('focus');

    expect(component.find('.concis-range-picker .date-box')).toHaveLength(1);

    const startPickerDom = component.find('.left .day-list .box-list');
    const endPickerDom = component.find('.right .day-list .day-box');
    startPickerDom.at(0).simulate('click');
    endPickerDom.at(0).simulate('click');
    expect(mockFn).toBeCalled();
  });
});
