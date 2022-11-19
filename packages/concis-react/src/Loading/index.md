---
title: Loading
nav:
  title: Component
  path: /common
group:
  title: Feedback
mobile: false
---

# Loading

It is used for the loading state of pages and blocks

- when the page is partially waiting for asynchronous data or in the rendering process, the appropriate loading dynamic effect will effectively alleviate the user's anxiety.

## Basic use

A simple loading state.

<code src="./demos/index1.tsx"></code>

## Ellipsis loading

Configure `type=dot` to display ellipsis.

<code src="./demos/index2.tsx"></code>

## List loading

Configure `type=strip` to display in list mode.

<code src="./demos/index7.tsx"></code>

## Mantle

Configure the mask attribute to mask the display content, which is suitable for loading in containers.

Note: you need to set position: relative to the outer container so that the loading icon is at the center point.

<code src="./demos/index3.tsx"></code>

## Load Text

Configure loadingText and set the loading text.

<code src="./demos/index4.tsx"></code>

## Different sizes

Customize the size through width and height.

<code src="./demos/index5.tsx"></code>

## Custom icon

Set the custom icon through the icon attribute. The custom icon size does not support the width and height attributes.

<code src="./demos/index6.tsx"></code>

## API

| Name        | Description       | Type                | Default   |
| ----------- | ----------------- | ------------------- | --------- |
| className   | Custom class name | `string`            | `--`      |
| style       | Custom styles     | `CSSProperties`     | `--`      |
| type        | Load Icon type    | `default/dot/strip` | `default` |
| mask        | Configure mask    | `boolean`           | `false`   |
| loadingText | loading text      | `string`            | `--`      |
| icon        | custom icon       | `ReactNode`         | `--`      |
| width       | custom width      | `string`            | `2em`     |
| height      | custom height     | `string`            | `2em`     |
