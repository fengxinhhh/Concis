import { CSSProperties } from 'react';

interface MessageProps {
  /**
   * @description 对象类型传参时的内容
   */
  content?: string;
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
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
}

export type { MessageProps };
