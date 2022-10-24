import { ReactNode, CSSProperties } from 'react';

interface ZoomboxProps {
  /**
   * @description 插槽
   */
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
   * @description 禁止选中文本
   * @default false
   */
  notAllowed?: boolean;
  /**
   * @description 无边框
   * @default false
   */
  noBorder?: boolean;
  /**
   * @description 最小宽度
   * @default 0
   */
  minWidth?: number;
  /**
   * @description 最小高度
   * @default 0
   */
  minHeight?: number;
  /**
   * @description 最大宽度
   * @default 0
   */
  maxWidth?: number;
  /**
   * @description 最大高度
   * @default 0
   */
  maxHeight?: number;
  /**
   * @description 拖动中回调函数
   */
  onMoving?: (e: MouseEvent, size: { width: number; height: number }) => void;
  /**
   * @description 拖动结束回调函数
   */
  onMovingEnd?: () => void;
  /**
   * @description 拖动开始回调函数
   */
  onMovingStart?: () => void;
}

export type { ZoomboxProps };
