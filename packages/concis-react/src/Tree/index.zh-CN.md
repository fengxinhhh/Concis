---
title: Tree 树选择器
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
toc: content
---

# Tree 树选择器

树形选择控件。

## 何时使用

类似 Select 的选择控件，可选择的数据结构是一个树形结构时，可以使用 TreeSelect，例如公司层级、学科系统、分类目录等等。

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"></code>

## 搜索

通过 `avaSearch` 搜索。

<code src="./demos/index2.tsx"></code>

## 默认展开

配置 `defaultOpen` 默认展开所有节点。

<code src="./demos/index3.tsx"></code>

## 多选

通过 `avaChooseMore` 支持多选。

<code src="./demos/index4.tsx"></code>

## API

| Name           | Description   | Type              | Default |
| -------------- | ------------- | ----------------- | ------- |
| className      | 类名          | `string`          | `--`    |
| style          | 自定义样式    | `CSSProperties`   | `--`    |
| treeData       | Tree 配置参数 | `Array<treeNode>` | `[]`    |
| width          | 宽度          | `string`          | `200px` |
| avaSearch      | 支持搜索      | `boolean`         | `false` |
| avaChooseMore  | 支持多选      | `boolean`         | `false` |
| defaultOpen    | 全展开        | `boolean`         | `false` |
| chooseCallback | 选择回调函数  | `Function`        | `--`    |

## treeNode API

| Name     | Description | Type              | Default |
| -------- | ----------- | ----------------- | ------- |
| title    | 标题        | `string`          | `--`    |
| value    | 选中内容    | `string`          | `--`    |
| children | 子节点      | `Array<treeNode>` | `[]`    |
