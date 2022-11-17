import { CSSProperties, ReactNode } from 'react';

interface popoverProps {
  children?: ReactNode;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 触发形式 hover/click
   * @default hover
   */
  type?: string;
  /**
   * @description 对齐方式 left/right/top/bottom
   * @default bottom
   */
  align?: string;
  /**
   * @description 卡片内容
   * @default <></>
   */
  content: ReactNode;
  /**
   * @description 卡片宽度
   * @default 200px
   */
  dialogWidth?: number | string;
  /**
   * @description 无边框
   * @default false
   */
  noBorder?: boolean;
  /**
   * @description 默认显示气泡卡片
   * @default false
   */
  defaultShow?: boolean;
  /**
   * @description 气泡卡片关闭依赖项
   * @default []
   */
  closeDeps?: Array<any>;
  /**
   * @description 卡片显示隐藏回调
   */
  onVisibleChange?: Function;
}

type alignStyle = {
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  border?: string;
  width: string;
};

type PopoverRef = {
  setShowDialog: (visible: boolean) => void;
};

export type { popoverProps, alignStyle, PopoverRef };
