import React, { useState } from 'react';
import { Zoombox, Modal, Button, Divider } from 'concis';

export default function index1() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Button
        handleClick={() => {
          setVisible(true);
        }}
      >
        Open Modal
      </Button>

      <Modal
        title="Modal Title"
        visible={visible}
        cancelOnlyByButton
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Zoombox style={{ textAlign: 'center', padding: 10 }} notAllowed>
          <p>Concis is a component library for quickly building React applications</p>
          <Divider />
          <p>
            This component library was first developed by individuals, and was later joined by some
            interested friends in the community, and it will get better and better.
          </p>
          <Divider>Concis</Divider>
          <p>If you are interested in Concis, please leave a message with us in Github.</p>
        </Zoombox>
      </Modal>
    </div>
  );
}
