import React from 'react';
import { ClockCircleOutlined } from '@ant-design/icons';
import Badge from '..';

export default function avatarDemo1() {
  return (
    <>
      <Badge count={9} dot offset={[-2, 0]} style={{ marginRight: '25px' }}>
        <span style={{ color: '#325DFF' }}>Link</span>
      </Badge>
      <Badge count={9} dot offset={[-2, -2]}>
        <ClockCircleOutlined style={{ color: '#888', fontSize: 18, verticalAlign: -3 }} />
      </Badge>
    </>
  );
}
