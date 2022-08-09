import { ReactNode, CSSProperties } from 'react';

interface listProps {
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 列表自定义样式
   * @default {}
   */
  style?: CSSProperties;
  /**
   * @description 列表配置数据
   * @default []
   */
  dataSource: Array<any>;
  /**
   * @description 渲染函数
   */
  render: renderFnParams;
  /**
   * @description 列表头部内容
   * @default <></>
   */
  header?: string;
  /**
   * @description 列表尺寸
   * @default default
   */
  size?: 'default' | 'small' | 'large' | string;
  /**
   * @description 懒加载
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * @description 懒加载默认展示行数
   * @default 5
   */
  defaultShowNum?: number;
  /**
   * @description 虚拟列表
   * @default false
   */
  virtualListProps?: boolean;
  /**
   * @description 虚拟列表默认展示行数
   * @default 5
   */
  virtualShowNum?: number;
  /**
   * @description 懒加载滚动到底部监听
   */
  lazyScrollToBottom?: Function;
}
interface listItemProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
type listHeaderStyle = {
  padding?: string;
};
type listContentStyle = {
  height?: string;
  overflow?: string;
};
interface renderFnParams {
  (item: any, index: any): any;
}

export type { listProps, listItemProps, listHeaderStyle, listContentStyle };
