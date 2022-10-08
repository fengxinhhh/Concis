import { CSSProperties } from 'react';

interface MessageProps<T> {
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   * @default {}
   */
  className?: string;
  /**
   * @description 对象类型传参时的内容
   */
  content?: T;
  /**
   * @description Message类型
   */
  type?: 'info' | 'success' | 'warning' | 'error' | 'normal' | 'loading';
  /**
   * @description 显示时间
   * @default 3000ms
   */
  duration?: number;
  /**
   * @description 显示位置
   * @default top
   */
  position?: 'top' | 'bottom';
  /**
   * @description 出现可清除按钮
   * @default false
   */
  clearable?: boolean;
  /**
   * @description 暗黑模式
   * @default false
   */
  dark?: boolean;
  messageBoxId?: string;
}

export type { MessageProps };
