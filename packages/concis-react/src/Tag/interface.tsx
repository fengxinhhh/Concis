import { CSSProperties, ReactNode } from 'react';

type sizeType = 'large' | 'medium' | 'default' | 'small';

interface TagProps {
  children?: ReactNode;
  /**
   * @description 自定义类名
   * @default string
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 标签字体颜色
   */
  color?: string;
  /**
   * @description 标签尺寸
   * @default default
   */
  size?: sizeType;
  /**
   * @description 标签背景颜色
   * @default string
   */
  tagBackground?: string;
  /**
   * @description 是否可选中
   * @default false
   */
  checkable?: boolean;
  /**
   * @description 是否可关闭
   * @default false
   */
  closeable?: boolean;
  /**
   * @description 默认选中
   * @default true
   */
  defaultChecked?: boolean;
  /**
   * @description 点击回调事件
   */
  clickCallback?: Function;
  /**
   * @description 选择回调事件
   */
  checkCallback?: Function;
  /**
   * @description 关闭回调事件
   */
  closeCallback?: Function;
}

export type { TagProps, sizeType };
