---
title: Comment 评论
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Comment 评论

对网站内容反馈，展示评论信息

## 何时使用

- 评论组件可用于对事物的讨论、对网站的反馈等等

## 基本使用

基本评论组件。

<code src='./demos/index1.tsx'/>

## 嵌套评论

可嵌套使用。

<code src='./demos/index2.tsx' />

## 对齐方式

配置 align=right，使日期右对齐。

<code src='./demos/index5.tsx' />

## 头部额外内容

配置 afterAuthor，个性化名字后的内容。

<code src='./demos/index4.tsx' />

## 回复框

实现一个基本的评论回复。

<code src='./demos/index3.tsx' />

## API

| Name        | Description        | Type            | Default |
| ----------- | ------------------ | --------------- | ------- |
| style       | 自定义样式         | `CSSProperties` | `--`    |
| className   | 类名               | `string`        | `--`    |
| author      | 作者名             | `string`        | `--`    |
| afterAuthor | 作者名后的额外内容 | `ReactNode`     | `--`    |
| avatar      | 头像               | `JSX.Element`   | `--`    |
| content     | 评论内容           | `ReactNode`     | `--`    |
| datetime    | 时间描述           | `string`        | `--`    |
| actions     | 底部配置项         | `ReactNode`     | `--`    |
| align       | 标题栏对齐方式     | `left / right`  | `left`  |
