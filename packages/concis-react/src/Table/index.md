---
title: Table
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Table

It is used for data collection, display, analysis and processing.

## Basic use

Basic table.

<code src="./demos/index1.tsx"/>

## Alignment and Width

Configure header data and `align` to customize width and alignment.

<code src="./demos/index2.tsx"/>

## Expand Row

Configure the `expandedRowRender` callback function to configure the expanded row.

<code src="./demos/index3.tsx" />

## Single choice

Configure `radio` to support single selection and `radioSelectCallback` to get the selection result.

<code src="./demos/index4.tsx" />

## Multiple choice

Configure `checked` to support multiple selection and `checkedSelectCallback` to get the selection result.

<code src="./demos/index5.tsx" />

## Sort

Configure the header array structure `sorter`, the default sort setting value is `true`, the custom sort can be set to an array, the `0` subscript bit represents the ascending order rule, and the `1` subscript bit represents the descending order rule.

<code src="./demos/index6.tsx" />

## Filter

Configure the header array structure `filter`, and the component parameter `filter` to enable filtering.

<code src="./demos/index11.tsx" />

## #The suggested schemes for scrolling, lazy loading and paging of the following virtual lists as big data cannot be used at the same time. Only one of them can be selected for development

## Virtual list scrolling

`largeDateShowNum` indicates the number of data displayed in a fixed column, the default is 10, and the virtual list is opened by virtualized.

<code src="./demos/index7.tsx" />

## Lazy loading

`largeDateShowNum` represents the initial number of displays, the default is 10, and lazy loading is enabled through lazyLoad.

<code src="./demos/index8.tsx" />

## Pagination

Turn on pagination with `pagination`, and change the pagination alignment with `paginationAlign`.

<code src="./demos/index9.tsx" />

## Drag

Enable drag and drop via `dropabled`.

<code src="./demos/index10.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Custom class name | `string` | `--` |
| style | Custom styles | `CSSProperties` | `--` |
| titleParams | Table header configuration items | `Array<tableThType>` | `[]` |
| tableData | Table content configuration items | `Array<string>` | `[]` |
| align | table alignment | `string` | `left` |
| width | Column width | `string` | `Configure in titleParams, add parameters, such as width: "400"` |
| expandedRowRender | Expand the row | `Function` | `Accepts custom parameters, and the callback function passes in the content of the expanded row` |
| radio | radio | `boolean` | `false` |
| checked | Multiple choice | `boolean` | `false` |
| radioSelectCallback | Radio Select Callback | `Function` | `--` |
| checkedSelectCallback | Multiple selection callback | `Function` | `--` |
| avableSort | support sorting | `boolean` | `--` |
| filter | support filtering | `boolean` | `false` |
| sorter | The sorting rule in the header, true uses the default sorting of the column, Array uses the custom sorting | `boolean / Array<Function>` | `--` |
| virtualized | Virtual list, one of the solutions for large data volume, cannot be used together with lazyLoad and pagination | `boolean` | `false` |
| largeDateShowNum | Lazy loading, default number of data displayed in virtual list | `number` | `10` |
| lazyLoad | Lazy loading, one of the solutions for large amounts of data, cannot be used together with virtualized and pagination | `boolean` | `false` |
| pagination | Pagination, one of the solutions for large data volume, cannot be used together with virtualized and lazyLoad | `boolean` | `false` |
| paginationAlign | pagination alignment | `string` | `left` |
| pageSizeOption | Pager page display configuration | `Array<number>` | `[10, 20, 30, 50]` |
| changePNumCallback | Pager change page number callback function | `Function` | `--` |
| changePSizeCallback | Pager changes the number of pages per page callback function | `Function` | `--` |
| dropabled | configure drag and drop | `boolean` | `false` |
| dropCallback | Drag success callback | `Function` | `--` |

## tableThType API

| Name      | Description  | Type                                          | Default |
| --------- | ------------ | --------------------------------------------- | ------- |
| title     | title        | `string / number`                             | `--`    |
| dataIndex | index value  | `string / number`                             | `--`    |
| width     | width        | `string`                                      | `--`    |
| sorter    | collation    | `boolean / Array<Function> / number / string` | `--`    |
| filter    | filter rules | `boolean / string`                            | `--`    |
