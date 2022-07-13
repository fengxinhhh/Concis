import { ReactNode } from 'react';

interface SwitchProps<T> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 小型按钮
   * @default false
   */
  small?: boolean;
  /**
   * @description 默认选中
   * @default false
   */
  defaultChecked?: T;
  /**
   * @description 选中文字

   */
  checkedChildren?: T | ReactNode;
  /**
   * @description 未选中文字
   */
  unCheckedChildren?: T | ReactNode;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * @description 改变回调函数
   */
  handleChange?: Function;
}

export type { SwitchProps };
