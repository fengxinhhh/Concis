---
title: TreeView
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# TreeView

Multilevel structure list.

## When to use

Folder, organizational structure, biological classification, countries and regions, etc. Most structures of everything in the world are tree structures. The tree control can fully display the hierarchical relationship, and has interactive functions such as expanding, folding and selecting.

## Basic use

The most basic tree control.

<code src="./demos/index1.tsx"/>

## Default expansion

Configure `defaultOpen` to expand the tree by default.

<code src="./demos/index2.tsx"/>

## Disable

By setting `disabled` in `treeData`, a single item is disabled.

<code src="./demos/index3.tsx"/>

## Draggable

Configure `avaDrop` to enable drag mode, and the `treeData` after dragging can be obtained through the `dropCallback` callback function.

<code src="./demos/index4.tsx"/>

## Dynamic loading

Configure `lazyLoad` to enable dynamic loading of the first expansion. You can set the delay through `lazyLoadWaitSecond`, the default is `1000ms`.

<code src="./demos/index5.tsx"/>

## API

| Name               | Description                   | Type              | Default  |
| ------------------ | ----------------------------- | ----------------- | -------- |
| className          | class name                    | `string`          | `--`     |
| style              | Custom styles                 | `CSSProperties`   | `--`     |
| treeData           | Tree configuration parameters | `Array<treeData>` | `[]`     |
| defaultOpen        | default open                  | `boolean`         | `false`  |
| disabled           | disabled                      | `boolean`         | `false`  |
| avaDrop            | draggable                     | `boolean`         | `false`  |
| lazyLoad           | dynamic loading               | `boolean`         | `false`  |
| lazyLoadWaitSecond | Dynamic loading wait delay    | `number`          | `1000ms` |
| checkCallback      | Check callback function       | `Function`        | `--`     |
| dropCallback       | drop callback function        | `Function`        | `--`     |

## treeData API

| Name     | Description      | Type              | Default |
| -------- | ---------------- | ----------------- | ------- |
| title    | title            | `string`          | `--`    |
| value    | selected content | `string`          | `--`    |
| group    | Node grouping    | `number`          | `--`    |
| children | child nodes      | `Array<treeData>` | `[]`    |
