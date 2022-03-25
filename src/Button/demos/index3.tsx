import React from 'react';
import Button from '..';

export default function ButtonDemo3() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <Button type="primary" width={30} height={30} circle>
        P
      </Button>
      <Button type="danger" width={30} height={30} circle>
        D
      </Button>
      <Button type="warning" width={30} height={30} circle>
        W
      </Button>
      <Button type="text" width={30} height={30} circle>
        T
      </Button>
    </div>
  );
}
