import { ReactNode, CSSProperties } from 'react';

interface LinkProps {
  children?: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 跳转链接
   */
  href?: string;
  /**
   * @description 状态
   * @default primary
   */
  status?: 'primary' | 'error' | 'success' | 'warning';
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 图标状态
   * @default false
   */
  icon?: boolean | ReactNode;
}

export type { LinkProps };
