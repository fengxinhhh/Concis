import React from 'react';
import { InfoCircleOutlined } from '@ant-design/icons';
import { sleep } from '../../../../../tests/sleep';
import Dropdown from '../../../src/Dropdown';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

const data = [
  {
    content: 'Beijing',
    link: '#',
  },
  {
    content: 'Guangzhou',
    link: '#',
    children: [
      {
        content: 'Tianhe',
        link: '#',
      },
      {
        content: 'Haizhu',
        link: '#',
        disabled: true,
      },
      {
        content: 'Yuexiu',
        link: '#',
      },
    ],
  },
  {
    content: 'Jump Google',
    link: 'https://www.google.com.hk/',
  },
];

mountTest(Dropdown);

describe('Dropdown', () => {
  it('test different position Dropdown correctly', async () => {
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} position="top" />);
    const positions = ['top', 'bottom', 'left', 'right'];
    for (let i = 0; i < positions.length; i++) {
      const position = positions[i];
      wrapper.setProps({ position });
      wrapper.find('.concis-dropdown-result').simulate('click');
      await sleep(200);
      expect(wrapper.find(`.concis-dropdown .concis-dropdown-content-${position}`).length).toBe(1);
    }
  });

  it('test base Dropdown correctly', async () => {
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} />);
    expect(wrapper.find('.concis-dropdown').length).toBe(1);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result').text()).toBe('Click me');
    expect(wrapper.find('.concis-dropdown .concis-dropdown-content').length).toBe(0);
    wrapper.find('.concis-dropdown-result').simulate('click');
    await sleep(200);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-content').length).toBe(1);
    expect(
      wrapper.find('.concis-dropdown .concis-dropdown-content').getDOMNode().childNodes.length
    ).toBe(3);
  });

  it('test hover Dropdown correctly', async () => {
    const wrapper = mount(<Dropdown placeholder="Hover me" data={data} type="hover" />);
    wrapper.find('.concis-dropdown-result').simulate('mouseenter');
    await sleep(200);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-content').length).toBe(1);
    expect(
      wrapper.find('.concis-dropdown .concis-dropdown-content').getDOMNode().childNodes.length
    ).toBe(3);
  });

  it('test button types Dropdown correctly', () => {
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} status="primary" />);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result-primary').length).toBe(1);
    wrapper.setProps({ status: 'error' });
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result-error').length).toBe(1);
    wrapper.setProps({ status: 'warning' });
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result-warning').length).toBe(1);
    wrapper.setProps({ status: 'success' });
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result-success').length).toBe(1);
  });

  it('test colums Dropdown correctly', async () => {
    const data = new Array(50).fill('item').map((item, index) => `${item}${index + 1}`);
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} colums />);
    wrapper.find('.concis-dropdown-result').simulate('click');
    await sleep(200);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-content-colums').length).toBe(1);
    expect(
      wrapper.find('.concis-dropdown .concis-dropdown-content-colums').getDOMNode().childNodes
        .length
    ).toBe(50);
  });

  it('test icon Dropdown correctly', async () => {
    const data = [
      {
        content: 'Beijing',
        icon: <InfoCircleOutlined />,
        link: '#',
      },
      {
        content: 'Guangzhou',
        icon: <InfoCircleOutlined />,
        link: '#',
        children: [
          {
            content: 'Tianhe',
            link: '#',
          },
          {
            content: 'Haizhu',
            link: '#',
            disabled: true,
          },
          {
            content: 'Yuexiu',
            link: '#',
          },
        ],
      },
      {
        content: 'Jump Google',
        icon: <InfoCircleOutlined />,
        link: 'https://www.google.com.hk/',
      },
    ];
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} />);
    wrapper.find('.concis-dropdown-result').simulate('click');
    await sleep(200);
    expect(
      wrapper.find('.concis-dropdown .concis-dropdown-content .list').at(0).getDOMNode().childNodes
        .length
    ).toBe(2);
  });

  it('test disabled Dropdown correctly', async () => {
    const wrapper = mount(<Dropdown placeholder="Click me" data={data} disabled />);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-result-disabled').length).toBe(1);
    wrapper.find('.concis-dropdown-result').simulate('click');
    await sleep(200);
    expect(wrapper.find('.concis-dropdown .concis-dropdown-content').length).toBe(0);
  });
});
