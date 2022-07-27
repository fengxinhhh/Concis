import React, { useState, useEffect } from 'react';
import Modal from '..';
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
        Open Modal
      </Button>
      <Modal
        title="Modal Title"
        visible={visible}
        width={90}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    </div>
  );
}
