---
title: Avatar
nav:
  title: Component
  path: /common
group:
  title: Data display
mobile: false
---

# Avatar

It can be used for avatar display and can be displayed in the form of pictures, icons or characters.

## When to use

Basic use of avatars. If the avatar is text, the font size will be automatically adjusted to fit the avatar box.

## Basic use

Basic use of avatar.

<code src="./demos/index1.tsx" />

## Size and shape

Configure the size parameter to change the size. The default value is 40px; Configure shape: square as a square head.

<code src="./demos/index2.tsx" />

## Head portrait group

AvatarGroup allows you to use the avatar group function. You can specify the size of avatars through size, and configure common styles for each avatar through style, such as spacing.

<code src="./demos/index3.tsx" />

## Interaction

Interactive buttons can be customized through triggerIcon and triggerType. There are two types: mask and button. Callbacks can be added through the onClick parameter.

<code src="./demos/index4.tsx" />

## Text adaptation

Configure autoFixFontSize to adaptively adapt the avatar with uncertain text content length. The avatar is full, and the default is true.

<code src="./demos/index5.tsx" />

<API />
