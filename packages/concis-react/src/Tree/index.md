---
title: Tree
nav:
  title: Component
  path: /common
group:
  title: Data entry
mobile: false
---

# Tree

Tree type selection control.

## When to use

Similar to the Select control, TreeSelect can be used when the selectable data structure is a tree structure, such as company level, discipline system, classification catalog, etc.

## Basic use

The most basic use.

<code src="./demos/index1.tsx"/>

## Search

Search via `avaSearch`.

<code src="./demos/index2.tsx"/>

## Default expansion

Configure `defaultOpen` to expand all nodes by default.

<code src="./demos/index3.tsx"/>

## Multiple choice

Multiple selection is supported via `avaChooseMore`.

<code src="./demos/index4.tsx"/>

## API

| Name           | Description                   | Type              | Default |
| -------------- | ----------------------------- | ----------------- | ------- |
| className      | class name                    | `string`          | `--`    |
| style          | Custom styles                 | `CSSProperties`   | `--`    |
| treeData       | Tree configuration parameters | `Array<treeNode>` | `[]`    |
| width          | width                         | `string`          | `200px` |
| avaSearch      | support search                | `boolean`         | `false` |
| avaChooseMore  | supports multiple selection   | `boolean`         | `false` |
| defaultOpen    | fully expanded                | `boolean`         | `false` |
| chooseCallback | Choose callback function      | `Function`        | `--`    |

## treeNode API

| Name     | Description      | Type              | Default |
| -------- | ---------------- | ----------------- | ------- |
| title    | title            | `string`          | `--`    |
| value    | selected content | `string`          | `--`    |
| children | child nodes      | `Array<treeNode>` | `[]`    |
