import React, { useState, useEffect } from 'react';
import Drawer from '..';
import Button from '../../Button';
import RadioGroup from '../../Radio/RadioGroup';
import Radio from '../../Radio';

export default function index1() {
  const [visible, setVisible] = useState(false);
  const [align, setAlign] = useState('right');

  return (
    <div>
      <RadioGroup value={0} onChange={(val: { children?: string }) => setAlign(val.children)}>
        <Radio>right</Radio>
        <Radio>left</Radio>
        <Radio>top</Radio>
        <Radio>bottom</Radio>
      </RadioGroup>
      <Button
        style={{ marginTop: '30px' }}
        handleClick={() => {
          setVisible(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        title="Drawer Title"
        visible={visible}
        align={align as 'left' | 'right' | 'top' | 'bottom'}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
      </Drawer>
    </div>
  );
}
