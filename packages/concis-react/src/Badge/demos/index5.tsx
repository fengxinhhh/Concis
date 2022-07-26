import React from 'react';
import Badge from '..';
import Avatar from '../../Avatar';
import { ClockCircleOutlined } from '@ant-design/icons';

export default function avatarDemo1() {
  return (
    <>
      <Badge count={100} maxCount={10} style={{ marginRight: '25px' }}>
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge count={100} style={{ marginRight: '25px' }}>
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>
      <Badge count={1000} maxCount={999}>
        <Avatar shape="square">
          <span>
            <ClockCircleOutlined />
          </span>
        </Avatar>
      </Badge>
    </>
  );
}
