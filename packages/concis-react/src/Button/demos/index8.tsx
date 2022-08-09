import React from 'react';
import { SettingOutlined, StarOutlined, DeleteOutlined } from '@ant-design/icons';
import Button from '..';

export default function ButtonDemo6() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} icon={<StarOutlined />} circle />
      <Button type="primary" style={buttonStyle} icon={<SettingOutlined />} />
      <Button type="danger" style={buttonStyle} icon={<DeleteOutlined />} />
    </div>
  );
}
