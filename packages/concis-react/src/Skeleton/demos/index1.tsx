import React from 'react';
import Skeleton from '..';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index2() {
  process.env.NODE_ENV === 'production' && usePageListener('Skeleton');

  return (
    <div style={{ width: '700px' }}>
      <Skeleton loading />
    </div>
  );
}
