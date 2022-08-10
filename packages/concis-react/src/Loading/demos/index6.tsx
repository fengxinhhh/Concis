import React from 'react';
import { Loading3QuartersOutlined } from '@ant-design/icons';
import Loading from '..';

export default function LoadingDemo1() {
  return (
    <div style={{ position: 'relative', width: '200px', height: '40px' }}>
      <Loading icon={<Loading3QuartersOutlined style={{ fontSize: '20px' }} />} />
    </div>
  );
}
