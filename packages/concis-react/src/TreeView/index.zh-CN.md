---
title: TreeView 树型控件
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# TreeView 树型控件

多层次的结构列表。

## 何时使用

文件夹、组织架构、生物分类、国家地区等等，世间万物的大多数结构都是树形结构。使用 树控件 可以完整展现其中的层级关系，并具有展开收起选择等交互功能。

## 基本使用

最基本的树形控件。

<code src="./demos/index1.tsx"/>

## 默认展开

配置 `defaultOpen` 默认展开树。

<code src="./demos/index2.tsx"/>

## 禁用

通过 `treeData` 中设置 `disabled`，单项禁用。

<code src="./demos/index3.tsx"/>

## 可拖拽

配置 `avaDrop` 开启拖拽模式，可通过 `dropCallback` 回调函数获取拖拽后的 `treeData`。

<code src="./demos/index4.tsx"/>

## 动态加载

配置 `lazyLoad` 开启首次展开动态加载，可通过 `lazyLoadWaitSecond` 设置延时，默认 `1000ms`。

<code src="./demos/index5.tsx"/>

## API

| Name               | Description      | Type              | Default  |
| ------------------ | ---------------- | ----------------- | -------- |
| className          | 类名             | `string`          | `--`     |
| style              | 自定义样式       | `CSSProperties`   | `--`     |
| treeData           | Tree 配置参数    | `Array<treeData>` | `[]`     |
| defaultOpen        | 默认展开         | `boolean`         | `false`  |
| disabled           | 禁用             | `boolean`         | `false`  |
| avaDrop            | 可拖拽           | `boolean`         | `false`  |
| lazyLoad           | 动态加载         | `boolean`         | `false`  |
| lazyLoadWaitSecond | 动态加载等待时延 | `number`          | `1000ms` |
| checkCallback      | 选中回调函数     | `Function`        | `--`     |
| dropCallback       | 拖拽回调函数     | `Function`        | `--`     |

## treeData API

| Name     | Description | Type              | Default |
| -------- | ----------- | ----------------- | ------- |
| title    | 标题        | `string`          | `--`    |
| value    | 选中内容    | `string`          | `--`    |
| group    | 节点分组    | `number`          | `--`    |
| children | 子节点      | `Array<treeData>` | `[]`    |
