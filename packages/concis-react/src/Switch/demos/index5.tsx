import React from 'react';
import Switch from '..';
import Space from '../../Space';

export default function index1() {
  return (
    <Space>
      <Switch loading />
      <Switch defaultChecked={true} loading />
    </Space>
  );
}
