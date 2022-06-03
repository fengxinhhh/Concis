import React, { useState } from 'react';
import Popover from '..';
import Button from '../../Button';

export default function MenuDemos1() {
  return (
    <>
      <Popover
        type="click"
        align="bottom"
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary" width={120} height={30}>
          Click to bottom
        </Button>
      </Popover>
      <Popover
        type="click"
        align="top"
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary" width={120} height={30}>
          Click to top
        </Button>
      </Popover>
      <Popover
        type="click"
        align="left"
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary" width={120} height={30}>
          Click to left
        </Button>
      </Popover>
      <Popover
        type="click"
        align="right"
        content={
          <>
            <p style={{ color: '#1d2129', fontSize: '16px' }}>Title</p>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
            <div style={{ color: '#4e5969', fontSize: '14px' }}>This is content</div>
          </>
        }
      >
        <Button type="primary" width={120} height={30}>
          Click to right
        </Button>
      </Popover>
    </>
  );
}
