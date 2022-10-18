---
title: Input 输入框
nav:
  title: 组件
  path: /common
group:
  title: 数据录入
mobile: false
---

# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。

- 提供组合型输入框，带搜索的输入框，还可以进行大小选择

## 基本使用

<code src="./demos/index1.tsx" />

## 多场景适用

<code src="./demos/index2.tsx" />

## 可清空

<code src="./demos/index3.tsx" />

## 数字框

<code src="./demos/index5.tsx" />

## 基础文本域

<code src="./demos/index6.tsx"/>

## 限制最大字符数

<code src="./demos/index7.tsx"/>

## 可移除文本域

<code src="./demos/index8.tsx"/>

## API

| Name            | Description                                  | Type            | Default |
| --------------- | -------------------------------------------- | --------------- | ------- |
| className       | 自定义类名                                   | `string`        | `--`    |
| style           | 自定义样式                                   | `CSSProperties` | `--`    |
| width           | 自定义宽度                                   | `string`        | `170px` |
| moreStyle       | 自定义样式                                   | `CSSProperties` | `--`    |
| type            | 输入框类型                                   | `string`        | `text`  |
| placeholder     | 提示                                         | `string`        | `--`    |
| showClear       | 显示清空按钮                                 | `boolean`       | `false` |
| showTogglePwd   | 显示密码切换按钮(需同时设置 type="password") | `boolean`       | `false` |
| min             | 数字框最小值                                 | `number`        | `--`    |
| max             | 数字框最大值                                 | `number`        | `--`    |
| step            | 数字框递增/减值                              | `number`        | `1`     |
| maxLength       | 文本域内容最大长度                           | `number`        | `--`    |
| showCount       | 是否展示字数                                 | `boolean`       | `false` |
| handleIptChange | 输入框内容改变回调                           | `Function`      | `--`    |
| handleIptFocus  | 输入框聚焦回调                               | `Function`      | `--`    |
| handleClick     | 输入框点击回调                               | `Function`      | `--`    |
| handleIptBlur   | 输入框失去焦点回调                           | `Function`      | `--`    |
| handleKeyDown   | 输入框键盘监听                               | `Function`      | `--`    |
| handleNumChange | 数字框内容改变回调                           | `Function`      | `--`    |
| clearCallback   | 清空回调                                     | `Function`      | `--`    |
| defaultValue    | 默认内容                                     | `string`        | `--`    |
