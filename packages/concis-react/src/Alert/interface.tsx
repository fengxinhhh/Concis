import { CSSProperties } from 'react';

interface AlertProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 类型
   * @default info
   */
  type?: 'info' | 'success' | 'warning' | 'error';
  /**
   * @description 显示标题
   * @default ''
   */
  title?: string;
  /**
   * @description 警告文字
   * @default ''
   */
  content: string;
  /**
   * @description 显示清除按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 显示警告提示图标
   * @default true
   */
  showIcon?: boolean;
  /**
   * @description 自定义关闭图标
   */
  closeElement?: React.ReactNode | string;
  /**
   * @description 关闭回调函数
   */
  onClose?: Function;
}

export type { AlertProps };
