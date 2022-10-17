import { ReactNode, CSSProperties } from 'react';

type checkGroup = {
  label: string;
  value: string | number;
  checked?: boolean;
  disabled?: boolean;
};
interface checkBoxProps {
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
   * @description 默认选中状态
   * @default false
   */
  checked?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 多选组配置
   */
  group?: Array<checkGroup>;
  /**
   * @description 多选框选中回调函数
   */
  checkCallback?: Function;
  /**
   * @description 多选组改变回调函数
   */
  checkGroupCallback?: Function;
}

export type { checkBoxProps, checkGroup };
