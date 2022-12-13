import React, { Children, Fragment, useContext, ReactNode, forwardRef } from 'react';
import { SpaceProps, sizeType } from './interface';
import { SpaceStyle } from './style';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';

const Space = (props, ref) => {
  const {
    children,
    className,
    style,
    direction = 'horizontal',
    size = 'small',
    align = 'center',
    wrap = false,
  } = props;

  const { prefixCls } = useContext(globalCtx) as GlobalConfigProps;
  const classNames = cs(prefixCls, className, 'concis-space');

  const childrenList = Children.toArray(children);

  const getMargin = (size: sizeType) => {
    if (typeof size === 'number') {
      return size;
    }
    switch (size) {
      case 'mini':
        return 4;
      case 'small':
        return 8;
      case 'medium':
        return 16;
      case 'large':
        return 24;
      default:
        return 8;
    }
  };

  const getMarginStyle = (index: number) => {
    const isLastDom = childrenList.length - 1 === index;
    if (!Array.isArray(size)) {
      const marginNum = getMargin(size);
      return !isLastDom
        ? direction === 'horizontal'
          ? { marginRight: `${marginNum}px` }
          : { marginBottom: `${marginNum}px` }
        : {};
    }
    const marginRight = getMargin(size[0]);
    const marginBottom = getMargin(size[1]);
    if (wrap) {
      return {
        marginRight,
        marginBottom,
      };
    }
    return !isLastDom
      ? direction === 'horizontal'
        ? { marginRight: `${marginRight}px` }
        : { marginBottom: `${marginBottom}px` }
      : {};
  };

  return (
    <SpaceStyle direction={direction} align={align}>
      <div className={classNames} style={style} ref={ref}>
        {childrenList.map((child: ReactNode, index: number) => {
          return (
            <Fragment key={index}>
              <div className="concis-space-item" style={getMarginStyle(index)}>
                {child}
              </div>
            </Fragment>
          );
        })}
      </div>
    </SpaceStyle>
  );
};

export default forwardRef<unknown, SpaceProps>(Space);
