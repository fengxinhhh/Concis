---
title: Space
nav:
  title: Component
  path: /common
group:
  title: Layout
mobile: false
---

# Space

Sets the spacing between components.

## ##When to use

Avoid components sticking together to open a unified space.

- Horizontal spacing that fits elements in a row.

- You can set various horizontal alignments.

## Basic use

Basic usage of spacing components.

<code src="./demos/index1.tsx" />

## Vertical spacing

You can set the spacing for vertical arrangement.

<code src="./demos/index2.tsx" />

## Dimensions

There are 4 built- in dimensions, mini - 4px small - 8px (default) medium - 16px large - 24px, and user-defined dimensions can also be transferred to numbers.

<code src="./demos/index3.tsx" />

## Align

There are four built- in alignment methods, namely, start center end baseline. In horizontal mode, the default is center.

<code src="./demos/index4.tsx" />

## Wrap spacing

The spacing of the wrapping type is set around. It is generally used for line breaking scenes. The configured size is [12,18], which indicates the horizontal and vertical spacing respectively.

<code src="./demos/index5.tsx" />

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Custom class name | `string` | `--` |
| style | Custom styles | `CSSProperties` | `--` |
| direction | direction | `horizontal / vertical` | `horizontal` |
| size | Gap size | `mini / small / medium / large / number / Array<number>` | `small` |
| align | vertical alignment | `start / center / end / baseline` | `center` |
| wrap | wrap spacing | `boolean` | `false` |
