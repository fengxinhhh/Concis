import { ReactNode, CSSProperties } from 'react';

interface CollapseItemProps {
  children?: ReactNode;
  /**
   * @description 类名
   */
  className?: string;
  /**
   * @description 头部内容
   * @default <></>
   */
  header?: string;
  /**
   * @description 层级下标
   * @default 1
   */
  listKey?: number | string;
  /**
   * @description 禁止展开
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 头部右侧内容
   * @default <></>
   */
  extra?: ReactNode;
}

interface CollapseProps {
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
   * @description 默认展开列表
   * @default []
   */
  defaultActive?: Array<string | number>;
  /**
   * @description 手风琴
   * @default false
   */
  accordion?: boolean;
  /**
   * @description 无边框
   * @default false
   */
  noBorder?: boolean;
  /**
   * @description 头部对齐方式
   * @default left
   */
  headerAlign?: string;
  /**
   * @description 懒加载
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * @description 切换回调函数，返回打开列表的listKey
   */
  toggleCallback?: Function;
}

interface CollapseHeaderProps {
  /**
   * @description 头部对齐方式
   * @default left
   */
  headerAlign?: string;
  /**
   * @description 头部内容
   * @default <></>
   */
  header?: string;
  /**
   * @description 头部右侧内容
   * @default <></>
   */
  extra?: ReactNode;
  /**
   * @description 头部高度
   * @default 0
   */
  headerHeight?: CSSProperties;
}

export type { CollapseItemProps, CollapseProps, CollapseHeaderProps };
