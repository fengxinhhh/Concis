import React from 'react';
import Button from '..';
import { SettingOutlined, StarOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons'

export default function ButtonDemo6() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} icon={<StarOutlined />} circle>
      </Button>
      <Button type="primary" style={buttonStyle} icon={<SettingOutlined />}>
      </Button>
      <Button type="danger" style={buttonStyle} icon={<DeleteOutlined />}>
      </Button>
    </div>
  );
}
