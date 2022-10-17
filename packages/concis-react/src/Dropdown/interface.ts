import { CSSProperties, ReactNode } from 'react';

type dataType = {
  content: string;
  link: string;
  children?: dataType[];
  visible?: boolean;
  disabled?: boolean;
  icon?: ReactNode;
};
interface DropdownProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 配置数据项
   */
  data: string[] | dataType[];
  /**
   * @description 未选中展示文本
   * @default Please select
   */
  placeholder?: string;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 选中类型
   * @default click
   */
  type?: 'hover' | 'click';
  /**
   * @description 下拉菜单类型
   * @default default
   */
  status?: 'default' | 'primary' | 'error' | 'warning' | 'success';
  /**
   * @description 扁平化，多列并排
   * @default false
   */
  colums?: boolean;
  /**
   * @description 多列并排列表宽度
   * @default 500px
   */
  columsWidth?: number;
  /**
   * @description 出现位置
   * @default bottom
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export type { DropdownProps, dataType };
