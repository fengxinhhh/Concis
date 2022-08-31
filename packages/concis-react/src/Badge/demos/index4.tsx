import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import { Badge, Avatar } from 'concis';

export default function avatarDemo1() {
  return (
    <>
      <Badge text="HOT" style={{ marginRight: '25px' }}>
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge text="NEW">
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>
    </>
  );
}
