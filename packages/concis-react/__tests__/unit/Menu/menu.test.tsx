import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import Menu from '../../../src/Menu/index';
import { sleep } from '../../sleep';
import Enzyme from '../../setup';
import renderTest from '../../mountTest';

const { mount } = Enzyme;

renderTest(Menu);

const getItem = (
  label: string,
  key: string | number,
  level: string | number,
  icon?: JSX.Element | null,
  children?: Array<Object> | null,
) => {
  return {
    label,
    key,
    level,
    icon,
    children,
  };
};
const items = [
  getItem('Navigation One', 'sub1', 1, <MailOutlined />, [
    getItem('Option 1', '1', 2),
    getItem('Option 2', '2', 2),
    getItem('Option 3', '3', 2),
    getItem('Option 4', '4', 2),
  ]),
  getItem('Navigation Two', 'sub2', 1, <AppstoreOutlined />, [
    getItem('Option 5', '5', 2),
    getItem('Option 6', '6', 2, null, [
      getItem('Option 13', '13', 3),
      getItem('Option 14', '14', 3),
    ]),
    getItem('Submenu', 'sub3', 2, null, [
      getItem('Option 15', '15', 3),
      getItem('Option 16', '16', 3),
    ]),
  ]),
  getItem('Navigation Three', 'sub4', 1, <SettingOutlined />, [
    getItem('Option 9', '9', 2),
    getItem('Option 10', '10', 2),
    getItem('Option 11', '11', 2),
    getItem('Option 12', '12', 2),
  ]),
];

describe('Menu', () => {
  it('test base Menu correctly', () => {
    const component = mount(<Menu items={items} />);
    expect(component.find('.concis-menu').length).toBe(1);
    expect(component.find('.concis-menu').children().length).toBe(3);
    expect(component.find('.concis-menu .concis-menu-menuOptions').length).toBe(3);
    expect(component.find('.concis-menu .concis-menu-menuOptions').at(0).children().length).toBe(5);
    expect(component.find('.concis-menu .concis-menu-menuOptions').at(1).children().length).toBe(4);
    expect(component.find('.concis-menu .concis-menu-menuOptions').at(2).children().length).toBe(5);
  });
  it('test width props correctly', () => {
    const component = mount(<Menu items={items} width={300} />);
    expect(component.find('.concis-menu').getDOMNode().style.width).toBe('300px');
  });
  it('test dark theme menu correctly', () => {
    const component = mount(<Menu items={items} dark />);
    expect(component.find('.concis-dark-menu').length).toBe(1);
  });
  it('test menu click toggle correctly', async () => {
    const mockFn = jest.fn();
    const component = mount(<Menu items={items} handleRouteChange={mockFn} />);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('50px');
    component
      .find('.concis-menu .concis-menu-menuOptions .concis-menu-fatherTitle')
      .at(0)
      .simulate('click');
    await sleep(200);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('250px');
    component.find('.concis-menu .concis-menu-menuOptions div').at(1).simulate('click');
    expect(mockFn).toBeCalled();
  });
  it('test ableToggle menu correctly', async () => {
    const component = mount(<Menu items={items} ableToggle />);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('50px');
    component
      .find('.concis-menu .concis-menu-menuOptions .concis-menu-fatherTitle')
      .at(0)
      .simulate('click');
    await sleep(200);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('250px');
    component
      .find('.concis-menu .concis-menu-menuOptions .concis-menu-fatherTitle')
      .at(5)
      .simulate('click');
    await sleep(200);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('50px');
  });
  it('test defaultOpen menu correctly', () => {
    const component = mount(<Menu items={items} defaultOpen />);
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(0).getDOMNode().style.height,
    ).toBe('250px');
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(1).getDOMNode().style.height,
    ).toBe('400px');
    expect(
      component.find('.concis-menu .concis-menu-menuOptions').at(2).getDOMNode().style.height,
    ).toBe('250px');
  });
});
