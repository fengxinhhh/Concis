import { CSSProperties } from 'react';

interface tableProps {
  /**
   * @description 自定义类名
   */
  className?: string;
  /**
   * @description 自定义样式
   */
  style?: CSSProperties;
  /**
   * @description 表头配置项
   * @default []
   */
  titleParams: Array<tableThType>;
  /**
   * @description 表内容配置项
   * @default []
   */
  tableData: Array<any>;
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
  /**
   * @description 支持排序
   * @default false
   */
  avableSort?: boolean;
  /**
   * @description 支持筛选
   * @default false
   */
  filter?: boolean;
  /**
   * @description 表头中的排序规则，true采用列默认排序，Array采用自定义排序
   * @default ''
   */
  sorter?: boolean | Array<Function>;
  /**
   * @description 虚拟列表，大数据量的解决方案之一，无法与lazyLoad、pagination并用
   * @default false
   */
  virtualized?: boolean;
  /**
   * @description 懒加载、虚拟列表默认展示数据条数
   * @default 10
   */
  largeDateShowNum?: number;
  /**
   * @description 懒加载，大数据量的解决方案之一，无法与virtualized、pagination并用
   * @default false
   */
  lazyLoad?: boolean;
  /**
   * @description 分页，大数据量的解决方案之一，无法与virtualized、lazyLoad并用
   * @default false
   */
  pagination?: boolean;
  /**
   * @description 分页器对齐方式
   * @default left
   */
  paginationAlign?: string;
  /**
   * @description 分页器每页展示配置
   * @default [10, 20, 30, 50]
   */
  pageSizeOption?: Array<number>;
  /**
   * @description 分页器改变页码回调函数
   */
  changePNumCallback?: Function;
  /**
   * @description 分页器改变页码回调函数
   */
  changePSizeCallback?: Function;
  /**
   * @description 配置拖拽
   * @default false
   */
  dropabled?: boolean;
  /**
   * @description 拖拽成功回调
   */
  dropCallback?: Function;
}
interface tableThType {
  title: string | number;
  dataIndex: string | number;
  width?: string;
  sorter?: boolean | Array<Function> | number | string;
  filter?: boolean | string;
}
export type { tableProps, tableThType };
