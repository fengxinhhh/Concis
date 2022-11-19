---
title: Popover
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Popover

Click/move the mouse into the element to pop up the bubble type card floating layer.

## When to use

When the target element has further descriptions and related operations, it can be included in the card and displayed according to the user's operation behavior.

The difference from Tooltip is that users can operate on elements on the floating layer, so it can carry more complex content, such as links or buttons.

## Basic use

Basic bubble card.

<code src="./demos/index1.tsx"></code>

## Click

Configure `type = click` to switch to click trigger.

<code src="./demos/index2.tsx"></code>

## Different directions

Through `align`, switch different appearance directions, optional `left`, `right`, `top`, `bottom`.

<code src="./demos/index3.tsx"></code>

## Closed in floating layer

Declare a separate `ref` through `useRef` and pass it to `Popover`, and call `ref.current.setShowDialog` to switch the display state.

<code src="./demos/index4.tsx"></code>

## API

| Name            | Description                     | Type              | Default  |
| --------------- | ------------------------------- | ----------------- | -------- |
| className       | Custom class name               | `string`          | `--`     |
| style           | Custom styles                   | `CSSProperties`   | `--`     |
| type            | trigger type hover/click        | `string`          | `hover`  |
| align           | alignment left/right/top/bottom | `string`          | `bottom` |
| content         | Card content                    | `ReactNode`       | `<></>`  |
| dialogWidth     | Card width                      | `number / string` | `200px`  |
| noBorder        | no border                       | `boolean`         | `false`  |
| defaultShow     | Show bubble cards by default    | `boolean`         | `false`  |
| closeDeps       | Bubble card close dependencies  | `any[]`           | `[]`     |
| onVisibleChange | Card show hide callback         | `Function`        | `--`     |
