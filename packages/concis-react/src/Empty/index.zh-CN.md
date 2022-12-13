---
title: Empty 空状态
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
toc: content
---

# Empty 空状态

指当前场景没有对应的数据内容，呈现出的一种状态。

## 基本使用

基础用法。

<code src="./demos/index1.tsx"></code>

## 自定义图标

通过 `icon` ，配置自定义图标。

<code src="./demos/index2.tsx"></code>

## 自定义文案

通过 `description` ，配置自定义文案。

<code src="./demos/index3.tsx"></code>

## API

| Name        | Description | Type                 | Default    |
| ----------- | ----------- | -------------------- | ---------- |
| style       | 自定义样式  | `CSSProperties`      | `--`       |
| className   | 类名        | `string`             | `--`       |
| icon        | 自定义图标  | `ReactNode`          | `--`       |
| description | 自定义文案  | `string / ReactNode` | `暂无数据` |
