import React from 'react';
import {
  SettingOutlined,
  StarOutlined,
  LeftOutlined,
  RightOutlined,
  DeleteOutlined,
  DownOutlined,
} from '@ant-design/icons';
import Button from '..';

export default function ButtonDemo6() {
  const buttonStyle = { margin: '0 20px' };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <Button.Group>
          <Button type="primary" icon={<LeftOutlined />}>
            Prev
          </Button>
          <Button type="primary" icon={<RightOutlined />}>
            Next
          </Button>
        </Button.Group>
        <Button.Group style={buttonStyle}>
          <Button type="primary" icon={<StarOutlined />} />
          <Button type="primary" icon={<SettingOutlined />} />
          <Button type="primary" icon={<DeleteOutlined />} />
        </Button.Group>
        <Button.Group>
          <Button type="primary" icon={<StarOutlined />}>
            Star
          </Button>
          <Button type="primary" icon={<SettingOutlined />}>
            Setting
          </Button>
        </Button.Group>
      </div>
      <div style={{ display: 'flex', marginTop: '20px' }}>
        <Button.Group>
          <Button type="primary">Publish</Button>
          <Button type="primary" icon={<DownOutlined />} />
        </Button.Group>
        <Button.Group style={buttonStyle}>
          <Button type="danger">Delete</Button>
          <Button type="danger" icon={<DeleteOutlined />} />
        </Button.Group>
      </div>
    </div>
  );
}
