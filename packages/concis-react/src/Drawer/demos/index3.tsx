import React, { useState } from 'react';
import Drawer from '..';
import Button from '../../Button';

export default function index1() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        handleClick={() => {
          setVisible(true);
        }}
      >
        Open Drawer
      </Button>
      <Drawer
        title="Drawer Title"
        visible={visible}
        onOk={() => {
          return new Promise((resolve) => {
            setTimeout(() => {
              setVisible(false);
              resolve('');
            }, 2000);
          });
        }}
        onCancel={() => setVisible(false)}
      >
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
        <p>This is a Drawer view text.</p>
      </Drawer>
    </div>
  );
}
