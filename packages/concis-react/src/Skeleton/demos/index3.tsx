import React from 'react';
import { Skeleton } from 'concis';

export default function index2() {
  return (
    <div style={{ width: '700px' }}>
      <Skeleton loading title avatar size={64} />
    </div>
  );
}
