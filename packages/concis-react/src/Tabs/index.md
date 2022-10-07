---
title: Tabs
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Tabs

Tab Toggle Components.

## Basic use

The most basic tab.

<code src="./demos/index1.tsx"/>

## Disable

Disable a tab.

<code src="./demos/index6.tsx"/>

## Location

Configure `tabPosition` to use different layouts. There are four methods: `left`, `right`, `top`, and `bottom`. The default is` top `.

<code src="./demos/index2.tsx"/>

## Different types

Configure `type` using different layouts. There are four methods: `line`, `text`, `round`, and `card`. The default is` line `.

<code src="./demos/index3.tsx"/>

## Additional content

Set additional tabs on the right through `extra`. Only horizontal arrangement is supported.

<code src="./demos/index4.tsx"/>

## Dynamic Increase/Decrease Tab

Configure `editable` to enable the editing mode. Use `onAddTab` to obtain listening new events, `onDeleteTab` to obtain deletion events, and modify the parameter transfer data.

It only takes effect when `type`=`card`.

<code src="./demos/index5.tsx" />

## Nesting

Components support nested use.

<code src="./demos/index7.tsx" />

## Different sizes

Configure `size` to customize different sizes, including `mini`, `small`, `default` and `large`. The default size is` default `.

<code src="./demos/index8.tsx" />

## Scroll

When the navigation bar is stretched for a certain distance, scrolling is automatically enabled.

<code src="./demos/index9.tsx" />

<API />

##  TabPane

| Name  | Description | Type     | Default |
| ----- | ----------- | -------- | ------- |
|Key | Unique ID | ` string ` | `--`|
|Title | Title | ` string ` | `--`|
