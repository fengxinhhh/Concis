import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'concis';

export default function BreadcrumbDemo1() {
  return (
    <div>
      <Breadcrumb separator={<RightOutlined />}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
