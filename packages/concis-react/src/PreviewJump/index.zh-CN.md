---
title: PreviewJump 预览式跳转
nav:
  title: 组件
  path: /common
group:
  title: 通用
mobile: false
---

# PreviewJump 预览式跳转

当鼠标移入某个图层，想要触发预览效果时，`PreviewJump` 会带来不错的体验。

## 何时使用

- 当图层或视频在悬浮时需显示跳转字样并点击跳转到新的页面。

## 基本使用

最基本的 `PreviewJump` 组件，点击跳转指定链接。

<code src="./demos/index1.tsx" />

## 禁用

配置 `disabled` 属性，禁止跳转。

<code src="./demos/index2.tsx" />

## 自定义预览内容

通过 `icon` 自定义图标，通过 `jumpText` 自定义预览文字，当然你也可以直接通过 `jumpContent` 自定义传入整个内容。

<code src="./demos/index3.tsx" />

## 案例

业务案例，通过 `PreviewJump` 或 `Link` 跳转详情。

<code src="./demos/index4.tsx" />

<API />