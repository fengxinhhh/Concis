import { ReactNode, CSSProperties } from 'react';

interface BreadcrumbProps {
  children?: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 自定义分隔符
   * @default /
   */
  separator?: ReactNode | string;
  /**
   * @description 最大显示数量
   */
  maxCount?: number;
}

interface BreadcrumbItemProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export type { BreadcrumbProps, BreadcrumbItemProps };
