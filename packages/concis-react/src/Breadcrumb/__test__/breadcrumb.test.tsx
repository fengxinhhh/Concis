import React from 'react';
import Breadcrumb from '../../../src/Breadcrumb';
import Button from '../../../src/Button';
import Enzyme from '../../../../../tests/setup';
import mountTest from '../../../../../tests/mountTest';

const { mount } = Enzyme;

mountTest(Breadcrumb);

describe('Breadcrumb', () => {
  it('test base Breadcrumb show correctly', () => {
    const wrapper = mount(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.find('.concis-breadcrumb').length).toBe(1);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').length).toBe(3);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-separator').length).toBe(2);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(0).text()).toBe('Home');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(1).text()).toBe('Menu');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(2).text()).toBe(
      'Introduce'
    );
  });

  it('test separator props in Breadcrumb correctly', () => {
    const wrapper = mount(
      <Breadcrumb separator=">">
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-separator').at(0).text()).toBe(
      '>'
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-separator').at(1).text()).toBe(
      '>'
    );
  });

  it('test different Breadcrumb.Item children show correctly', () => {
    const wrapper = mount(
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="http://www.baidu.com">Menu</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Button style={{ height: 25 }}>Introduce</Button>
        </Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').length).toBe(3);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-separator').length).toBe(2);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(0).text()).toBe('Home');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(1).text()).toBe('Menu');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(2).text()).toBe(
      'Introduce'
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(1).find('a').length).toBe(
      1
    );
    expect(
      wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(2).find('.concis-button').length
    ).toBe(1);
  });

  it('test maxCount props in Breadcrumb correctly', () => {
    const wrapper = mount(
      <Breadcrumb maxCount={3}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
        <Breadcrumb.Item>News</Breadcrumb.Item>
        <Breadcrumb.Item>Channel</Breadcrumb.Item>
      </Breadcrumb>
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').length).toBe(3);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-separator').length).toBe(3);
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(0).text()).toBe('Home');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(1).text()).toBe('Menu');
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item').at(2).text()).toBe(
      'Introduce'
    );
    expect(wrapper.find('.concis-breadcrumb .concis-breadcrumb-item-ellipse').length).toBe(1);
  });
});
