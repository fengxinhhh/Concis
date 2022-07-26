import React from 'react';
import Button from '..';
import Space from '../../Space';

export default function ButtonDemo2() {
  const buttonStyle = { margin: '8px' };

  return (
    <Space direction="vertical">
      <Button type="primary" style={buttonStyle} width={400} height={40}>
        Primary
      </Button>
      <Button type="danger" style={buttonStyle} width={400} height={40}>
        Danger
      </Button>
      <Button type="warning" style={buttonStyle} width={400} height={40}>
        Warning
      </Button>
      <Button type="info" style={buttonStyle} width={400} height={40}>
        Info
      </Button>
      <Button type="text" style={buttonStyle} width={400} height={40}>
        Text
      </Button>
    </Space>
  );
}
