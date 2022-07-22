import React from 'react';
import Badge from '../../../src/Badge';
import Avatar from '../../../src/Avatar';
import Enzyme from '../setup';
import mountTest from '../mountTest';
import { ClockCircleOutlined } from '@ant-design/icons';

const { mount } = Enzyme;

mountTest(Badge);

describe(`badge`, () => {
  test('test base badge with count correctly', () => {
    const component = mount(
      <Badge count={9} style={{ marginRight: '25px' }}>
        <Avatar shape="square">Num</Avatar>
      </Badge>,
    );
    expect(component.find('.concis-badge')).toHaveLength(1);
    expect(component.find('.concis-avatar')).toHaveLength(1);
    expect(component.find('.concis-badge-count').text()).toBe('9');
  });
  test('test base badge with dot correctly', () => {
    const component = mount(
      <Badge count={9} dot dotStyle={{ width: 10, height: 10 }}>
        <Avatar shape="square">Dot</Avatar>
      </Badge>,
    );
    expect(component.find('.concis-badge')).toHaveLength(1);
    expect(component.find('.concis-avatar')).toHaveLength(1);
    expect(component.find('.concis-badge-dot')).toHaveLength(1);
  });
  test('test no children badge show correctly', () => {
    const component = mount(<Badge count={9} />);
    expect(component.find('.concis-no-child-badge')).toHaveLength(1);
  });
  test('test no children badge with max count correctly', () => {
    const component = mount(<Badge maxCount={99} count={1000} style={{ marginRight: '25px' }} />);
    expect(component.find('.concis-no-child-badge').text()).toBe('99+');
  });
  test('test small red dot badge show correctly', () => {
    const component = mount(
      <Badge count={9} dot offset={[-2, 0]} style={{ marginRight: '25px' }}>
        <span style={{ color: '#1890ff' }}>Link</span>
      </Badge>,
    );
    expect(component.find('.concis-badge span').at(0).text()).toBe('Link');
    expect(
      component
        .find('.concis-badge .concis-badge-dot')
        .getDOMNode()
        ?.getAttribute('style')
        ?.includes('right: -2px; top: 0px;'),
    ).toBe(true);
  });
  test('test text badge show correctly', () => {
    const component = mount(
      <Badge text="HOT" style={{ marginRight: '25px' }}>
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>,
    );
    expect(component.find('.concis-badge-text').text()).toBe('HOT');
  });
});
