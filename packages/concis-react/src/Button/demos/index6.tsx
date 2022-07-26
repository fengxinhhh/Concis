import React from 'react';
import Button from '..';

export default function ButtonDemo6() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} loading>
        加载按钮
      </Button>
      <Button type="danger" style={buttonStyle} loading>
        加载按钮
      </Button>
      <Button type="warning" style={buttonStyle} loading>
        加载按钮
      </Button>
      <Button type="info" style={buttonStyle} loading>
        加载按钮
      </Button>
      <Button type="text" style={buttonStyle} loading>
        加载按钮
      </Button>
    </div>
  );
}
