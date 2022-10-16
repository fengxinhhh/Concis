import React from 'react';
import { Breadcrumb } from 'concis';
import usePageListener from '../../common_utils/hooks/usePageListener';

export default function BreadcrumbDemo1() {
  process.env.NODE_ENV === 'production' && usePageListener('Breadcrumb');

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Menu</Breadcrumb.Item>
        <Breadcrumb.Item>Introduce</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
