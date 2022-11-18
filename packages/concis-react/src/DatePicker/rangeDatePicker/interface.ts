import { CSSProperties } from 'react';

interface RangeProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定样式
   */
  style?: CSSProperties;
  /**
   * @description 显示日期重置按钮
   * @default false
   */
  showClear?: Boolean;
  /**
   * @description 方向
   * @default bottom
   */
  align?: 'left' | 'right' | 'bottom' | 'top';
  /**
   * @description 日期改变回调函数
   */
  handleChange?: Function;
}

export type { RangeProps };
