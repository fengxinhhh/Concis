---
title: Badge
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Badge

It usually appears in the upper right corner of the icon or text. Provide timely and important information prompts.

## Basic use

Basic usage. Simply specify count to display the logo.

<code src="./demos/index1.tsx" />

## Independent use

When children is empty, the logo will be displayed independently.

<code src="./demos/index2.tsx" />

## Small red dot

Set dot to display only small red dots without displaying numbers. Only when count>0 is displayed, and the position of the small red dot can be customized through offset.

<code src="./demos/index3.tsx" />

## Text content

Set text to set the logo as text content.

<code src="./demos/index4.tsx" />

## Maximum

Set maxCount to limit the maximum displayed logo value. If it exceeds the value, a+suffix will be added. MaxCount defaults to 99.

<code src="./demos/index5.tsx" />

<API />
