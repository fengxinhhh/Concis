---
title: Table
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Table

It is used for data collection, display, analysis and processing.

## Basic use

Basic table.

<code src="./demos/index1.tsx"/>

## Alignment and Width

Configure header data and align custom width and alignment.

<code src="./demos/index2.tsx"/>

## Expand Row

Configure expandedRowRender callback function to configure expanded rows.

<code src="./demos/index3.tsx" />

## Single choice

Configure radio to support radio selection, and radioSelectCallback gets the selection results.

<code src="./demos/index4.tsx" />

## Multiple choice

Configure checked to support multiple selections, and checkedSelectCallback gets the selection results.

<code src="./demos/index5.tsx" />

## Sort

Configure the header array structure sorter. The default sorting setting is true. Custom sorting can be set as an array. The 0 subscript represents the ascending rule, and the 1 subscript represents the descending rule.

<code src="./demos/index6.tsx" />

## Filter

Configure the header array structure filter and the component parameter transfer filter to enable filtering.

<code src="./demos/index11.tsx" />

## #The suggested schemes for scrolling, lazy loading and paging of the following virtual lists as big data cannot be used at the same time. Only one of them can be selected for development

## Virtual list scrolling

LargeDateShowNum indicates the number of data displayed in a fixed column. The default is 10. The virtual list is enabled through virtualized.

<code src="./demos/index7.tsx" />

## Lazy loading

LargeDateShowNum indicates the number of initial presentations. The default is 10. LazyLoad is used to enable lazy loading.

<code src="./demos/index8.tsx" />

## Pagination

Enable pagination through pagination, and change pagination alignment through pagination Align.

<code src="./demos/index9.tsx" />

## Drag

Enable dragging through dropable.

<code src="./demos/index10.tsx" />

<API />
