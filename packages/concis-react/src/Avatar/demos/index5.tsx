import React from 'react';
import { AvatarGroup, Avatar } from 'concis';

export default function avatarDemo1() {
  return (
    <AvatarGroup size={50} groupStyle={{ margin: '0 10px' }}>
      <Avatar style={{ background: '#3370ff' }}>React</Avatar>
      <Avatar style={{ background: '#14a9f8' }}>ReactUI</Avatar>
      <Avatar style={{ background: '#00d0b8' }}>ReactViewUI</Avatar>
    </AvatarGroup>
  );
}
