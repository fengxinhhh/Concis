import React from 'react';
import Popover from '..';
import Button from '../../Button';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function MenuDemos1() {
  process.env.NODE_ENV === 'production' && usePageListener('Popover');

  return (
    <>
      <Popover
        type="hover"
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary" width={80} height={30}>
          Hover me
        </Button>
      </Popover>
    </>
  );
}
