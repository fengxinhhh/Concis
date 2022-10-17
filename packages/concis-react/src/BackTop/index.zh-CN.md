---
title: BackTop 回到顶部
nav:
  title: 组件
  path: /common
group:
  title: 其他
mobile: false
---

# BackTop 回到顶部

返回页面或者容器顶部的按钮。

#### 何时使用

- 当页面内容区域较长时。

- 当用户需要频繁返回顶部查看内容时。

- 当用户喜欢滚轮和页面交互时产生的滚动视差带来的快感时。

## 基本使用

使用默认的按钮返回顶部。

<code src="./demos/index1.tsx" />

## 自定义样式

可以自定义返回顶部的载体，你甚至可以塞一支火箭进去。

<code src="./demos/index2.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| children | 自定义按钮内容 | `ReactNode` | `--` |
| className | 自定义类名 | `string` | `--` |
| style | 自定义样式 | `CSSProperties` | `--` |
| duration | 回到顶部所需时间(ms) | `number` | `450` |
| target | 需要监听滚动事件的目标元素 | `() => HTMLElement / window / document` | `window` |
| visibilityHeight | 滚动距离大于该参数时才会显示按钮 | `number` | `400` |
| onClick | 按钮点击事件回调函数 | `React.MouseEventHandler<HTMLElement>` | `--` |
| onReachTop | 滚动到顶部后的回调函数 | `() => void` | `--` |
