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
   */
  onOk?: Function;
  /**
   * @description 取消关闭回调函数
   */
  onCancel?: Function;
}
type DialogStyle = {
  width?: string;
  height?: string;
  opacity?: string;
};

export type { ModalProps, DialogStyle };
