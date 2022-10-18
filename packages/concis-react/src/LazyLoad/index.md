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

<code src="./demos/index1.tsx"/>

## API

| Name      | Description       | Type            | Default |
| --------- | ----------------- | --------------- | ------- |
| className | Custom class name | `string`        | `--`    |
| style     | Custom styles     | `CSSProperties` | `--`    |
| delay     | lazy loading      | `number`        | `0ms`   |
