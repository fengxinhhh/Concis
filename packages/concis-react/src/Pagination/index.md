---
title: Pagination
nav:
  title: Component
  path: /common
group:
  title: Navigation
mobile: false
---

# Pagination

The long list is separated by pages, and only one page is loaded at a time.

## When to use

- When loading/rendering all data will take a lot of time;

- You can switch page numbers to browse data.

## Basic use

Basic pager.

<code src="./demos/index1.tsx"/>

## Big data paging

When the amount of `total` data is large, it will be automatically displayed as a large data paging state.

<code src="./demos/index2.tsx"/>

## Number of entries per page limit

Configure `showSizeChanger` to increase the limit of the number of items displayed per page `select`.

<code src="./demos/index3.tsx"/>

## Input box jump

Configure `showJumpInput` to implement a jump pager,

<code src="./demos/index4.tsx"/>

## API

| Name | Description | Type | Default |
| --- | --- | --- | --- |
| className | Custom class name | `string` | `--` |
| style | Custom styles | `CSSProperties` | `--` |
| defaultIndex | Default page number | `number` | `1` |
| total | total number of data | `number` | `0` |
| showSizeChanger | Show the number of items per page Select | `boolean` | `false` |
| pageSizeOptions | Number of entries per page | `number[]` | `10` |
| showJumpInput | Show jump page input box | `boolean` | `false` |
| changePageCallback | Callback after changing page number | `Function` | `--` |
| changePageSizeCallback | Change the callback after each page is displayed | `Function` | `--` |
