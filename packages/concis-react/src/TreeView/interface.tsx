import { CSSProperties } from 'react';

type treeViewProps = {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description Tree配置参数
   */
  treeData: Array<treeData>;
  /**
   * @description 默认展开
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * @description 可拖拽
   * @default false
   */
  avaDrop?: boolean;
  /**
   * @description 动态加载
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * @description 动态加载等待时延
   * @default 1000ms
   */
  lazyLoadWaitSecond?: number;
  /**
   * @description 选中回调函数
   */
  checkCallback?: Function;
  /**
   * @description 拖拽回调函数
   */
  dropCallback?: Function;
};
interface treeData {
  title: string;
  value: string;
  group: number;
  level?: number;
  prev?: treeData | null;
  height?: string;
  disabled?: boolean;
  checked?: boolean;
  hasOpen?: boolean;
  children?: Array<treeData>;
}

type loadingTreeNodeType = {
  group: number;
  value: string;
  title: string;
};

export type { treeViewProps, treeData, loadingTreeNodeType };
