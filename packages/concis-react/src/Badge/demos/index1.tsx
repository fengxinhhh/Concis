import React from 'react';
import Badge from '..';
import Avatar from '../../Avatar';
import { ClockCircleOutlined } from '@ant-design/icons';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function avatarDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Badge');

  return (
    <>
      <Badge count={9} style={{ marginRight: '25px' }}>
        <Avatar shape="square">Num</Avatar>
      </Badge>
      <Badge
        style={{ marginRight: '25px' }}
        count={<ClockCircleOutlined style={{ color: '#7e7d7d' }} />}
        dotStyle={{ background: '#fff', width: '12px', height: '12px', padding: '0' }}
      >
        <Avatar shape="square">Icon</Avatar>
      </Badge>
      <Badge count={9} dot dotStyle={{ width: 10, height: 10 }}>
        <Avatar shape="square">Dot</Avatar>
      </Badge>
    </>
  );
}
