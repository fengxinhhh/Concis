import { ReactNode } from 'react';

interface ModalProps {
  /**
   * @description 类名
   */
  className?: string;
  children?: ReactNode;
  /**
   * @description 标题
   * @default ''
   */
  title?: string;
  /**
   * @description 显示状态
   * @default false
   */
  visible?: boolean;
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
  content?: ReactNode;
  confirm?: boolean;
  type?: ConfirmType;
  isPromiseOk?: boolean;
  isPromiseCancel?: boolean;
}
type DialogStyle = {
  width?: string;
  height?: string;
  opacity?: string;
};
type ConfirmType = 'info' | 'success' | 'warning' | 'error';

export type { ModalProps, DialogStyle, ConfirmType };
