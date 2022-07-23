import React, { useRef } from 'react';
import Popover from '..';
import Button from '../../Button';
import Space from '../../Space';

export default function MenuDemos1() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);

  return (
    <Space>
      <Popover
        type="hover"
        align="bottom"
        popRef={ref1}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => ref1.current.setShowDialog(false)}
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
        popRef={ref2}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
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
