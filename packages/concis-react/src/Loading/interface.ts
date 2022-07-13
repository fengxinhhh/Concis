import { ReactNode, CSSProperties } from 'react';

interface LoadingProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 加载Icon类型
   * @default default
   */
  type?: 'default' | 'dot' | 'strip';
  /**
   * @description 配置蒙层
   * @default false
   */
  mask?: boolean;
  /**
   * @description 加载文字
   * @default '''
   */
  loadingText?: string;
  /**
   * @description 自定义图标
   * @default ''
   */
  icon?: ReactNode;
  /**
   * @description 自定义宽度
   * @default 2em
   */
  width?: string;
  /**
   * @description 自定义高度
   * @default 2em
   */
  height?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
}

export type { LoadingProps };
