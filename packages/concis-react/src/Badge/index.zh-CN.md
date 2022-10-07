---
title: Badge 徽标
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Badge 徽标

一般出现在图标或文字的右上角。提供及时、重要的信息提示。

## 基本使用

基础的用法。只需指定 count，即可显示徽标。

<code src="./demos/index1.tsx" />

## 独立使用

children 为空时，将会独立展示徽标。

<code src="./demos/index2.tsx" />

## 小红点

设置 dot，即可只显示小红点而不显示数字。count > 0 时才显示，并通过 offset 自定义小红点位置。

<code src="./demos/index3.tsx" />

## 文本内容

设置 text，可设置徽标为文本内容。

<code src="./demos/index4.tsx" />

## 最大值

设置 maxCount，可以限制最大显示的徽标数值，超过将会加 + 后缀。maxCount 默认为 99。

<code src="./demos/index5.tsx" />

<API />
