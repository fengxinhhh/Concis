import React, { ReactNode } from 'react';
interface tableProps {
  /**
   * @description 表头配置项
   * @default []
   */
  titleParams: Array<object>;
  /**
   * @description 表内容配置项
   * @default []
   */
  tableData: Array<object>;
  /**
   * @description 表格对齐方式
   * @default left
   */
  align?: string;
  /**
   * @description 列宽
   * @default 配置在titleParams中，添加参数，如 width: "400"
   */
  width?: string;
  /**
   * @description 展开行
   * @default 接受自定义参数，回调函数传入展开行内容
   */
  expandedRowRender?: Function;
  /**
   * @description 单选
   * @default false
   */
  radio?: boolean;
  /**
   * @description 多选
   * @default false
   */
  checked?: boolean;
  /**
   * @description 单选回调
   */
  radioSelectCallback?: Function;
  /**
   * @description 多选回调
   */
  checkedSelectCallback?: Function;
}
interface groupProps {
  prop: string;
  width: string | number;
  data: any;
  tableProps: any;
}

export type { tableProps, groupProps };
