import React from 'react';
import { Button, Notification } from 'concis';

export default function index1() {
  const message = (val: string) => {
    Notification.info({
      title: 'Notification',
      content: val,
      duration: 3000,
      clearable: true,
      showFooter: true,
      footerBtnVal: {
        enter: '确认',
        exit: '取消',
      },
      doneCallback: (val: number) => {
        console.log(val);
      },
    });
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
