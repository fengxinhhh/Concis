---
title: Link
nav:
  title: Component
  path: /common
group:
  title: Common
mobile: false
---

# Link

Links are less prominent than buttons, so they are often used as optional actions.

## Basic use

Base link.

<code src="./demos/index1.tsx"></code>

## Other status

Four statuses are provided: `primary`, `error`, `warning`, and `success`. The default is `primary`.

<code src="./demos/index2.tsx"></code>

## Icon link

Configure the `icon` attribute to display the icon. The default icon is displayed for `true`. You can also customize the icon.

<code src="./demos/index3.tsx"></code>

## API

| Name      | Description       | Type                                  | Default   |
| --------- | ----------------- | ------------------------------------- | --------- |
| className | Custom class name | `string`                              | `--`      |
| style     | Custom styles     | `CSSProperties`                       | `--`      |
| href      | Jump link         | `string`                              | `--`      |
| status    | status            | `primary / error / success / warning` | `primary` |
| disabled  | disabled state    | `boolean`                             | `false`   |
| icon      | Icon state        | `boolean / ReactNode`                 | `false`   |
