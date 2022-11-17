import React from 'react';
import { Popover, Button } from 'concis';

export default function MenuDemos1() {
  return (
    <>
      <Popover
        type="click"
        style={{ padding: '0 0 15px 15px' }}
        align="right"
        dialogWidth={200}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary">Click me</Button>
      </Popover>
    </>
  );
}
