import React, { useState } from 'react';
import { Drawer, Button } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Drawer');
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
