import React, { Children, useContext, Fragment, forwardRef, useMemo } from 'react';
import { BreadcrumbStyle } from './style';
import { BreadcrumbProps } from './interface';
import BreadcrumbItem from './item';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Breadcrumb = (props: BreadcrumbProps, ref) => {
  const { children, className, style, separator = '/', maxCount } = props;
  const childrenList = Children.toArray(children);

  const { prefixCls, darkTheme } = useContext(globalCtx) as GlobalConfigProps;

  const classNames = cs(
    prefixCls,
    className,
    darkTheme ? 'concis-dark-breadcrumb' : 'concis-breadcrumb'
  );

  const renderBreadcrumb = useMemo(() => {
    const list =
      maxCount && maxCount < childrenList.length ? childrenList.slice(0, maxCount) : childrenList;
    return list.map((child, index) => {
      return (
        <Fragment key={index}>
          {child}
          {index !== childrenList.length - 1 && (
            <span className="concis-breadcrumb-item-separator">{separator}</span>
          )}
        </Fragment>
      );
    });
  }, [childrenList, children]);

  return (
    <BreadcrumbStyle>
      <div className={classNames} style={style} ref={ref}>
        {renderBreadcrumb}
        {maxCount && maxCount < childrenList.length && (
          <span className="concis-breadcrumb-item-ellipse">...</span>
        )}
      </div>
    </BreadcrumbStyle>
  );
};

const forwardRefBreadcrumb = forwardRef<unknown, BreadcrumbProps>(Breadcrumb);

const BreadcrumbComponent = forwardRefBreadcrumb as typeof forwardRefBreadcrumb & {
  Item: typeof BreadcrumbItem;
};

BreadcrumbComponent.displayName = 'Breadcrumb';
BreadcrumbComponent.Item = BreadcrumbItem;

export default BreadcrumbComponent;
