---
title: Alert 警告提示
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Alert 警告提示

向用户显示警告的信息时，通过警告提示，展现需要关注的信息。

## 基本使用

警告提示，展现需要关注的信息，适用于简短的警告提示。

<code src="./demos/index1.tsx" />

## 不同类型

警告提示的类型有 `info`, `success`, `warning`, `error` 四种。

<code src="./demos/index2.tsx" />

## 可关闭

通过 `showClear` ，显示关闭按钮，通过 `onClose` 获取关闭回调。

<code src="./demos/index3.tsx" />

## 自定义关闭元素

通过 `closeElement` ，自定义关闭按钮。

<code src="./demos/index4.tsx" />

## 标题

通过 `title` ，配置标题。

<code src="./demos/index5.tsx" />

## 无图标

通过 `showIcon = false` ，不显示图标。

<code src="./demos/index6.tsx" />

<API />
