import React, { ReactNode, Children, cloneElement } from 'react';
import { isNumber, isString, isArray } from 'lodash';

import { ConfigProps, useConfig } from '../config-provider';

import { getClassNames } from '../utils/class-names';
import { NativeProps } from '../utils/native-props';

export type SpaceProps = {
  /**
   * @description 间距大小。使用数组形式同时设置 [水平间距, 垂直间距]
   * @default middle
   */
  size?: number | number[] | ConfigProps['componentSize'];
  /**
   * @description 是否自动换行
   * @default false
   */
  wrap?: boolean;
  /**
   * @description 	将宽度调整为其父宽度的选项
   * @default false
   */
  block?: boolean;
  /**
   * @description 间距方向
   * @default horizontal
   */
  direction?: 'vertical' | 'horizontal';
  /**
   * @description 交叉轴对齐方式
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 主轴对齐方式
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
} & NativeProps;

export const Space: React.FC<SpaceProps> = (props) => {
  const {
    size,
    block = false,
    wrap = false,
    direction = 'horizontal',
    align,
    justify,
    className = '',
    children,
    onClick,
    ...restProps
  } = props;

  const { prefixCls, componentSize } = useConfig();

  const classPrefix = `${prefixCls}-space`;

  const _size = isString(size) ? size : undefined || componentSize;

  const classNames = getClassNames({
    [classPrefix]: true,
    [`${classPrefix}-${_size}`]: !!_size,
    [`${classPrefix}-block`]: block,
    [`${classPrefix}-wrap`]: wrap,
    [`${classPrefix}-${direction}`]: !!direction,
    [`${classPrefix}-align-${align}`]: !!align,
    [`${classPrefix}-justify-${justify}`]: !!justify,
    [className]: !!className,
  });

  const getStyles = () => {
    if (isArray(size)) {
      const [horizontalGap = 0, verticalGap = 0] = size;
      return { gap: `${verticalGap}px ${horizontalGap}px`, ...restProps.style };
    }
    if (isNumber(size)) {
      return { gap: size, ...restProps.style };
    }
    return restProps.style;
  };

  return (
    <div className={classNames} onClick={onClick} {...restProps} style={getStyles()}>
      {Children.map(children, (child) => {
        if (child === undefined || child === null) return null;
        return <div className={`${classPrefix}-item`}>{child}</div>;
      })}
    </div>
  );
};

export default Space;
