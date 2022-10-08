import { ReactNode, CSSProperties } from 'react';

type ButtonProps = {
  // 自定义button接口
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 按钮主题
   * @default primary
   */
  type?: 'primary' | 'danger' | 'warning' | 'info' | 'text';
  /**
   * @description 宽度
   */
  width?: Number;
  /**
   * @description 高度
   */
  height?: Number;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 字体按钮
   * @default false
   */
  circle?: Boolean;
  /**
   * @description 按钮边框为虚线
   * @default false
   */
  dashed?: Boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 图标按钮
   */
  icon?: ReactNode;
  /**
   * @description 按钮点击回调事件
   */
  handleClick?: Function;
};
interface ButtonGroupProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 样式
   */
  style?: CSSProperties;
  children?: ReactNode;
}

export type { ButtonProps, ButtonGroupProps };
