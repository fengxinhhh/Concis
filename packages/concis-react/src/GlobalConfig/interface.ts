import { ReactNode } from 'react';

interface GlobalConfigProps {
  children?: ReactNode;
  /**
   * @description 主题颜色
   * @default #325DFF
   */
  globalColor?: string;
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
