---
title: Collapse
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
toc: content
---

# Collapse

Content area that can be collapsed/expanded.

## Basic use

It is used to group and hide complex content areas. It can be collapsed or expanded. By default, multiple panels can be expanded, or only a few panels can be expanded.

<code src="./demos/index1.tsx"></code>

## Accordion

Accordion mode.

<code src="./demos/index2.tsx"></code>

## Borderless

<code src="./demos/index6.tsx"></code>

## Right node

Extra configures the content on the right side of the header of each level.

<code src="./demos/index3.tsx"></code>

## Expand icon location

HeaderAlign can be configured to switch or hide the head layout. The optional values are left, right, and hide.

<code src="./demos/index4.tsx"></code>

## Lazy loading

First expansion, loading DOM.

<code src="./demos/index5.tsx"></code>

## API

| Name           | Description                                           | Type                     | Default |
| -------------- | ----------------------------------------------------- | ------------------------ | ------- |
| style          | Custom styles                                         | `CSSProperties`          | `--`    |
| className      | class name                                            | `string`                 | `--`    |
| defaultActive  | Default expanded list                                 | `Array<string / number>` | `[]`    |
| accordion      | accordion                                             | `boolean`                | `false` |
| noBorder       | no border                                             | `boolean`                | `false` |
| headerAlign    | header alignment                                      | `string`                 | `left`  |
| lazyLoad       | lazy loading                                          | `boolean`                | `false` |
| toggleCallback | Toggle callback function, return listKey of open list | `Function`               | `--`    |

## CollapseItem API

| Name      | Description                             | Type              | Default |
| --------- | --------------------------------------- | ----------------- | ------- |
| className | class name                              | `string`          | `--`    |
| header    | header content                          | `string`          | `<></>` |
| listKey   | Hierarchical index                      | `number / string` | `1`     |
| disabled  | Disable expansion                       | `boolean`         | `false` |
| extra     | content on the right side of the header | `ReactNode`       | `<></>` |
