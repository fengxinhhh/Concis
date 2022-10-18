import { ReactNode, CSSProperties } from 'react';

interface RadioProps {
  children: ReactNode;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 禁用
   * @default 0
   */
  disabled?: Boolean;
}

interface RadioGroupProps {
  children: Array<Object>;
  style?: CSSProperties;
  className?: string;
  /**
   * @description 默认选中索引
   */
  value?: Number;
  /**
   * @description 支持手动扩展
   * @default false
   */
  canAddOption?: Boolean;
  /**
   * @description 扩展按钮文案
   * @default 'More...'
   */
  addOptionText?: number;
  /**
   * @description 方形样式
   * @default false
   */
  boxStyle?: Boolean;
  /**
   * @description 选项改变回调函数
   */
  onChange?: Function;
}

interface RadioItemProps {
  children: string;
  disabled: Boolean;
}

export type { RadioProps, RadioGroupProps, RadioItemProps };
