import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar, AvatarGroup } from 'concis';

export default function avatarDemo1() {
  return (
    <AvatarGroup size={50} groupStyle={{ margin: '0 10px' }}>
      <Avatar>A</Avatar>
      <Avatar style={{ background: '#3370ff' }}>
        <UserOutlined style={{ fontSize: '20px' }} />
      </Avatar>
      <Avatar style={{ background: '#14a9f8' }} shape="square">
        View
      </Avatar>
      <Avatar style={{ background: '#00d0b8' }} shape="square">
        React
      </Avatar>
      <Avatar>
        <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" />
      </Avatar>
    </AvatarGroup>
  );
}
