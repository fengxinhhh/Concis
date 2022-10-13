---
title: PreviewJump
nav:
  title: Component
  path: /common
group:
  title: Common
mobile: false
---

# PreviewJump

When the mouse moves into a layer and wants to trigger the preview effect, `PreviewJump` will bring a good experience.

## When to use

- When the layer or video is hovering, you need to display the jump word and click to jump to a new page.

## Basic use

The most basic `PreviewJump` component, click to jump to the specified link.

<code src="./demos/index1.tsx" />

## Disabled

Configure the `disabled` property to disable jumping.

<code src="./demos/index2.tsx" />

## Customize preview content

Customize the icon through `icon`, customize the preview text through `jumpText`, of course, you can also directly pass in the entire content through `jumpContent`.

<code src="./demos/index3.tsx" />

## Demo

Business case, jump to details via `PreviewJump` or `Link`.

<code src="./demos/index4.tsx" />

<API />