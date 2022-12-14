---
title: BackTop
nav:
  title: Component
  path: /common
group:
  title: Other
mobile: false
---

# BackTop

A button that returns to the top of a page or container.

## ##When to use

- When the page content area is long.

- When users need to return to the top frequently to view content.

- When the user likes the pleasure brought by the rolling parallax when the wheel interacts with the page.

## Basic use

Use the default button to return to the top.

<code src="./demos/index1.tsx"></code>

## Custom Styles

You can customize the carrier that returns to the top, and you can even put a rocket in it.

<code src="./demos/index2.tsx"></code>

## API

| Name             | Description                                                                               | Type                                    | Default  |
| ---------------- | ----------------------------------------------------------------------------------------- | --------------------------------------- | -------- |
| children         | custom button content                                                                     | `ReactNode`                             | `--`     |
| className        | Custom class name                                                                         | `string`                                | `--`     |
| style            | Custom styles                                                                             | `CSSProperties`                         | `--`     |
| duration         | time to return to top (ms)                                                                | `number`                                | `450`    |
| target           | The target element that needs to listen to scroll events                                  | `() => HTMLElement / window / document` | `window` |
| visibilityHeight | The button will only be displayed when the scroll distance is greater than this parameter | `number`                                | `400`    |
| onClick          | Button click event callback function                                                      | `React.MouseEventHandler<HTMLElement>`  | `--`     |
| onReachTop       | Callback function after scrolling to the top                                              | `() => void`                            | `--`     |
