import { ReactNode, CSSProperties } from 'react';

interface badgeProps {
  children?: ReactNode;
  /**
   * @description 自定义类名
   * @default {}
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 徽标数字值
   * @default '''
   */
  count?: number | ReactNode;
  /**
   * @description 徽标最大值
   * @default 99
   */
  maxCount?: number;
  /**
   * @description 小圆点样式
   * @default {}
   */
  dotStyle?: CSSProperties;
  /**
   * @description 使用小圆点
   * @default false
   */
  dot?: boolean;
  /**
   * @description 小圆点位置值
   * @default [2, 2]
   */
  offset?: Array<number>;
  /**
   * @description 小圆点文本值
   * @default ''
   */
  text?: string;
}

export type { badgeProps };
