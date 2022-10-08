import { CSSProperties, ReactNode } from 'react';

interface EmptyProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义图标
   */
  icon?: ReactNode;
  /**
   * @description 自定义文案
   * @default 暂无数据
   */
  description?: string | ReactNode;
}

export type { EmptyProps };
