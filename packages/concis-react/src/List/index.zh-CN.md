---
title: List 列表
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
toc: content
---

# List 列表

## 基础用法

通过 header 配置列表头部，dataSource 传递数据源，并写入 render 函数创建自定义模板。

<code src="./demos/index1.tsx"></code>

## 不同尺寸

设置 size 可设定不同尺寸。

<code src="./demos/index2.tsx"></code>

## 基础内容

更多的内容

<code src="./demos/index3.tsx"></code>

## 懒加载

配置 lazyLoad、设置 defaultShowNum 默认展示行数开启懒加载。

<code src="./demos/index4.tsx"></code>

## 虚拟列表

配置 virtualListProps、设置 virtualShowNum 默认展示行数开启虚拟列表。

<code src="./demos/index5.tsx"></code>

## API

| Name               | Description          | Type                      | Default   |
| ------------------ | -------------------- | ------------------------- | --------- |
| className          | 类名                 | string                    | `--`      |
| style              | 自定义样式           | CSSProperties             | `--`      |
| dataSource         | List 数据            | string[] object[]         | `[]`      |
| render             | 渲染函数             | function                  | `--`      |
| header             | 列表头部内容         | ReactNode                 | `<></>`   |
| size               | 列表尺寸             | 'default' 'small' 'large' | `default` |
| lazyLoad           | 懒加载               | boolean                   | `false`   |
| defaultShowNum     | 懒加载默认展示行数   | number                    | `5`       |
| virtualListProps   | 虚拟列表             | boolean                   | `false`   |
| virtualShowNum     | 虚拟列表默认展示行数 | number                    | `5`       |
| lazyScrollToBottom | 懒加载滚动到底部监听 | function                  | ``        |
