---
title: Affix 固钉
nav:
  title: 组件
  path: /common
group:
  title: 导航
mobile: false
---

# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

- 当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

- 页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 滚动容器

- 在首屏时保持元素位置，在滚动后脱离文档流至指定位置

<code src="./demos/index1.tsx" />

## API

| Name         | Description              | Type              | Default |
| ------------ | ------------------------ | ----------------- | ------- |
| className    | 类名                     | `string`          | `--`    |
| style        | 插槽样式                 | `CSSProperties`   | `--`    |
| affixType    | 类型 scroll 表示滚动容器 | `string`          | `--`    |
| children     | 插槽                     | `ReactNode`       | `--`    |
| offsetTop    | 顶部距离                 | `number / string` | `0`     |
| offsetLeft   | 左侧距离                 | `number / string` | `0`     |
| offsetBottom | 底部距离                 | `number / string` | `0`     |
| offsetRight  | 右侧距离                 | `number / string` | `0`     |
