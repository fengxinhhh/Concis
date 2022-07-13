import React from 'react';
import Switch from '..';
import Space from '../../Space';

export default function index1() {
  return (
    <Space>
      <Switch disabled />
      <Switch defaultChecked={true} disabled />
    </Space>
  );
}
