import Divider from '..';
import React from 'react';
/**
 * transform: true
 */
export default function DividerDemo3() {
  return (
    <div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={12} borderColor={'green'}>
          Concis
        </Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={16} borderColor={'pink'}>
          Concis
        </Divider>
      </div>
      <div style={{ marginBottom: '40px' }}>
        <Divider fontSize={22} borderColor={'lightblue'}>
          Concis
        </Divider>
      </div>
    </div>
  );
}
