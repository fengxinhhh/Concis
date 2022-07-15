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
          Concis
        </Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={16}>Concis</Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={22} align={'right'}>
          Concis
        </Divider>
      </div>
    </div>
  );
}
