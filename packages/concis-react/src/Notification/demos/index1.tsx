import React from 'react';
import Button from '../../Button';
import Notification from '..';
import usePageListener from '../../../../../scripts/common_utils/hooks/usePageListener';

export default function index1() {
  process.env.NODE_ENV === 'production' && usePageListener('Notification');

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
