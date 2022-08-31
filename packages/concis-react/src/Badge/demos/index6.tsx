import React from 'react';
import { Badge, Avatar } from 'concis';

export default function avatarDemo1() {
  return (
    <>
      <Badge count={9}>
        <Avatar shape="square">A</Avatar>
      </Badge>
      <Badge count={9} dotStyle={{ background: 'yellow' }}>
        <Avatar shape="square">A</Avatar>
      </Badge>
      <Badge count={100} maxCount={99}>
        <Avatar shape="square">A</Avatar>
      </Badge>
      <Badge count={9} />
      <Badge count={9} dot>
        <span>Link</span>
      </Badge>
      <Badge text="NEW">
        <Avatar shape="square">A</Avatar>
      </Badge>
    </>
  );
}
