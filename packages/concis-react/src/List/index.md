---
title: List
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# List

## Basic usage

Configure the header of the list through the header. The dataSource transfers the data source and writes it to the render function to create a custom template.

<code src="./demos/index1.tsx"></code>

## Different sizes

Set size to set different sizes.

<code src="./demos/index2.tsx"></code>

## Basic content

More content.

<code src="./demos/index3.tsx"></code>

## Lazy loading

Configure lazyLoad and set the defaultShowNum default number of display lines to enable lazy loading.

<code src="./demos/index4.tsx"></code>

## Virtual List

Configure virtualListProps, and set the number of virtual ShowNum default display lines to open the virtual list.

<code src="./demos/index5.tsx"></code>

## API

| Name               | Description                                      | Type                      | Default   |
| ------------------ | ------------------------------------------------ | ------------------------- | --------- |
| className          | Class name                                       | string                    | `--`      |
| style              | Custom Style                                     | CSSProperties             | `--`      |
| dataSource         | List Data                                        | string[] object[]         | `[]`      |
| render             | Rendering function                               | function                  | `--`      |
| header             | List header content                              | ReactNode                 | `<></>`   |
| size               | List Size                                        | 'default' 'small' 'large' | `default` |
| lazyLoad           | Lazy loading                                     | boolean                   | `false`   |
| defaultShowNum     | Default number of display lines for lazy loading | number                    | `5`       |
| virtualListProps   | Virtual List                                     | boolean                   | `false`   |
| virtualShowNum     | Default Display Lines of Virtual List            | number                    | `5`       |
| lazyScrollToBottom | Lazy loading, scrolling to the bottom, listening | function                  | ``        |
