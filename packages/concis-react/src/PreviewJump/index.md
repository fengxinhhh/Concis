---
title: PreviewJump
nav:
  title: Component
  path: /common
group:
  title: Common
mobile: false
toc: content
---

# PreviewJump

When the mouse moves into a layer and wants to trigger the preview effect, `PreviewJump` will bring a good experience.

## When to use

- When the layer or video is hovering, you need to display the jump word and click to jump to a new page.

## Basic use

The most basic `PreviewJump` component, click to jump to the specified link.

<code src="./demos/index1.tsx"></code>

## Disabled

Configure the `disabled` property to disable jumping.

<code src="./demos/index2.tsx"></code>

## Customize preview content

Customize the icon through `icon`, customize the preview text through `jumpText`, of course, you can also directly pass in the entire content through `jumpContent`.

<code src="./demos/index3.tsx"></code>

## Demo

Business case, jump to details via `PreviewJump` or `Link`.

<code src="./demos/index4.tsx"></code>

## API

| Name        | Description                 | Type                 | Default    |
| ----------- | --------------------------- | -------------------- | ---------- |
| className   | Custom class name           | `string`             | `--`       |
| style       | Custom styles               | `CSSProperties`      | `--`       |
| icon        | Custom preview mask icon    | `ReactNode`          | `eye icon` |
| jumpText    | Custom preview mask text    | `ReactNode / string` | `See more` |
| jumpContent | Custom preview mask content | `ReactNode`          | `<></>`    |
| link        | Jump link                   | `string`             | `--`       |
| disabled    | disabled                    | `boolean`            | `false`    |
