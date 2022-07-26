import React from 'react';
import Button from '..';

export default function ButtonDemo4() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} disabled>
        禁用按钮
      </Button>
      <Button type="danger" style={buttonStyle} disabled>
        禁用按钮
      </Button>
      <Button type="warning" style={buttonStyle} disabled>
        禁用按钮
      </Button>
      <Button type="info" style={buttonStyle} disabled>
        禁用按钮
      </Button>
      <Button type="text" style={buttonStyle} disabled>
        禁用按钮
      </Button>
    </div>
  );
}
