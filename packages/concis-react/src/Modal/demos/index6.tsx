import React, { useState } from 'react';
import Modal from '..';
import Button from '../../Button';

export default function index1() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <div>
      <Button style={{ marginRight: '8px' }} handleClick={() => setVisible1(true)}>
        Open Modal1
      </Button>
      <Button handleClick={() => setVisible2(true)}>Open Modal2</Button>

      <Modal
        title="Modal Title"
        visible={visible1}
        okText="Ok"
        cancelText="Cancel"
        onCancel={() => setVisible1(false)}
        onOk={() => setVisible1(false)}
      >
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
      <Modal
        title="Modal Title"
        visible={visible2}
        okText="好的"
        cancelText="下次再说"
        onCancel={() => setVisible2(false)}
        onOk={() => setVisible2(false)}
      >
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      </Modal>
    </div>
  );
}
