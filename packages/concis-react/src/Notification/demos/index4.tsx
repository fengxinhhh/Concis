import React from 'react';
import { Button, Notification } from 'concis';

export default function index1() {
  const message = (
    val: string,
    position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'
  ) => {
    Notification.info({
      title: 'Notification',
      content: val,
      duration: 3000,
      position,
    });
  };

  return (
    <>
      <Button
        style={{ marginRight: '20px' }}
        type="primary"
        handleClick={() => message('This is a Notification in topLeft!', 'topLeft')}
      >
        topLeft
      </Button>
      <Button
        style={{ marginRight: '20px' }}
        type="primary"
        handleClick={() => message('This is a Notification in topRight!', 'topRight')}
      >
        topRight
      </Button>
      <Button
        style={{ marginRight: '20px' }}
        type="primary"
        handleClick={() => message('This is a Notification in bottomLeft!', 'bottomLeft')}
      >
        bottomLeft
      </Button>
      <Button
        type="primary"
        handleClick={() => message('This is a Notification in bottomRight!', 'bottomRight')}
      >
        bottomRight
      </Button>
    </>
  );
}
