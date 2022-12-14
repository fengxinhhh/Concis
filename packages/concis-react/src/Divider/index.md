---
title: Divider
nav:
  title: Component
  path: /common
group:
  title: Layout
mobile: false
---

# Divider

<p>Document divider that separates content</p>

## When to use

- Segmentation of text paragraphs in different chapters.

- Splits inline text/links, such as table action columns.

## Basic usage

Basic split line component.

<code src="./demos/index1.tsx"></code>

## Font size

Customize font size via `fontSize`.

<code src="./demos/index2.tsx"></code>

## Alignment

Alignment is selected via `align`, which defaults to `center`.

<code src="./demos/index4.tsx"></code>

## API

| Name      | Description   | Type                    | Default  |
| --------- | ------------- | ----------------------- | -------- |
| style     | Custom styles | `CSSProperties`         | `--`     |
| className | class name    | `string`                | `--`     |
| fontSize  | font size     | `string`                | `14px`   |
| align     | alignment     | `left / right / center` | `center` |
