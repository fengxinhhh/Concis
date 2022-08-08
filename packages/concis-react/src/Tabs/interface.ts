import { ReactNode, CSSProperties } from 'react';

interface TabsProps {
  children?: ReactNode;
  changeHeaderActiveCallback?: Function;
  delHeaderCallback?: Function;
  addHeaderCallback?: Function;
  paneChildren?: any[];
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 默认选中的key
   */
  defaultActiveTab: string;
  /**
   * @description 出现方位
   * @default top
   */
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * @description Tabs类型
   * @default line
   */
  type?: 'line' | 'text' | 'round' | 'card';
  /**
   * @description Tabs大小
   * @default default
   */
  size?: 'mini' | 'small' | 'default' | 'large';
  /**
   * @description 导航栏右侧插槽
   * @default <></>
   */
  extra?: ReactNode;
  /**
   * @description 可编辑模式
   * @default false
   */
  editable?: boolean;
  /**
   * @description 可编辑模式下添加回调函数
   * @default 无返回参数
   */
  onAddTab?: Function;
  /**
   * @description 可编辑模式下删除回调函数
   * @default 返回删除的key
   */
  onDeleteTab?: (key: string) => any;
  /**
   * @description 切换Tabs回调函数
   * @default 返回切换后当前key
   */
  onChange?: (key: string) => any;
}
interface TabsPaneProps {
  key: string;
  title: string;
  children?: ReactNode;
  disabled?: boolean;
}
interface TabsHeaderProps {
  paneChildren?: any[];
  defaultActiveTab?: string;
  extra?: ReactNode;
  tabPosition?: 'top' | 'bottom' | 'left' | 'right';
  changeHeaderActiveCallback?: (active: string) => void;
}
interface TabsContentProps {
  paneChildren: any[];
  defaultActiveTab?: string;
}

export type { TabsProps, TabsPaneProps, TabsHeaderProps, TabsContentProps };
