---
title: Image 图片
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Image 图片

可预览的图片展示组件。

## 何时使用

- 需要展示图片时使用。

## 基本使用

<code src="./demos/index1.tsx"></code>

## 填充模式

<code src="./demos/index2.tsx"></code>

## 圆角

<code src="./demos/index3.tsx"></code>

## 预览

`preview` 设置为 `true` 实现预览功能

<code src="./demos/index4.tsx"></code>

`preview` 传入数组可实现多图预览

<code src="./demos/index5.tsx"></code>

## 自定义预览操作栏

配置`previewRender`，自定义自定义预览操作栏。

<code src="./demos/index7.tsx"></code>

## 描述文案

<code src="./demos/index6.tsx"></code>

## API

| Name          | Description                    | Type                                         | Default |
| ------------- | ------------------------------ | -------------------------------------------- | ------- |
| src           | 图片路径                       | `string`                                     | `--`    |
| alt           | 原生 alt 属性                  | `string`                                     | `--`    |
| fit           | 填充方式                       | `fill / contain / cover / none / scale-down` | `fill`  |
| draggable     | 是否可拖动                     | `boolean`                                    | `true`  |
| className     | 自定义类名                     | `string`                                     | `--`    |
| style         | 自定义样式                     | `CSSProperties`                              | `--`    |
| width         | 图片宽度                       | `string`                                     | `--`    |
| height        | 图片高度                       | `string`                                     | `--`    |
| round         | 配置圆角                       | `string`                                     | `--`    |
| preview       | 是否可预览，可传入预览图片列表 | `boolean / string[]`                         | `false` |
| showOperation | 是否展示图片预览底部操作栏     | `boolean`                                    | `true`  |
| caption       | 图片上的描述文案               | `string`                                     | `--`    |
| captionStyle  | 描述文案样式                   | `CSSProperties`                              | `--`    |
| previewRender | 自定义预览操作栏               | `Function`                                   | `--`    |
