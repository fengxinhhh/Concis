import React from 'react';
import { Button, Message } from 'concis';

export default function index1() {
  const message = (val: string) => {
    Message.loading({
      content: val,
      duration: 3000,
    });
    // 调用时请留给message结尾动画0.2s的空档时间
    setTimeout(() => {
      Message.success('Update Success');
    }, 3201);
  };

  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        handleClick={() => message('This is an info message!')}
      >
        Update message
      </Button>
    </>
  );
}
