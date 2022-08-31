import React from 'react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'concis';

export default function index1() {
  return (
    <div>
      <Switch defaultChecked checkedChildren="开启" unCheckedChildren="关闭" />
      <Switch
        style={{ marginLeft: '10px' }}
        defaultChecked
        checkedChildren={<CheckOutlined />}
        unCheckedChildren={<CloseOutlined />}
      />
    </div>
  );
}
