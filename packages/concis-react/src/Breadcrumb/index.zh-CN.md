---
title: Breadcrumb 面包屑
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
---

# Breadcrumb 面包屑

面包屑是辅助导航模式，用于识别页面在层次结构内的位置，并根据需要向上返回。

## 基本使用

最基础的面包屑菜单。

<code src="./demos/index1.tsx"></code>

## 自定义分隔符

配置 `separator` 参数，自定义分隔符。

<code src="./demos/index2.tsx"></code>

## 自定义尺寸

通过自定义面包屑组件样式，自定义尺寸大小。

<code src="./demos/index3.tsx"></code>

## 自定义内容

每个 `Breadcrumb.Item` 都是一个 `ReactNode` ，可以传入文本外的任意元素。

<code src="./demos/index4.tsx"></code>

## 省略

配置 `maxCount` 指定最多显示面包屑数量，多余以 `...` 形式隐藏。

<code src="./demos/index5.tsx"></code>

## API

| Name      | Description  | Type                 | Default |
| --------- | ------------ | -------------------- | ------- |
| className | 自定义类名   | `string`             | `--`    |
| style     | 自定义样式   | `CSSProperties`      | `{}`    |
| separator | 自定义分隔符 | `ReactNode / string` | `/`     |
| maxCount  | 最大显示数量 | `number`             | `--`    |

## Breadcrumb.Item

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| className | 自定义类名  | `string`        | `--`    |
| style     | 自定义样式  | `CSSProperties` | `--`    |
