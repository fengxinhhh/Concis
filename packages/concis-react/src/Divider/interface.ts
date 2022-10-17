import { ReactNode, CSSProperties } from 'react';

interface DividerProps {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 字体大小
   * @default 14px
   */
  fontSize?: Number;
  /**
   * @description 对齐方式
   * @default center
   */
  align?: 'left' | 'right' | 'center';
}

export type { DividerProps };
