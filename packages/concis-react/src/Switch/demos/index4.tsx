import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import Switch from '..';

export default function index1() {
  return (
    <div>
      <Switch defaultChecked={true} checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        style={{ marginLeft: '10px' }}
        defaultChecked={true}
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </div>
  );
}
