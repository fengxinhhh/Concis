import React from 'react';
import Button from '../../Button';
import Message from '..';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Message');

  return (
    <Button type="primary" handleClick={() => Message.info('This is an info message!')}>
      Open Message
    </Button>
  );
}
