---
title: Collapse 折叠面板
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
toc: content
---

# Collapse 折叠面板

可以折叠 / 展开的内容区域。

## 基本使用

用于将复杂的内容区域分组和隐藏，可折叠或展开，默认可以展开多个面板，也可以只展开某几个面板。

<code src="./demos/index1.tsx"></code>

## 手风琴

手风琴模式

<code src="./demos/index2.tsx"></code>

## 无边框

<code src="./demos/index6.tsx"></code>

## 右侧节点

extra 配置每个层级的头部右侧内容

<code src="./demos/index3.tsx"></code>

## 展开图标位置

可配置 headerAlign 进行头部布局切换或隐藏，可选值有 left、right、hide <code src="./demos/index4.tsx"></code>

## 懒加载

首次展开，加载 DOM

<code src="./demos/index5.tsx"></code>

## API

| Name           | Description                          | Type                     | Default |
| -------------- | ------------------------------------ | ------------------------ | ------- |
| style          | 自定义样式                           | `CSSProperties`          | `--`    |
| className      | 类名                                 | `string`                 | `--`    |
| defaultActive  | 默认展开列表                         | `Array<string / number>` | `[]`    |
| accordion      | 手风琴                               | `boolean`                | `false` |
| noBorder       | 无边框                               | `boolean`                | `false` |
| headerAlign    | 头部对齐方式                         | `string`                 | `left`  |
| lazyLoad       | 懒加载                               | `boolean`                | `false` |
| toggleCallback | 切换回调函数，返回打开列表的 listKey | `Function`               | `--`    |

## CollapseItem API

| Name      | Description  | Type              | Default |
| --------- | ------------ | ----------------- | ------- |
| className | 类名         | `string`          | `--`    |
| header    | 头部内容     | `string`          | `<></>` |
| listKey   | 层级下标     | `number / string` | `1`     |
| disabled  | 禁止展开     | `boolean`         | `false` |
| extra     | 头部右侧内容 | `ReactNode`       | `<></>` |
