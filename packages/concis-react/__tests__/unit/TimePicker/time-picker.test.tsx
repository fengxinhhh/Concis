import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';
import TimePicker from '../../../src/TimePicker';

const { mount } = Enzyme;
let container: HTMLDivElement | null = null;

beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement('div');
  document.body.appendChild(container);
});
afterEach(() => {
  // 退出时进行清理
  ReactDOM.unmountComponentAtNode(container);
  container?.remove();
  container = null;
});

mountTest(TimePicker);
describe('TimePicker', () => {
  it('test TimePicker correctly render', () => {
    const component = mount(<TimePicker />);
    expect(component.find('.concis-time-picker')).toHaveLength(1);
    expect(
      component.find('.pop-dialog').getDOMNode().getAttribute('style')?.includes('opacity: 0')
    ).toBe(true);
  });
  it('test TimePicker attribute correctly', () => {
    const component = <TimePicker defaultTime="12:00:20" showClear />;
    act(() => {
      ReactDOM.render(component, container);
    });
    const value = (container as HTMLDivElement).querySelector('input')?.getAttribute('value');
    expect(value).toBe('12:00:20');
    const closeElement = (container as HTMLDivElement).querySelectorAll('span.input-clear');
    expect(closeElement).toHaveLength(1);
  });
  it('test TimePicker event callback', () => {
    const mockFnConfirm = jest.fn();
    const mockFnClear = jest.fn();
    const mockFnChange = jest.fn();
    const component = mount(
      <TimePicker
        showClear
        handleConfirm={mockFnConfirm}
        clearCallback={mockFnClear}
        changeCallback={mockFnChange}
      />
    );
    const hourElement = component.find('.time-panel div').at(0).find('span').at(5);
    act(() => {
      hourElement.simulate('click');
    });
    expect(hourElement.getDOMNode().getAttribute('class').trim()).toBe('active');

    const minElement = component.find('.time-panel div').at(1).find('span').at(12);
    act(() => {
      minElement.simulate('click');
    });
    expect(minElement.getDOMNode().getAttribute('class').trim()).toBe('active');

    const secondsElement = component.find('.time-panel div').at(2).find('span').at(10);
    act(() => {
      secondsElement.simulate('click');
    });
    expect(secondsElement.getDOMNode().getAttribute('class').trim()).toBe('active');

    act(() => {
      component.find('input').simulate('focus');
    });
    component.update();
    component.find('.concis-button-primary span').at(0).simulate('click');
    expect(mockFnConfirm).toBeCalled();
    expect(mockFnChange).toBeCalled();
    expect(component.find('input.input').at(0).getDOMNode().getAttribute('value')).toBe('05:12:10');

    act(() => {
      component.find('.input-clear').at(0).simulate('click');
    });
    expect(component.find('input.input').at(0).getDOMNode().value).toBe('');
    expect(mockFnClear).toBeCalled();
  });
  it('test TimePicker dialled attribute correctly', () => {
    const disableHour = (hour: string) => {
      return Number(hour) < 5;
    };
    const component = mount(<TimePicker disableHour={disableHour} />);
    const hourDisableElement = component.find('.time-panel div').at(0).find('span.disable');
    expect(hourDisableElement).toHaveLength(5);
    const nowHour = new Date().getHours();
    // 测试凌晨三点的active
    expect(hourDisableElement.at(3).getDOMNode().getAttribute('class').trim()).toBe(
      nowHour === 3 ? 'active disable' : 'disable'
    );
    expect(component.find('.time-panel div').at(0).getDOMNode().getAttribute('class')).toBe(null);
  });
});
