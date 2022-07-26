import React from 'react';
import Button from '..';
import Space from '../../Space';
import { SettingOutlined, StarOutlined, LeftOutlined, RightOutlined, DeleteOutlined, DownOutlined } from '@ant-design/icons'

export default function ButtonDemo6() {
  return (
    <div>
      <Space size='large'>
        <Button.Group>
          <Button type="primary" icon={<LeftOutlined />}>
            Prev
          </Button>
          <Button type="primary" icon={<RightOutlined />}>
            Next
          </Button>
        </Button.Group>
        <Button.Group>
          <Button type="primary" icon={<StarOutlined />}>
          </Button>
          <Button type="primary" icon={<SettingOutlined />}>
          </Button>
          <Button type="primary" icon={<DeleteOutlined />}>
          </Button>
        </Button.Group>
        <Button.Group>
          <Button type="primary" icon={<StarOutlined />}>
            Star
          </Button>
          <Button type="primary" icon={<SettingOutlined />}>
            Setting
          </Button>
        </Button.Group>
      </Space>
      <Space size='large'>
        <Button.Group style={{ marginTop: '20px' }}>
          <Button type="primary">
            Publish
          </Button>
          <Button type="primary" icon={<DownOutlined />}>
          </Button>
        </Button.Group>
        <Button.Group style={{ marginTop: '20px' }}>
          <Button type="danger">
            Delete
          </Button>
          <Button type="danger" icon={<DeleteOutlined />}>
          </Button>
        </Button.Group>
      </Space>
    </div>
  );
}
