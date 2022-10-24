import React from 'react';
import Rate from '../../../src/Rate';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Rate);

describe('Rate', () => {
  it('test base Rate Component correctly', () => {
    const mockFn = jest.fn();
    const component = mount(<Rate chooseCallback={mockFn} />);
    expect(component.find('.concis-rate .rate-container .rate-box')).toHaveLength(5);
    component.find('.concis-rate .rate-container .rate-box').at(1).simulate('click');
    expect(mockFn).toBeCalled();
  });

  it('test different color star show correctly', () => {
    const component = mount(<Rate starColor="red" />);
    expect(
      component
        .find('.rate-container .rate-box svg')
        .at(0)
        .getDOMNode()
        .getAttribute('style')
        ?.includes('color: red')
    );
  });

  it('test default show num correctly', () => {
    const component = mount(<Rate num={4} defaultShow={3} />);
    expect(component.find('.concis-rate .rate-container .rate-box')).toHaveLength(4);
  });
});
