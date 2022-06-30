import React from 'react';
import Button from '../../Button';
import Message from '..';

export default function index1() {
  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        handleClick={() => Message.info('This is an info message!')}
      >
        Info
      </Button>
      <Button
        type="danger"
        style={{ marginRight: '20px' }}
        handleClick={() => Message.error('This is an error message!')}
      >
        Error
      </Button>
      <Button
        type="warning"
        style={{ marginRight: '20px' }}
        handleClick={() => Message.warning('This is an warning message!')}
      >
        Warning
      </Button>
      <Button
        style={{ background: '#19b42a', marginRight: '20px' }}
        handleClick={() => Message.success('This is an success message!')}
      >
        Success
      </Button>
      <Button
        style={{ background: '#f2f3f5', color: '#000000', marginRight: '20px' }}
        handleClick={() => Message.normal('This is an normal message!')}
      >
        Normal
      </Button>
      <Button
        type="warning"
        loading
        style={{ marginRight: '20px' }}
        handleClick={() => Message.loading('This is an loading message!')}
      >
        Loading
      </Button>
    </>
  );
}
