import React from 'react';
import { Button, Notification } from 'concis';

export default function index1() {
  return (
    <>
      <Button
        type="primary"
        style={{ marginRight: '20px' }}
        handleClick={() =>
          Notification.info({
            title: 'Notification',
            content: 'This is an info Notification!',
            duration: 3000,
          })
        }
      >
        Info
      </Button>
      <Button
        type="danger"
        style={{ marginRight: '20px' }}
        handleClick={() =>
          Notification.error({
            title: 'Notification',
            content: 'This is an error Notification!',
            duration: 3000,
          })
        }
      >
        Error
      </Button>
      <Button
        type="warning"
        style={{ marginRight: '20px' }}
        handleClick={() =>
          Notification.warning({
            title: 'Notification',
            content: 'This is an warning Notification!',
            duration: 3000,
          })
        }
      >
        Warning
      </Button>
      <Button
        style={{ background: '#19b42a', marginRight: '20px' }}
        handleClick={() =>
          Notification.success({
            title: 'Notification',
            content: 'This is an success Notification!',
            duration: 3000,
          })
        }
      >
        Success
      </Button>
      <Button
        style={{ background: '#f2f3f5', color: '#000000', marginRight: '20px' }}
        handleClick={() =>
          Notification.normal({
            title: 'Notification',
            content: 'This is an normal Notification!',
            duration: 3000,
          })
        }
      >
        Normal
      </Button>
      <Button
        type="warning"
        loading
        style={{ marginRight: '20px' }}
        handleClick={() =>
          Notification.loading({
            title: 'Notification',
            content: 'This is an loading Notification!',
            duration: 3000,
          })
        }
      >
        Loading
      </Button>
    </>
  );
}
