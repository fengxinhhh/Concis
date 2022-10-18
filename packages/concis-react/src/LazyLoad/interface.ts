import { ReactNode, CSSProperties } from 'react';

interface LazyLoadProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 延迟加载
   * @default 0ms
   */
  delay?: number;
}

export type { LazyLoadProps };
