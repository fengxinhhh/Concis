import React from 'react';
import { act } from 'react-dom/test-utils';
import BackTop from '../../../src/BackTop';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(BackTop);

describe('BackTop', () => {
  it('test base BackTop correctly', () => {
    const onReachTop = jest.fn();
    const mockClick = jest.fn();
    const wrapper = mount(
      <div className="container" style={{ height: 300, overflow: 'scroll' }}>
        <div style={{ height: 1000 }}>让滚动条飞一会儿</div>
        <BackTop
          duration={1000}
          visibilityHeight={200}
          target={() => document.querySelector('.container') as HTMLElement}
          onReachTop={onReachTop}
          onClick={mockClick}
        />
      </div>
    );
    act(() => {
      wrapper.find('.container').simulate('scroll');
    });
    wrapper.update();
    expect(wrapper.find('.concis-back-top')).toHaveLength(1);
    setTimeout(() => {
      expect(wrapper.find('.concis-back-top').getDOMNode().children.length).toBe(1);
      wrapper.find('.concis-back-top').simulate('click');
      expect(mockClick).toBeCalled();
      expect(wrapper.find('.concis-back-top').getDOMNode().children.length).toBe(0);
      expect(onReachTop).toBeCalled();
    }, 1000);
  });
});
