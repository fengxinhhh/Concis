---
title: Divider 分割线
nav:
  title: 组件
  path: /common
group:
  title: 布局
mobile: false
---

# Divider 分割线

<p>分隔内容的文档分割线</p>

#### 何时使用

- 对不同章节的文本段落进行分割。

- 对行内文字/链接进行分割，例如表格的操作列。

## 基本用法

基础分割线组件。

<code src="./demos/index1.tsx"></code>

## 字体大小

通过 `fontSize` 自定义字体大小。

<code src="./demos/index2.tsx"></code>

## 对齐方式

通过 `align` 选择对齐方式，默认为 `center`。

<code src="./demos/index4.tsx"></code>

## API

| Name      | Description | Type                    | Default  |
| --------- | ----------- | ----------------------- | -------- |
| style     | 自定义样式  | `CSSProperties`         | `--`     |
| className | 类名        | `string`                | `--`     |
| fontSize  | 字体大小    | `string`                | `14px`   |
| align     | 对齐方式    | `left / right / center` | `center` |
