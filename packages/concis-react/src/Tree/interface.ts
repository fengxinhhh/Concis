import { CSSProperties } from 'react';

interface treeProps {
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
  treeData: Array<treeNode>;
  /**
   * @description 宽度
   * @default 200px
   */
  width?: string;
  /**
   * @description 支持搜索
   * @default false
   */
  avaSearch?: boolean;
  /**
   * @description 支持多选
   * @default false
   */
  avaChooseMore?: boolean;
  /**
   * @description 全展开
   * @default false
   */
  defaultOpen?: boolean;
  /**
   * @description 选择回调函数
   */
  chooseCallback?: Function;
}

interface treeNode {
  title: string;
  value: string;
  level?: number;
  height?: string;
  children?: Array<treeNode>;
}

export type { treeProps, treeNode };
