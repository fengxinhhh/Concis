import React from 'react';
import { UserOutlined, CameraOutlined, EditOutlined } from '@ant-design/icons';
import Avatar from '..';

export default function avatarDemo1() {
  const triggerClick = () => {
    console.log('click!');
  };
  return (
    <div style={{ display: 'flex' }}>
      <Avatar
        size={54}
        style={{ marginRight: '20px' }}
        triggerType="mask"
        triggerIcon={<CameraOutlined style={{ fontSize: '20px' }} />}
        triggerClick={triggerClick}
      >
        A
      </Avatar>
      <Avatar
        size={54}
        style={{ marginRight: '20px', background: '#3370ff' }}
        triggerIcon={<EditOutlined style={{ color: '#1370ff', fontSize: '12px' }} />}
        triggerClick={triggerClick}
      >
        <UserOutlined style={{ fontSize: '20px' }} />
      </Avatar>
      <Avatar
        size={54}
        style={{ marginRight: '20px', background: '#14a9f8' }}
        triggerIcon={<CameraOutlined style={{ color: '#14a9f8', fontSize: '12px' }} />}
        triggerClick={triggerClick}
      >
        View
      </Avatar>
      <Avatar
        size={54}
        shape="square"
        style={{ marginRight: '20px', background: '#00d0b8' }}
        triggerIcon={<CameraOutlined style={{ color: '#00d0b8', fontSize: '12px' }} />}
        triggerClick={triggerClick}
      >
        React
      </Avatar>
      <Avatar
        size={54}
        triggerType="mask"
        triggerIcon={<CameraOutlined style={{ fontSize: '20px' }} />}
        triggerClick={triggerClick}
      >
        <img src="https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png" />
      </Avatar>
    </div>
  );
}
