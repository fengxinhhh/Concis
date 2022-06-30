import React from 'react';
import Button from '../../Button';
import Message from '..';

export default function index1() {
  return (
    <Button type="primary" handleClick={() => Message.info('This is an info message!')}>
      Open Message
    </Button>
  );
}
