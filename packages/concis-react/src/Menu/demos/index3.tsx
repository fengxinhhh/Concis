import React from 'react';
import Menu from '..';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

export default function MenuDemos1() {
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
  const handleRouteChange = (page: string) => {
    console.log(page);
  };
  return <Menu items={items} dark handleRouteChange={handleRouteChange} />;
}
