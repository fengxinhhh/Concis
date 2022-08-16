---
title: Avatar 头像
nav:
  title: 组件
  path: /common
group:
  title: 数据展示
mobile: false
---

# Avatar 头像

用作头像显示，可以为图片、图标或字符形式展示。

#### 何时使用

头像的基础使用。如果头像是文字的话，会自动调节字体大小，来适应头像框。

## 基本使用

头像的基础使用

<code src="./demos/index1.tsx" />

## 大小和形状

配置 size 参数改变大小，默认为 40px; 配置 shape:square 设置为方形头像。

<code src="./demos/index2.tsx" />

## 头像组

使用 AvatarGroup 可以使用头像组功能，可通过 size 指定头像的大小，通过 style 为每个头像配置共同样式，如间距。

<code src="./demos/index3.tsx" />

## 交互

可以通过 triggerIcon、triggerType 来定制交互按钮，类型有 mask (遮罩) 和 button (按钮) 两种，通过 onClick 参数来添加回调。

<code src="./demos/index4.tsx" />

## 文本自适应

配置 autoFixFontSize，对不确定文本内容长度的头像进行自适应，撑满头像，默认 true。

<code src="./demos/index5.tsx" />

<API />
