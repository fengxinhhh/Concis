import React, { useState } from 'react';
import Popover from '..';
import Button from '../../Button';
import Space from '../../Space';

export default function MenuDemos1() {
  const [dialogStatus1, setDialogStatus1] = useState(false);
  const [dialogStatus2, setDialogStatus2] = useState(false);

  return (
    <Space>
      <Popover
        type="hover"
        align="bottom"
        propsVisible={dialogStatus1}
        onVisibleChange={setDialogStatus1}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => setDialogStatus1(false)}
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
        propsVisible={dialogStatus2}
        onVisibleChange={setDialogStatus2}
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <span
              style={{ color: '#1890ff', cursor: 'pointer' }}
              onClick={() => setDialogStatus2(false)}
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
