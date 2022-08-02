import React from 'react';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';
import Switch from '../../../src/Switch';
const { mount } = Enzyme;

mountTest(Switch);

describe('Switch', () => {
  it('test base Switch correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<Switch defaultChecked={true} handleChange={mockFn} />);
    expect(component.find('.concis-switch').length).toBe(1);
  });
  it('test switch check event callback', () => {
    const mockFn = jest.fn();
    const component = mount(<Switch defaultChecked={true} handleChange={mockFn} />);
    component.find('.concis-switch').simulate('click');
    expect(mockFn).toBeCalled();
  });
  it('test switch check state change', () => {
    const component = mount(<Switch defaultChecked={true} />);
    component.find('.concis-switch').simulate('click');
    expect(
      component
        .find('.concis-switch')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('background-color:rgba(201,205,212,1); '),
    );
    expect(
      component
        .find('.concis-switch-dot')
        .getDOMNode()
        .getAttribute('style')
        ?.includes('left: 20px;'),
    );
  });
  it('test switch loading', () => {
    const component = mount(<Switch loading />);
    expect(component.find('.concis-loading').length).toBe(1);
  });
});
