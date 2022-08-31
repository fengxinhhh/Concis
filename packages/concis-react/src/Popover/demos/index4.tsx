import React, { createRef } from 'react';
import { Popover, Button, Space } from 'concis';

export default function MenuDemos1() {
  const ref1 = createRef<any>();
  const ref2 = createRef<any>();

  return (
    <Space>
      <Popover
        type="hover"
        align="bottom"
        ref={ref1}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#325DFF', cursor: 'pointer' }}
              onClick={() => ref1.current?.setShowDialog(false)}
            >
              close
            </span>
          </>
        }
      >
        <Button type="primary" width={80} height={30}>
          Hover
        </Button>
      </Popover>
      <Popover
        type="click"
        align="bottom"
        ref={ref2}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#325DFF', cursor: 'pointer' }}
              onClick={() => ref2.current.setShowDialog(false)}
            >
              close
            </span>
          </>
        }
      >
        <Button type="primary" width={80} height={30}>
          Click
        </Button>
      </Popover>
    </Space>
  );
}
