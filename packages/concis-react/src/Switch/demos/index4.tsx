import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Switch from '..';
import Space from '../../Space';

export default function index1() {
  return (
    <Space>
      <Switch defaultChecked={true} checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        defaultChecked={true}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </Space>
  );
}
