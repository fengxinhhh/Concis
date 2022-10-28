---
title: DatePicker 日期选择器
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# DatePicker 日期选择器

输入或选择日期的控件。

## 何时使用

- 当用户需要输入一个日期，可以点击标准输入框，弹出日期面板进行选择。

## 基本使用

最基本的日期选择器。

<code src="./demos/index1.tsx" />

## 年份选择器

通过 `YearPicker` 使用年份选择器。

<code src="./demos/index2.tsx" />

## 月份选择器

通过 `MonthPicker` 使用年份选择器。

<code src="./demos/index3.tsx" />

## 区间式日期选择器

通过 `RangeDatePicker` 使用年份选择器。

<code src="./demos/index4.tsx" />

## 重置时间

配置 `showClear` 即可重置开始、结束时间。

<code src="./demos/index5.tsx" />

## 出现方向

通过 `align` 指定出现方向，可选参数有 `left`、`right`、`top`、`bottom`。

<code src="./demos/index6.tsx" />

## DatePicker、MonthPicker、YearPicker API

| Name         | Description            | Type            | Default      |
| ------------ | ---------------------- | --------------- | ------------ |
| style        | 自定义样式             | `CSSProperties` | `--`         |
| className    | 类名                   | `string`        | `--`         |
| format       | 设置日期的格式化       | `string`        | `YYYY-MM-DD` |
| showClear    | 显示日期重置按钮       | `boolean`       | `false`      |
| align        | 方向                   | `string`        | `top`        |
| handleChange | 选择完毕后的回调函数   | `Function`      | `--`         |
| disableCheck | 验证是否禁用选项的函数 | `Function`      | `--`         |

## RangeDatePicker API

| Name         | Description      | Type            | Default  |
| ------------ | ---------------- | --------------- | -------- |
| style        | 自定义样式       | `CSSProperties` | `--`     |
| className    | 类名             | `string`        | `--`     |
| showClear    | 显示日期重置按钮 | `boolean`       | `false`  |
| align        | 方向             | `string`        | `bottom` |
| handleChange | 日期改变回调函数 | `Function`      | `--`     |
