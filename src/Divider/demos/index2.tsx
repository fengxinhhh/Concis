import Divider from '..';
import React from 'react';
/**
 * transform: true
 */
export default function DividerDemo2() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={12}>React View UI</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={16}>React View UI</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={22}>React View UI</Divider>
      </div>
    </div>
  );
}
