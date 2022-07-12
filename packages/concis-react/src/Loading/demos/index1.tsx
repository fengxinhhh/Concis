import React from 'react';
import Loading from '..';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function LoadingDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Loading');

  return (
    <div style={{ position: 'relative', width: '200px', height: '50px' }}>
      <Loading />
    </div>
  );
}
