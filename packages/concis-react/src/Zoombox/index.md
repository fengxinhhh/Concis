---
title: Zoombox
nav:
  title: Component
  path: /common
group:
  title: Other
mobile: false
---

# Zoombox

Flexible and scalable presentation container.

## Basic usage

The most basic use.

<code src="./demos/index1.tsx"></code>

## Use in Modal

`Zoombox` supports use with any container class component of `concis`, such as `Modal`.

<code src="./demos/index2.tsx"></code>

## Multiple boxes

Multiple `Zoombox` adaptive.

<code src="./demos/index3.tsx"></code>

## disable selection

Use `notAllowed` to prevent the text inside the container from being selected on zoom.

<code src="./demos/index4.tsx"></code>

## Minimum width and height limit

The minimum width and height are limited by `minWidth`, `minHeight`.

<code src="./demos/index5.tsx"></code>

## Rimless

Configure `noBorder` to set no border.

<code src="./demos/index6.tsx"></code>

## API

| Name          | Description                       | Type                                                               | Default |
| ------------- | --------------------------------- | ------------------------------------------------------------------ | ------- |
| className     | class name                        | `string`                                                           | `--`    |
| style         | Custom styles                     | `CSSProperties`                                                    | `--`    |
| notAllowed    | Disable selected text             | `boolean`                                                          | `false` |
| noBorder      | no border                         | `boolean`                                                          | `false` |
| minWidth      | minimum width                     | `number`                                                           | `0`     |
| minHeight     | minimum height                    | `number`                                                           | `0`     |
| maxWidth      | maximum width                     | `number`                                                           | `--`    |
| maxHeight     | maximum height                    | `number`                                                           | `--`    |
| onMoving      | Callback function during dragging | `(e: MouseEvent, size: { width: number; height: number }) => void` | `--`    |
| onMovingEnd   | Drag end callback function        | `() => void`                                                       | `--`    |
| onMovingStart | Drag start callback function      | `() => void`                                                       | `--`    |
