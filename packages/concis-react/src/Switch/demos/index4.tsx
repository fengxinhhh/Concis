import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Switch from '..';

export default function index1() {
  return (
    <>
      <Switch defaultChecked={true} checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        defaultChecked={true}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </>
  );
}
