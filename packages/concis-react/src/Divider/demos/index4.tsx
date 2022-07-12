import Divider from '..';
import React from 'react';
/**
 * transform: true
 */
export default function DividerDemo3() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={12} align={'left'}>
          React View UI
        </Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={16}>React View UI</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={22} align={'right'}>
          React View UI
        </Divider>
      </div>
    </div>
  );
}
