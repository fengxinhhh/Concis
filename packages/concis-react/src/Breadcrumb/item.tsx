import React, { memo } from 'react';
import { BreadcrumbItemProps } from './interface';

export default memo(function BreadcrumbItem(props: BreadcrumbItemProps) {
  const { children } = props;
  return <div className="concis-breadcrumb-item">{children}</div>;
});
