import React, { useState } from 'react';
import { Button, Modal, Message } from 'concis';

export default function index1() {
  const [visible, setVisible] = useState(false);

  const close = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('');
        Message.success('success');
        setVisible(false);
      }, 3000);
    });
  };

  return (
    <div>
      <Button handleClick={() => setVisible(true)}>Open Modal</Button>
      <Modal title="Modal Title" visible={visible} onOk={close} onCancel={close}>
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    </div>
  );
}
