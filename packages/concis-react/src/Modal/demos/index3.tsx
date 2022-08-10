import React from 'react';
import Modal from '..';
import Button from '../../Button';
import Message from '../../Message';

export default function index1() {
  const info = () => {
    Modal.info({
      title: 'Info Notification',
      content: (
        <p>
          This is an info description which directly indicates a neutral informative change or
          action. (e.g., "We are providing new services for all developers.
        </p>
      ),
      onOk: () => {
        Message.info('Info Modal');
      },
    });
  };

  const success = () => {
    Modal.success({
      title: 'Success Notification',
      content: (
        <p>
          This is an success description which directly indicates a neutral informative change or
          action. (e.g., "We are providing new services for all developers.
        </p>
      ),
      onOk: () => {
        Message.success('Success Modal');
      },
    });
  };
  const error = () => {
    Modal.error({
      title: 'Error Notification',
      content: (
        <p>
          This is an error description which directly indicates a neutral informative change or
          action. (e.g., "We are providing new services for all developers.
        </p>
      ),
      onOk: () => {
        Message.error('Error Modal');
      },
    });
  };

  const warning = () => {
    Modal.warning({
      title: 'Warning Notification',
      content: (
        <p>
          This is an warning description which directly indicates a neutral informative change or
          action. (e.g., "We are providing new services for all developers.
        </p>
      ),
      onOk: () => {
        Message.warning('Warning Modal');
      },
    });
  };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={{ margin: '0 8px' }} handleClick={info}>
        Info
      </Button>
      <Button type="info" style={{ margin: '0 8px' }} handleClick={success}>
        Success
      </Button>
      <Button type="warning" style={{ margin: '0 8px' }} handleClick={warning}>
        Warning
      </Button>
      <Button type="danger" style={{ margin: '0 8px' }} handleClick={error}>
        Error
      </Button>
    </div>
  );
}
