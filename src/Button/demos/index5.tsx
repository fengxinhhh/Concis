import React from 'react';
import Button from '..';

export default function ButtonDemo5() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" dashed>
        虚线按钮
      </Button>
      <Button type="danger" dashed>
        虚线按钮
      </Button>
      <Button type="warning" dashed>
        虚线按钮
      </Button>
      <Button type="text" dashed>
        虚线按钮
      </Button>
    </div>
  );
}
