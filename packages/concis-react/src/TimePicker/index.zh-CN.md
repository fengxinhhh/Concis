---
title: TimePicker 时间选择器
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# TimePicker 时间选择器

输入或选择日期的控件。

## 何时使用

- 当用户需要输入一个时间，可以点击标准输入框，弹出时间面板进行选择。

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"></code>

## 展示清除按钮

通过 `showClear` 显示清除按钮。

<code src="./demos/index2.tsx"></code>

## 确认回调

通过 `handleConfirm` 获取确认后的时间。

<code src="./demos/index3.tsx"></code>

## 禁用时分秒选项

通过 `disableHour`、 `disableMin`、 `disableSecond` 单独禁用某些选项。

<code src="./demos/index4.tsx"></code>

## API

| Name           | Description      | Type            | Default    |
| -------------- | ---------------- | --------------- | ---------- |
| className      | 类名             | `string`        | `--`       |
| style          | 自定义样式       | `CSSProperties` | `--`       |
| align          | 出现方位         | `string`        | `bottom`   |
| defaultTime    | 默认时间         | `string`        | `当前时间` |
| showClear      | 是否展示清除按钮 | `boolean`       | `false`    |
| placeholder    | 占位字符         | `string`        | `--`       |
| handleConfirm  | 处理确认事件     | `Function`      | `--`       |
| clearCallback  | 清除回调         | `Function`      | `--`       |
| changeCallback | 改变回调         | `Function`      | `--`       |
| disableHour    | 禁用小时验证函数 | `Function`      | `--`       |
| disableMin     | 禁用分钟验证函数 | `Function`      | `--`       |
| disableSecond  | 禁用秒验证函数   | `Function`      | `--`       |
