import React, { memo, Children, Fragment, useMemo, useContext } from 'react';
import { SpaceProps, sizeType } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Space = <T,>(props: SpaceProps<T>) => {
  const {
    children,
    className,
    direction = 'horizontal',
    size = 'smail',
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
      case 'smail':
        return 8;
      case 'medium':
        return 16;
      case 'large':
        return 24;
      default:
        return 8;
    }
  };
  const getMarginStyle = (index) => {
    const isLastDom = childrenList.length - 1 === index;
    if (!Array.isArray(size)) {
      const marginNum = getMargin(size);
      return !isLastDom
        ? direction === 'horizontal'
          ? { marginRight: `${marginNum}px` }
          : { marginBottom: `${marginNum}px` }
        : {};
    } else {
      const marginRight = getMargin(size[0]);
      const marginBottom = getMargin(size[1]);
      if (wrap) {
        return {
          marginRight,
          marginBottom,
        };
      } else {
        return !isLastDom
          ? direction === 'horizontal'
            ? { marginRight: `${marginRight}px` }
            : { marginBottom: `${marginBottom}px` }
          : {};
      }
    }
  };
  const getAlignStyle = () => {
    switch (align) {
      case 'start':
        return {
          alignItems: 'flex-start',
        };
      case 'center':
        return {
          alignItems: 'center',
        };
      case 'end':
        return {
          alignItems: 'flex-end',
        };
      case 'baseline':
        return {
          alignItems: 'baseline',
        };
      default:
        return {
          alignItems: 'center',
        };
    }
  };
  const spaceStyles = useMemo(() => {
    const returnStyle = direction === 'horizontal' ? getAlignStyle() : {};
    returnStyle['display'] = 'flex';
    if (direction === 'vertical') {
      returnStyle['flexDirection'] = 'column';
    } else {
      returnStyle['flexDirection'] = 'row';
    }
    return returnStyle;
  }, [direction, align]);

  return (
    <div className={classNames} style={spaceStyles}>
      {childrenList.map((child, index) => {
        return (
          <Fragment key={index}>
            <div className="concis-space-item" style={getMarginStyle(index)}>
              {child}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default memo(Space);
