import React from 'react';
import Empty from '../../../src/Empty';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Empty);

describe('Empty', () => {
  it('test base Empty show correctly', () => {
    const wrapper = mount(<Empty />);

    expect(wrapper.find('.concis-empty')).toHaveLength(1);
    expect(wrapper.find('.concis-empty .empty-icon')).toHaveLength(1);
    expect(wrapper.find('.concis-empty .empty-text')).toHaveLength(1);
  });

  it('test Empty icon props correctly', () => {
    const wrapper = mount(<Empty icon={<div className="test-icon" />} />);

    expect(wrapper.find('.concis-empty .test-icon')).toHaveLength(1);
    expect(wrapper.find('.concis-empty .empty-icon')).toHaveLength(0);
  });

  it('test Empty description props correctly', () => {
    const wrapper = mount(<Empty description="test description" />);

    expect(wrapper.find('.concis-empty .empty-text').text()).toEqual('test description');
  });
});
