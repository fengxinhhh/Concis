import { CSSProperties } from 'react';

interface DatePickerProps {
  /**
   * @description 自定义类名
   * @default ''
   */
  className?: string;
  /**
   * @description 自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 设置日期的格式化
   * @default YYYY-MM-DD
   */
  format?: string;
  /**
   * @description 设置日期区间选择器
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 方向
   * @default false
   */
  align?: string;
  /**
   * @description 选择完毕后的回调函数
   * @default Function
   */
  handleChange?: Function;
  /**
   * @description 验证是否禁用选项的函数
   * @default Function
   */
  disableCheck?: Function;
}
interface DateItemProps {
  value: string;
  date: Date;
  disable: boolean;
}
interface NowDateProps {
  year: number;
  month: number;
  day: number;
}

export type { DatePickerProps, DateItemProps, NowDateProps };
