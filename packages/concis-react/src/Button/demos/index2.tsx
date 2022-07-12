import React from 'react';
import Button from '..';

export default function ButtonDemo2() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} width={90} height={40}>
        small
      </Button>
      <Button type="danger" style={buttonStyle} width={120} height={40}>
        big
      </Button>
      <Button type="warning" style={buttonStyle} width={150} height={40}>
        large
      </Button>
    </div>
  );
}
