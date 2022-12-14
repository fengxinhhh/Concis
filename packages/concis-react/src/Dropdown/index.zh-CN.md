---
title: Dropdown 下拉菜单
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
toc: content
---

# Dropdown 下拉菜单

页面上的命令过多时，可将备选命令收纳到向下展开的浮层容器中。

## 基本用法

基础下拉菜单。

<code src="./demos/index1.tsx"></code>

## Hover 移入

通过 `type = hover`，配置为移入式下拉菜单。

<code src="./demos/index2.tsx"></code>

## 按钮式风格

提供 `status` 参数，切换为按钮式风格，共有`primary`、`error`、`warning`、`success` 四种。

<code src="./demos/index3.tsx"></code>

## 扁平化

配置 `colums` 参数，平面展开所有选项，列表宽度可通知 `columsWidth` 设置，默认 `500px`。

<code src="./demos/index4.tsx"></code>

## 弹出位置

配置 `position` 参数，选择菜单弹出位置，可选位置有 `top`、`bottom`、`left`、`right`，默认为 `bottom`。

<code src="./demos/index5.tsx"></code>

## 图标菜单

通过 `data` 中的 `icon`项，配置每个菜单项的图标。

<code src="./demos/index6.tsx"></code>

## 禁用

通过 `disabled` 禁用菜单，通过 `data` 中的 `disabled`，单项禁用。

<code src="./demos/index7.tsx"></code>

## API

| Name        | Description      | Type                                            | Default         |
| ----------- | ---------------- | ----------------------------------------------- | --------------- |
| style       | 自定义样式       | `CSSProperties`                                 | `--`            |
| className   | 类名             | `string`                                        | `--`            |
| data        | 配置数据项       | `string[] / dataType[]`                         | `--`            |
| placeholder | 未选中展示文本   | `string`                                        | `Please select` |
| disabled    | 禁用             | `boolean`                                       | `false`         |
| type        | 选中类型         | `hover / click`                                 | `click`         |
| status      | 下拉菜单类型     | `default / primary / error / warning / success` | `default`       |
| colums      | 扁平化，多列并排 | `boolean`                                       | `false`         |
| columsWidth | 多列并排列表宽度 | `number`                                        | `500px`         |
| position    | 出现位置         | `top / bottom / left / right`                   | `bottom`        |

## dataType API

| Name     | Description                 | Type         | Default |
| -------- | --------------------------- | ------------ | ------- |
| content  | 标签名                      | `string`     | `--`    |
| link     | 跳转链接                    | `string`     | `--`    |
| children | 子项(暂只支持一层 children) | `dataType[]` | `[]`    |
| disabled | 禁用                        | `boolean`    | `false` |
| icon     | 图标                        | `ReactNode`  | `<></>` |
