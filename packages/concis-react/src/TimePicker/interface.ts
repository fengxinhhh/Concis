import { CSSProperties } from 'react';

interface TimePickerProps {
  /**
   * @description 自定义样式
   * @default
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   * @default
   */
  className?: string;
  /**
   * @description 出现方位
   * @default bottom
   */
  align?: string;
  /**
   * @description 默认时间
   * @default 目前时间
   */
  defaultTime?: string;
  /**
   * @description 是否展示清除按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 占位字符
   * @default
   */
  placeholder?: string;
  /**
   * @description 处理确认事件
   * @default
   */
  handleConfirm?: Function;
  /**
   * @description 清除回调
   * @default
   */
  clearCallback?: Function;
  /**
   * @description 改变回调
   * @default
   */
  changeCallback?: Function;
  /**
   * @description 禁用小时验证函数
   * @default
   */
  disableHour?: Function;
  /**
   * @description 禁用分钟验证函数
   * @default
   */
  disableMin?: Function;
  /**
   * @description 禁用秒验证函数
   * @default
   */
  disableSecond?: Function;
}

export type { TimePickerProps };
