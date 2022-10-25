import { CSSProperties } from 'react';

interface Options {
  label: String | number;
  value: String | number;
  disabled?: Boolean;
}

interface SelectProps {
  /**
   * @description 选择器数据
   * @default []
   */
  option: Array<Options>;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 宽度
   * @default 80px
   */
  width?: Number;
  /**
   * @description 提示
   */
  placeholder?: String;
  /**
   * @description 禁用状态
   * @default false
   */
  disabled?: Boolean;
  /**
   * @description 加载状态
   * @default false
   */
  loading?: Boolean;
  /**
   * @description 可输入状态
   * @default false
   */
  showSearch?: Boolean;
  /**
   * @description 可输入状态下清除
   * @default false
   */
  clearable?: Boolean;
  /**
   * @description 状态
   * @default false
   */
  type?: 'primary' | 'warning' | 'error' | 'success';
  /**
   * @description 选择后的回调
   * @default {}
   */
  handleSelectCallback?: Function;
  /**
   * @description 输入后的回调
   * @default {}
   */
  handleTextChange?: Function;
}

export type { SelectProps, Options };
