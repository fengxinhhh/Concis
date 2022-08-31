import React from 'react';
import { Badge } from 'concis';

export default function avatarDemo1() {
  return (
    <>
      <Badge count={9} style={{ marginRight: '25px' }} />
      <Badge
        count={2}
        style={{ marginRight: '25px' }}
        dotStyle={{ background: '#E5E6EB', color: '#86909C' }}
      />
      <Badge count={16} style={{ marginRight: '25px' }} />
      <Badge maxCount={99} count={1000} style={{ marginRight: '25px' }} />
    </>
  );
}
