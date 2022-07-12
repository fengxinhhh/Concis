import React from 'react';
import Loading from '..';

export default function LoadingDemo1() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '40px' }}>
      <Loading loadingText="正在加载中..." />
    </div>
  );
}
