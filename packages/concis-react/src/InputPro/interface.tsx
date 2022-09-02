import { CSSProperties } from 'react';

type optionParams = {
  label: string;
  disabled?: boolean;
};
interface InputProProps<T> {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 列表配置项
   */
  option?: optionParams[];
  /**
   * @description 对齐方式
   * @default top
   */
  align?: T;
  /**
   * @description 选择后的回调函数
   */
  handleClick?: Function;
  /**
   * @description 文本框改变的回调函数
   */
  handleChange?: Function;
  /**
   * @description 文本框清空的回调函数
   */
  handleClear?: Function;
}

export type { InputProProps, optionParams };
