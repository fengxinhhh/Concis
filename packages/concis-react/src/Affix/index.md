---
category: Components
title: Affix
subtitle: 固钉
demo:
  cols: 2
group:
  title: 其他
  order: 7
---

# Affix

Pin page elements to the visible range.

## When to use

- When the content area is long and the page needs to be scrolled, the corresponding operations or navigation of this part of content should always be displayed within the scrolling range. It is commonly used for side menu and button combination.

- If the visual range of the page is too small, use this function carefully to avoid blocking the page content.

## Scroll Container

- Keep the element position on the first screen, and leave the document flow to the specified position after scrolling

<code src="./demos/index1.tsx" />

## API

| Name         | Description                        | Type              | Default |
| ------------ | ---------------------------------- | ----------------- | ------- |
| className    | class name                         | `string`          | `--`    |
| style        | Slot styles                        | `CSSProperties`   | `--`    |
| affixType    | type scroll means scroll container | `string`          | `--`    |
| children     | slot                               | `ReactNode`       | `--`    |
| offsetTop    | top distance                       | `number / string` | `0`     |
| offsetLeft   | Left distance                      | `number / string` | `0`     |
| offsetBottom | Bottom distance                    | `number / string` | `0`     |
| offsetRight  | right distance                     | `number / string` | `0`     |
