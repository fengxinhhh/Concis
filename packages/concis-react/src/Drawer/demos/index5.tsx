import React, { useState } from 'react';
import { Drawer, Button } from 'concis';

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
        width="600px"
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
