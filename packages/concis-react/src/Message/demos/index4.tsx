import React from 'react';
import Button from '../../Button';
import Message from '..';

export default function index1() {
  const message = (val: string, position: 'top' | 'bottom') => {
    Message.info({
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
        handleClick={() => message('This is a message in top!', 'top')}
      >
        top
      </Button>
      <Button type="primary" handleClick={() => message('This is a message in top!', 'bottom')}>
        bottom
      </Button>
    </>
  );
}
