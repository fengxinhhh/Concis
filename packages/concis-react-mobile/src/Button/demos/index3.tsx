import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  const buttonStyle = { margin: '8px' };

  return (
    <div style={{ display: 'flex' }}>
      <Button type="primary" style={buttonStyle} width={30} height={30} circle>
        P
      </Button>
      <Button type="danger" style={buttonStyle} width={30} height={30} circle>
        D
      </Button>
      <Button type="warning" style={buttonStyle} width={30} height={30} circle>
        W
      </Button>
      <Button type="info" style={buttonStyle} width={30} height={30} circle>
        H
      </Button>
      <Button type="text" style={buttonStyle} width={30} height={30} circle>
        T
      </Button>
    </div>
  );
}
