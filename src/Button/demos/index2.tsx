import React from 'react';
import Button from '..';

export default function ButtonDemo2() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" width={80} height={50}>
        小型按钮
      </Button>
      <Button type="primary" width={120} height={70}>
        中型按钮
      </Button>
      <Button type="warning" width={150} height={90}>
        大型按钮
      </Button>
    </div>
  );
}
