import React from 'react';
import { Button, Modal, Message } from 'concis';

export default function index1() {
  const confirm = () => {
    Modal.confirm({
      title: 'Modal Title',
      content: (
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      ),
      onOk: () => Message.success('success'),
      onCancel: () => Message.error('cancel'),
    });
  };

  return (
    <div>
      <Button handleClick={confirm}>Open Modal</Button>
    </div>
  );
}
