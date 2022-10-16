import React, { forwardRef } from 'react';
import { BreadcrumbItemProps } from './interface';

const BreadcrumbItem = (props, ref) => {
  const { children } = props;
  return (
    <div className="concis-breadcrumb-item" ref={ref}>
      {children}
    </div>
  );
};

const breadcrumbItemComponent = forwardRef<unknown, BreadcrumbItemProps>(BreadcrumbItem);

breadcrumbItemComponent.displayName = 'BreadcrumbItem';

export default breadcrumbItemComponent;
