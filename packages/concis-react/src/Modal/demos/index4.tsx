import React from 'react';
import Modal from '..';
import Button from '../../Button';
import Message from '../../Message';

export default function index1() {
  const confirm = () => {
    Modal.info({
      title: 'Modal Title',
      content: (
        <p>
          You can customize modal body text by the current situation. This modal will be closed
          immediately once you press the OK button.
        </p>
      ),
      onOk: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            Message.success('success');
            resolve('');
          }, 3000);
        });
      },
      onCancel: () => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            Message.error('cancel');
            resolve('');
          }, 3000);
        });
      },
    });
  };

  return (
    <div>
      <Button handleClick={confirm}>打开</Button>
    </div>
  );
}
