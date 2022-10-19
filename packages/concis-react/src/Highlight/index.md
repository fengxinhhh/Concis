---
title: Lightlight
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Lightlight

Highlights based on keywords in a piece of text.

## Basic use

The most basic use.

<code src="./demos/index1.tsx" />

## Multiple keywords

Support `query` to pass in multiple keywords.

<code src="./demos/index2.tsx" />

## Highlight style

Set the highlight style through `styles`, `px`, `py` represent horizontal and vertical `padding`; `mx`, `my` represent horizontal and vertical `margin`; `rounded` represent rounded corners; `bg` represent Customize background color.

<code src="./demos/index3.tsx" />

## API

| Name      | Description      | Type            | Default |
| --------- | ---------------- | --------------- | ------- |
| style     | Custom styles    | `CSSProperties` | `--`    |
| className | class name       | `string`        | `--`    |
| children  | field            | `string`        | `--`    |
| query     | keyword          | `string[]`      | `[]`    |
| styles    | Highlight styles | `stylesType`    | `--`    |

## stylesType API

| Name    | Description              | Type              | Default   |
| ------- | ------------------------ | ----------------- | --------- |
| px      | horizontal padding       | `string / number` | `5px`     |
| py      | vertical spacing         | `string / number` | `0`       |
| mx      | horizontal outer spacing | `string / number` | `0`       |
| my      | horizontal outer spacing | `string / number` | `0`       |
| rounded | rounded corners          | `boolean`         | `false`   |
| bg      | background color         | `string`          | `#b2f5ea` |
