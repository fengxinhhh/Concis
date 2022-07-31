import { ReactNode, CSSProperties } from 'react';

interface DrawerProps {
  /**
   * @description 类名
   */
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /**
   * @description 标题
   * @default ''
   */
  title?: string | ReactNode;
  /**
   * @description 显示状态
   * @default false
   */
  visible?: boolean;
  /**
   * @description 出现位置
   * @default right
   */
  align?: 'left' | 'right' | 'top' | 'bottom';
  /**
   * @description 确认按钮props
   * @default type -> primary
   */
  okButtonProps?: object;
  /**
   * @description 取消按钮props
   * @default type -> text
   */
  cancelButtonProps?: object;
  /**
   * @description 自定义页脚
   * @default 确定、取消按钮
   */
  footer?: ReactNode;
  /**
   * @description 确认按钮文字
   * @default 确定
   */
  okText?: string;
  /**
   * @description 取消按钮文字
   * @default 取消
   */
  cancelText?: string;
  /**
   * @description 对话框宽度百分比
   * @default 520px
   */
  width?: number | string;
  /**
   * @description 确认回调函数
   * @default () =>
   */
  onOk?: Function;
  /**
   * @description 取消关闭回调函数
   * @default () =>
   */
  onCancel?: Function;
  /**
   * @description 调用式函数Modal内容
   */
}
type DialogStyle = {
  width?: string;
  height?: string;
  opacity?: string;
};

export type { DrawerProps, DialogStyle };
