import React from 'react';
import Link from '../../../src/Link/index';
import Enzyme from '../../setup';
import mountTest from '../../mountTest';

const { mount } = Enzyme;

mountTest(Link);

describe('Link', () => {
  it('test base Link show correctly', () => {
    const wrapper = mount(<Link>Link</Link>);
    expect(wrapper.find('.concis-link').length).toBe(1);
    expect(wrapper.find('.concis-link-primary').length).toBe(1);
    expect(wrapper.find('.concis-link-disabled').length).toBe(0);
    expect(wrapper.find('.concis-link-icon').length).toBe(0);
    expect(wrapper.find('.concis-link').text()).toBe('Link');
  });
  it('test disabled Link show correctly', () => {
    const wrapper = mount(<Link disabled>Link</Link>);
    expect(wrapper.find('.concis-link').length).toBe(1);
    expect(wrapper.find('.concis-link-primary').length).toBe(1);
    expect(wrapper.find('.concis-link-disabled').length).toBe(1);
    expect(wrapper.find('.concis-link-icon').length).toBe(0);
    expect(wrapper.find('.concis-link').text()).toBe('Link');
  });
  it('test different status Link show correctly', () => {
    const wrapper = mount(<Link status="success">Link</Link>);
    expect(wrapper.find('.concis-link').length).toBe(1);
    expect(wrapper.find('.concis-link-success').length).toBe(1);
    wrapper.setProps({ status: 'warning' });
    expect(wrapper.find('.concis-link-warning').length).toBe(1);
    wrapper.setProps({ status: 'error' });
    expect(wrapper.find('.concis-link-error').length).toBe(1);
  });
  it('test icon Link show correctly', () => {
    const wrapper = mount(<Link icon={<span className="test-icon" />}>Link</Link>);
    expect(wrapper.find('.concis-link').length).toBe(1);
    expect(wrapper.find('.concis-link-primary').length).toBe(1);
    expect(wrapper.find('.concis-link-disabled').length).toBe(0);
    expect(wrapper.find('.concis-link-icon').length).toBe(1);
    expect(wrapper.find('.test-icon').length).toBe(1);
    expect(wrapper.find('.concis-link').text()).toBe('Link');
  });
});
