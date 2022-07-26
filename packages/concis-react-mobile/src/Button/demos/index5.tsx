import React from 'react';
import Button from '..';

export default function ButtonDemo5() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} dashed>
        虚线按钮
      </Button>
      <Button type="danger" style={buttonStyle} dashed>
        虚线按钮
      </Button>
      <Button type="warning" style={buttonStyle} dashed>
        虚线按钮
      </Button>
      <Button type="info" style={buttonStyle} dashed>
        虚线按钮
      </Button>
      <Button type="text" style={buttonStyle} dashed>
        虚线按钮
      </Button>
    </div>
  );
}
