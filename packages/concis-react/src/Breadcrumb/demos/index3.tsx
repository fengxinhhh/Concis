import React from 'react';
import { Breadcrumb } from 'concis';

export default function BreadcrumbDemo1() {
  return (
    <div>
      <Breadcrumb style={{ fontSize: 10 }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
