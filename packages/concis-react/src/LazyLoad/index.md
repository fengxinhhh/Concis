---
title: LazyLoad
nav:
  title: Component
  path: /common
group:
  title: Common
mobile: false
---

# LazyLoad

Display and monitor some contents, and load them statically when they appear.

## When to use

It is often used in the first screen of long list SPA to lazy load the lower and middle elements to optimize page loading.

## Basic use

For elements that you want to load lazily, you can directly wrap them in the `LazyLoad` component. When the element appears in the viewport area, it will be automatically loaded, which is of great help for performance improvement.

<code src="./demos/index1.tsx"></code>

## API

| Name      | Description       | Type            | Default |
| --------- | ----------------- | --------------- | ------- |
| className | Custom class name | `string`        | `--`    |
| style     | Custom styles     | `CSSProperties` | `--`    |
| delay     | lazy loading      | `number`        | `0ms`   |
