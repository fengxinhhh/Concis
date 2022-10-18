---
title: Pagination 分页器
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
---

# Pagination 分页器

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；
- 可切换页码浏览数据。

## 基本使用

基础分页器。

<code src="./demos/index1.tsx"/>

## 大数据分页

当 `total` 数据量大时，自动展示为大数据分页状态。

<code src="./demos/index2.tsx"/>

## 每页条数限制

配置 `showSizeChanger` 增加每页显示条数限制 `select`。

<code src="./demos/index3.tsx"/>

## 输入框跳转

配置 `showJumpInput` 实现跳转式分页器，

<code src="./demos/index4.tsx"/>

## API

| Name                   | Description          | Type            | Default |
| ---------------------- | -------------------- | --------------- | ------- |
| className              | 自定义类名           | `string`        | `--`    |
| style                  | 自定义样式           | `CSSProperties` | `--`    |
| defaultIndex           | 默认页码             | `number`        | `1`     |
| total                  | 总数据条数           | `number`        | `0`     |
| showSizeChanger        | 显示每页条数 Select  | `boolean`       | `false` |
| pageSizeOptions        | 每页条数配置         | `number[]`      | `10`    |
| showJumpInput          | 显示跳转页面输入框   | `boolean`       | `false` |
| changePageCallback     | 改变页码后的回调     | `Function`      | `--`    |
| changePageSizeCallback | 改变每页显示后的回调 | `Function`      | `--`    |
