---
title: Badge
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
toc: content
---

# Badge

It usually appears in the upper right corner of the icon or text. Provide timely and important information prompts.

## Basic use

Basic usage. Simply specify count to display the logo.

<code src="./demos/index1.tsx"></code>

## Independent use

When children is empty, the logo will be displayed independently.

<code src="./demos/index2.tsx"></code>

## Small red dot

Set dot to display only small red dots without displaying numbers. Only when count>0 is displayed, and the position of the small red dot can be customized through offset.

<code src="./demos/index3.tsx"></code>

## Text content

Set text to set the logo as text content.

<code src="./demos/index4.tsx"></code>

## Maximum

Set maxCount to limit the maximum displayed logo value. If it exceeds the value, a+suffix will be added. MaxCount defaults to 99.

<code src="./demos/index5.tsx"></code>

## API

| Name      | Description        | Type                 | Default |
| --------- | ------------------ | -------------------- | ------- |
| className | Custom class name  | `string`             | `--`    |
| style     | Custom styles      | `CSSProperties`      | `--`    |
| count     | Logo number value  | `number / ReactNode` | `--`    |
| maxCount  | Logo maximum value | `number`             | `99`    |
| dotStyle  | Dot style          | `CSSProperties`      | `{}`    |
| dot       | use dots           | `boolean`            | `false` |
| offset    | Dot position value | `Array<number>`      | `[2,2]` |
| text      | Dot text value     | `string`             | `''`    |
