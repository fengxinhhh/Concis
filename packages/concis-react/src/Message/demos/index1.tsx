import React from 'react';
import { Button, Message } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Message');

  return (
    <Button type="primary" handleClick={() => Message.info('This is an info message!')}>
      Open Message
    </Button>
  );
}
