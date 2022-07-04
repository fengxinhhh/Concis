import React from 'react';
import Button from '../../Button';
import Notification from '..';

export default function index1() {
  const message = (val: string) => {
    Notification.loading({
      title: 'Notification',
      content: val,
      duration: 3000,
    });
    //调用时请留给message结尾动画0.2s的空档时间
    setTimeout(() => {
      Notification.success({
        title: 'Success',
        content: 'update Success',
      });
    }, 3201);
  };

  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        handleClick={() => message('This is an info Notification!')}
      >
        Open Notification
      </Button>
    </>
  );
}
