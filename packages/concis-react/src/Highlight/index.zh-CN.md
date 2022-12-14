---
title: Lightlight 高亮
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Lightlight 高亮

在一段文本中根据关键词高亮展示。

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"></code>

## 多关键词

支持 `query` 传入多个关键词。

<code src="./demos/index2.tsx"></code>

## 高亮样式

通过 `styles` 设置高亮样式，`px`、`py` 代表横向、纵向 `padding`；`mx`、`my` 代表横向、纵向 `margin`；`rounded` 代表圆角；`bg` 代表自定义背景颜色。

<code src="./demos/index3.tsx"></code>

## API

| Name      | Description | Type            | Default |
| --------- | ----------- | --------------- | ------- |
| style     | 自定义样式  | `CSSProperties` | `--`    |
| className | 类名        | `string`        | `--`    |
| children  | 字段        | `string`        | `--`    |
| query     | 关键字      | `string[]`      | `[]`    |
| styles    | 高亮样式    | `stylesType`    | `--`    |

## stylesType API

| Name    | Description | Type              | Default   |
| ------- | ----------- | ----------------- | --------- |
| px      | 横向内间距  | `string / number` | `5px`     |
| py      | 纵向内间距  | `string / number` | `0`       |
| mx      | 横向外间距  | `string / number` | `0`       |
| my      | 横向外间距  | `string / number` | `0`       |
| rounded | 圆角        | `boolean`         | `false`   |
| bg      | 背景色      | `string`          | `#b2f5ea` |
