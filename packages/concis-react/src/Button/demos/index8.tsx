import React from 'react';
import Button from '..';
import Space from '../../Space';
import { SettingOutlined, StarOutlined, LeftOutlined, RightOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons'

export default function ButtonDemo6() {
  return (
    <Space size="large">
      <Button type="primary" icon={<StarOutlined />} circle>
      </Button>
      <Button type="primary" icon={<SettingOutlined />}>
      </Button>
      <Button type="danger" icon={<DeleteOutlined />}>
      </Button>
    </Space>
  );
}
