import { ReactNode } from 'react';

interface GlobalConfigProps {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #1890FF
   */
  globalColor?: string;
  /**
   * @description Input输入框组件聚焦、点击时的外发光颜色
   * @default #C6F7FF
   */
  input?: string;
  /**
   * @description 全局组件类名前缀
   * @default concis
   */
  prefixCls?: any;
  /**
   * @description 深色模式
   * @default false
   */
  darkTheme?: boolean;
}

export type { GlobalConfigProps };
