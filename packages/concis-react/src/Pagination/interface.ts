import { CSSProperties } from 'react';

interface PaginationProps {
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 默认页码
   * @default 1
   */
  defaultIndex?: number;
  /**
   * @description 总数据条数
   * @default 0
   */
  total: number;
  /**
   * @description 显示每页条数Select
   * @default false
   */
  showSizeChanger?: Boolean;
  /**
   * @description 每页条数配置
   * @default 每页10条数据
   */
  pageSizeOptions?: Array<number>;
  /**
   * @description 显示跳转页面输入框
   * @default false
   */
  showJumpInput?: Boolean;
  /**
   * @description 改变页码后的回调
   * @default {}
   */
  changePageCallback?: Function;
  /**
   * @description 改变每页显示后的回调
   * @default {}
   */
  changePageSizeCallback?: Function;
}

export type { PaginationProps };
