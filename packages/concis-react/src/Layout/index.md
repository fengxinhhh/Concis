---
title: Layout
nav:
  title: Component
  path: /common
group:
  title: Layout
mobile: false
---

# Layout

<p>Rapid Prototyping Common Web Page Layout</p>

## Component Overview

- Layout: a layout container, under which Header Sider Content Footer or Layout itself can be nested, and can be placed in any parent container.

- Header: top layout, with its own default style, under which any element can be nested, and can only be placed in Layout.

- Sider: The sidebar has its own default style and basic functions. Any element can be nested under it and can only be placed in Layout.

- Content: The content part has its own default style, under which any element can be nested and can only be placed in Layout.

- Footer: The bottom layout has its own default style. Any element can be nested under it and can only be placed in Layout.

## Classic Page Layout

<code src="./demos/index1.tsx"/>

## Custom Styles

<p>Select your own style according to business requirements</p>

<code src="./demos/index2.tsx"/>

## Layout, Header, Slider, Content, Footer API

| Name       | Description       | Type            | Default |
| ---------- | ----------------- | --------------- | ------- |
| className  | Custom class name | `string`        | `--`    |
| extraStyle | Custom styles     | `CSSProperties` | `--`    |
