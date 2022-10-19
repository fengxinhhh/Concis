---
title: Swiper 轮播图
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Swiper 轮播图

用于展示多张图片、视频或内嵌框架等内容的循环播放，支持系统自动播放或用户手动切换。

## 何时使用

展示多张图片，作为产品首页。

## 注意事项

如使用出现异常，可尝试关闭 React 严格模式（去除<React.StrictMode>标签）

## 基本使用

最基本的使用。

<code src="./demos/index1.tsx"/>

## 自动播放

通过 `autoPlayer` 自动播放，`deply` 设置播放时延。

<code src="./demos/index2.tsx"/>

## 切换选项

配置 `showTrigger` 展示小圆点。

<code src="./demos/index3.tsx"/>

## 卡片式

配置 `card` 切换到卡片式轮播图。

<code src="./demos/index4.tsx"/>

## API

| Name        | Description  | Type            | Default  |
| ----------- | ------------ | --------------- | -------- |
| className   | 自定义类名   | `string`        | `--`     |
| style       | 自定义样式   | `CSSProperties` | `--`     |
| imgList     | 图片列表     | `Array<string>` | `[]`     |
| pictureSize | 轮播图宽度   | `number`        | `400px`  |
| height      | 轮播图高度   | `number`        | `240px`  |
| autoPlayer  | 自动播放     | `boolean`       | `false`  |
| showTrigger | 展示小圆点   | `boolean`       | `false`  |
| deply       | 自动播放间隔 | `number`        | `3000ns` |
| card        | 卡片式轮播图 | `boolean`       | `false`  |
