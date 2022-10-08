import React from 'react';
import { Breadcrumb, Button } from 'concis';

export default function BreadcrumbDemo1() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <a href="#" style={{ color: '#1890ff' }}>
            Home
          </a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Button style={{ height: 25 }}>Menu</Button>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
