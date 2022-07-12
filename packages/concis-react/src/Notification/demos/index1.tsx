import React from 'react';
import Button from '../../Button';
import Notification from '..';

export default function index1() {
  const message = (val: string) => {
    Notification.info({
      title: 'Notification',
      content: val,
      duration: 3000,
    });
  };

  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        handleClick={() => message('This is a notification! ')}
      >
        Open Notification
      </Button>
    </>
  );
}
