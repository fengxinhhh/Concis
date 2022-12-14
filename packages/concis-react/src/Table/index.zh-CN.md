---
title: Table 表格
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Table 表格

用于数据收集展示、分析整理、操作处理。

## 基本使用

基础表格。

<code src="./demos/index1.tsx"></code>

## 对齐方式与宽度

配置表头数据和 `align` 自定义宽度和对齐方式。

<code src="./demos/index2.tsx"></code>

## 展开行

配置 `expandedRowRender` 回调函数对展开行进行配置。

<code src="./demos/index3.tsx"></code>

## 单选

配置 `radio` 以支持单选，`radioSelectCallback` 获取选择结果。

<code src="./demos/index4.tsx"></code>

## 多选

配置 `checked` 以支持多选，`checkedSelectCallback` 获取选择结果。

<code src="./demos/index5.tsx"></code>

## 排序

配置表头数组结构 `sorter`，默认排序设定值为 `true` 即可，自定义排序可设定为数组，`0` 下标位表示升序规则，`1` 下标位表示降序规则。

<code src="./demos/index6.tsx"></code>

## 筛选

配置表头数组结构 `filter`，以及组件传参 `filter`，开启筛选。

<code src="./demos/index11.tsx"></code>

### 以下虚拟列表滚动、懒加载、分页为大数据时的建议方案，无法同时使用，只能选择其一进行开发

## 虚拟列表滚动

`largeDateShowNum` 表示固定列展示的数据条数，默认 10 条，通过 virtualized 开启虚拟列表。

<code src="./demos/index7.tsx"></code>

## 懒加载

`largeDateShowNum` 表示初始展示条数，默认 10 条，通过 lazyLoad 开启懒加载。

<code src="./demos/index8.tsx"></code>

## 分页

通过 `pagination` 开启分页，通过 `paginationAlign` 改变分页对齐方式。

<code src="./demos/index9.tsx"></code>

## 拖拽

通过 `dropabled` 开启拖拽。

<code src="./demos/index10.tsx"></code>

## API

| Name                  | Description                                                         | Type                        | Default                                          |
| --------------------- | ------------------------------------------------------------------- | --------------------------- | ------------------------------------------------ |
| className             | 自定义类名                                                          | `string`                    | `--`                                             |
| style                 | 自定义样式                                                          | `CSSProperties`             | `--`                                             |
| titleParams           | 表头配置项                                                          | `Array<tableThType>`        | `[]`                                             |
| tableData             | 表内容配置项                                                        | `Array<string>`             | `[]`                                             |
| align                 | 表格对齐方式                                                        | `string`                    | `left`                                           |
| width                 | 列宽                                                                | `string`                    | `配置在titleParams中，添加参数，如 width: "400"` |
| expandedRowRender     | 展开行                                                              | `Function`                  | `接受自定义参数，回调函数传入展开行内容`         |
| radio                 | 单选                                                                | `boolean`                   | `false`                                          |
| checked               | 多选                                                                | `boolean`                   | `false`                                          |
| radioSelectCallback   | 单选回调                                                            | `Function`                  | `--`                                             |
| checkedSelectCallback | 多选回调                                                            | `Function`                  | `--`                                             |
| avableSort            | 支持排序                                                            | `boolean`                   | `--`                                             |
| filter                | 支持筛选                                                            | `boolean`                   | `false`                                          |
| sorter                | 表头中的排序规则，true 采用列默认排序，Array 采用自定义排序         | `boolean / Array<Function>` | `--`                                             |
| virtualized           | 虚拟列表，大数据量的解决方案之一，无法与 lazyLoad、pagination 并用  | `boolean`                   | `false`                                          |
| largeDateShowNum      | 懒加载、虚拟列表默认展示数据条数                                    | `number`                    | `10`                                             |
| lazyLoad              | 懒加载，大数据量的解决方案之一，无法与 virtualized、pagination 并用 | `boolean`                   | `false`                                          |
| pagination            | 分页，大数据量的解决方案之一，无法与 virtualized、lazyLoad 并用     | `boolean`                   | `false`                                          |
| paginationAlign       | 分页器对齐方式                                                      | `string`                    | `left`                                           |
| pageSizeOption        | 分页器每页展示配置                                                  | `Array<number>`             | `[10, 20, 30, 50]`                               |
| changePNumCallback    | 分页器改变页码回调函数                                              | `Function`                  | `--`                                             |
| changePSizeCallback   | 分页器改变每页数量回调函数                                          | `Function`                  | `--`                                             |
| dropabled             | 配置拖拽                                                            | `boolean`                   | `false`                                          |
| dropCallback          | 拖拽成功回调                                                        | `Function`                  | `--`                                             |

## tableThType API

| Name      | Description | Type                                          | Default |
| --------- | ----------- | --------------------------------------------- | ------- |
| title     | 标题        | `string / number`                             | `--`    |
| dataIndex | 索引值      | `string / number`                             | `--`    |
| width     | 宽度        | `string`                                      | `--`    |
| sorter    | 排序规则    | `boolean / Array<Function> / number / string` | `--`    |
| filter    | 筛选规则    | `boolean / string`                            | `--`    |
