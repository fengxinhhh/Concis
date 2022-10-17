import { CSSProperties } from 'react';

interface YearPickerProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 设置日期的格式化
   * @default YYYY-MM-DD
   */
  format?: string;
  /**
   * @description 显示日期重置按钮
   * @default false
   */
  showClear?: boolean;
  /**
   * @description 方向
   * @default top
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
interface YearItemProps {
  value: string;
  date: Date;
  disable: boolean;
}

export type { YearPickerProps, YearItemProps };
