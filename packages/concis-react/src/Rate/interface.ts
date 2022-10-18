import { CSSProperties } from 'react';

interface RateProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 星星个数
   * @default 5
   */
  num?: number;
  /**
   * @description 颜色
   */
  starColor?: string;
  /**
   * @description 默认显示个数
   * @default num || 0
   */
  defaultShow?: number;
  /**
   * @description 双击清除
   * @default false
   */
  avaClear?: boolean;
  /**
   * @description 只读
   * @default false
   */
  readonly?: boolean;
  /**
   * @description 选择回调函数
   */
  chooseCallback?: Function;
}

export type { RateProps };
