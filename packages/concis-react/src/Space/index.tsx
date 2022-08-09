import React, { memo, Children, Fragment, useMemo, useContext, ReactNode } from 'react';
import { SpaceProps, sizeType, spaceAlignParams } from './interface';
import { GlobalConfigProps } from '../GlobalConfig/interface';
import cs from '../common_utils/classNames';
import { globalCtx } from '../GlobalConfig';
import './index.module.less';

const Space = <T,>(props: SpaceProps<T>) => {
  const {
    children,
    className,
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
    const returnStyle: spaceAlignParams = direction === 'horizontal' ? getAlignStyle() : {};
    returnStyle.display = 'flex';
    console.log(direction);
    if (direction === 'vertical') {
      returnStyle.flexDirection = 'column';
    } else {
      returnStyle.flexDirection = 'row';
    }
    return returnStyle;
  }, [direction, align]);

  return (
    <div className={classNames} style={spaceStyles}>
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
  );
};

export default memo(Space);
