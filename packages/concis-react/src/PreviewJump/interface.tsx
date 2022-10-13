import { CSSProperties, ReactNode } from 'react';

interface PreviewJumpProps {
  /**
   * @description 预览区域内容
   */
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
   * @description 自定义预览遮罩层图标
   * @default eye icon
   */
  icon?: ReactNode;
  /**
   * @description 自定义预览遮罩层文本
   * @default See more
   */
  jumpText?: ReactNode | string;
  /**
   * @description 自定义预览遮罩层内容
   */
  jumpContent?: ReactNode;
  /**
   * @description 跳转链接
   */
  link?: string;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
}

export type { PreviewJumpProps };
