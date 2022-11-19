---
title: Message 全局提示
nav:
  title: 组件
  path: /common
group:
  title: 反馈
mobile: false
---

# Message 全局提示

由用户的操作触发的轻量级全局反馈。

## 基本使用

最简单的例子。

<code src="./demos/index1.tsx"></code>

## 不同类型

全局提示有 6 种不同的类型，分别为：info, success, warning, error, normal, loading。

<code src="./demos/index2.tsx"></code>

## 状态改变

通过 duration 属性，连续出现多个状态。

注意: 每一条 Message 消失前有 200ms 的动画，需计算具体时间以便于位置显示正确。

<code src="./demos/index3.tsx"></code>

## 不同位置

通过 position 属性，选择在上方/下方出现。

<code src="./demos/index4.tsx"></code>

## 手动关闭

通过 clearable 属性，可手动关闭。

<code src="./demos/index5.tsx"></code>

## API

| Name      | Description          | Type                                                  | Default  |
| --------- | -------------------- | ----------------------------------------------------- | -------- |
| className | 自定义类名           | `string`                                              | `--`     |
| style     | 自定义样式           | `CSSProperties`                                       | `--`     |
| content   | 对象类型传参时的内容 | `string`                                              | `[]`     |
| type      | Message 类型         | `info / success / warning / error / normal / loading` | `info`   |
| duration  | 显示时间             | `number`                                              | `3000ms` |
| position  | 显示位置             | `top / bottom`                                        | `top`    |
| clearable | 出现可清除按钮       | `boolean`                                             | `false`  |
| dark      | 暗黑模式             | `boolean`                                             | `false`  |
