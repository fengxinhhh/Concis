import React from 'react';
import Button from '..';

export default function ButtonDemo6() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" loading>
        加载按钮
      </Button>
      <Button type="danger" loading>
        加载按钮
      </Button>
      <Button type="warning" loading>
        加载按钮
      </Button>
      <Button type="text" loading>
        加载按钮
      </Button>
    </div>
  );
}
